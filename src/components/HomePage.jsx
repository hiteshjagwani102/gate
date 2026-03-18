import { useState, useEffect } from "react";
import { NAV_NOTICES } from "../data/constants";

const INFO_CARDS = [
  { icon: "📅", title: "Exam Dates", val: "Feb 7, 8, 14, 15 — 2026" },
  { icon: "🏛️", title: "Organizing Institute", val: "IIT Guwahati" },
  { icon: "📋", title: "Test Papers", val: "30 Papers (CS, EE, ME, CE…)" },
  { icon: "📊", title: "Result Date", val: "March 19, 2026" },
];

const QUICK_LINKS = [
  "GOAPS Portal",
  "Download Scorecard",
  "Final Answer Key",
  "GATE Brochure",
  "Previous Year Papers",
  "Contact GATE Office",
];

export default function HomePage({ setPage }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((p) => (p + 1) % NAV_NOTICES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f0f4f8" }}>
      {/* Marquee */}
      <div style={{ background: "#8b0000", color: "#fff", padding: "6px 16px", fontSize: 13, overflow: "hidden" }}>
        <span style={{ display: "inline-block", animation: "marquee 25s linear infinite" }}>
          {NAV_NOTICES.join("   ●   ")}
        </span>
      </div>

      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(160deg, #0d47a1 0%, #283593 40%, #1a237e 100%)",
          padding: "40px 24px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 32, fontFamily: "Georgia, serif" }}>
          GATE 2026 Result Declared!
        </h1>
        <p style={{ color: "#b3d4ff", marginTop: 8 }}>
          Graduate Aptitude Test in Engineering — Organized by IIT Guwahati
        </p>
        <button
          onClick={() => setPage("login")}
          style={{
            marginTop: 20,
            background: "#ffd700",
            color: "#0d47a1",
            border: "none",
            padding: "12px 36px",
            fontSize: 16,
            fontWeight: 800,
            borderRadius: 4,
            cursor: "pointer",
            letterSpacing: 0.5,
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          }}
        >
          VIEW YOUR RESULT →
        </button>
      </div>

      {/* Info cards */}
      <div
        style={{
          maxWidth: 1100,
          margin: "32px auto",
          padding: "0 16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {INFO_CARDS.map((c) => (
          <div
            key={c.title}
            style={{
              background: "#fff",
              borderRadius: 6,
              padding: 20,
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              borderTop: "4px solid #0d47a1",
            }}
          >
            <div style={{ fontSize: 28 }}>{c.icon}</div>
            <div style={{ fontWeight: 700, color: "#0d47a1", marginTop: 8 }}>{c.title}</div>
            <div style={{ color: "#555", fontSize: 14, marginTop: 4 }}>{c.val}</div>
          </div>
        ))}
      </div>

      {/* Notices + Quick Links */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto 32px",
          padding: "0 16px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 16,
        }}
      >
        <div style={{ background: "#fff", borderRadius: 6, padding: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
          <h3 style={{ margin: "0 0 12px", color: "#0d47a1", borderBottom: "2px solid #0d47a1", paddingBottom: 8 }}>
            📢 Latest Notifications
          </h3>
          {NAV_NOTICES.map((n, i) => (
            <div
              key={i}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #eee",
                fontSize: 14,
                color: i === 0 ? "#8b0000" : "#333",
                fontWeight: i === 0 ? 600 : 400,
              }}
            >
              {n}
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", borderRadius: 6, padding: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
          <h3 style={{ margin: "0 0 12px", color: "#0d47a1", borderBottom: "2px solid #0d47a1", paddingBottom: 8 }}>
            🔗 Quick Links
          </h3>
          {QUICK_LINKS.map((l) => (
            <div key={l} style={{ padding: "8px 0", borderBottom: "1px solid #eee", fontSize: 14 }}>
              <span style={{ color: "#1565c0", cursor: "pointer" }}>▶ {l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
