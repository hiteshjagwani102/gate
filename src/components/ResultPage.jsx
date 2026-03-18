import { useRef, useState } from "react";
import Scorecard from "./Scorecard";
import { RESULT_DATA } from "../data/constants";

export default function ResultPage({ setPage }) {
  const scorecardRef = useRef();
  const [downloading, setDownloading] = useState(false);

  const loadScript = (src) =>
    new Promise((res, rej) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) return res();
      const s = document.createElement("script");
      s.src = src;
      s.onload = res;
      s.onerror = rej;
      document.head.appendChild(s);
    });

  const downloadPDF = async () => {
    setDownloading(true);
    try {
      await Promise.all([
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"),
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"),
      ]);

      const canvas = await window.html2canvas(scorecardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();
      const renderW = pdfW;
      const renderH = (canvas.height * renderW) / canvas.width;

      if (renderH <= pdfH) {
        pdf.addImage(imgData, "PNG", 0, 0, renderW, renderH);
      } else {
        let yOffset = 0;
        let remaining = renderH;
        let pageNum = 0;
        while (remaining > 0) {
          if (pageNum > 0) pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, -yOffset, renderW, renderH);
          yOffset += pdfH;
          remaining -= pdfH;
          pageNum++;
        }
      }

      pdf.save(`GATE2026_Scorecard_${RESULT_DATA.registrationNumber}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("PDF download failed. Please use Print (Ctrl+P) and save as PDF.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#d8dde3", padding: "20px 16px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Action bar */}
        <div className="no-print" style={{ display: "flex", gap: 10, marginBottom: 14 }}>
          <button
            onClick={() => setPage("home")}
            style={{
              background: "#546e7a", color: "#fff", border: "none",
              padding: "8px 16px", borderRadius: 3,
              cursor: "pointer", fontSize: 13,
            }}
          >
            ← Back to Home
          </button>

          <button
            onClick={downloadPDF}
            disabled={downloading}
            style={{
              background: downloading ? "#78909c" : "#c62828",
              color: "#fff", border: "none",
              padding: "8px 20px", borderRadius: 3,
              cursor: downloading ? "not-allowed" : "pointer",
              fontSize: 13, fontWeight: 700,
              display: "flex", alignItems: "center", gap: 6,
              boxShadow: downloading ? "none" : "0 2px 8px rgba(198,40,40,0.35)",
              transition: "background 0.2s",
            }}
          >
            {downloading ? "⏳ Generating PDF…" : "⬇ Download Scorecard PDF"}
          </button>

          <button
            onClick={() => window.print()}
            style={{
              background: "#0d47a1", color: "#fff", border: "none",
              padding: "8px 16px", borderRadius: 3,
              cursor: "pointer", fontSize: 13,
            }}
          >
            🖨 Print
          </button>
        </div>

        {/* Scorecard document */}
        <Scorecard scorecardRef={scorecardRef} />

        <div
          className="no-print"
          style={{ marginTop: 12, fontSize: 12, color: "#666", textAlign: "center" }}
        >
          For any discrepancy, contact GATE-JAM Office, IIT Guwahati | gate@iitg.ac.in
        </div>
      </div>
    </div>
  );
}
