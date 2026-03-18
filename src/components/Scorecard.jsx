import ChairmanSignature from "./ChairmanSignature";
import CandidateSignature from "./CandidateSignature";
import PhotoBox from "./PhotoBox";
import QRCode from "./QRCode";
import { RESULT_DATA } from "../data/constants";

const d = RESULT_DATA;

const DETAIL_ROWS = [
  ["Name of the Candidate", d.name],
  ["Name of the Parent/Guardian", d.parentGuardian],
  ["Registration No.", d.registrationNumber],
  ["Date of Birth", d.dob],
  ["Test Paper", d.testPaper],
  ["Date of Examination", d.dateOfExamination],
];

export default function Scorecard({ scorecardRef }) {
  return (
    <div
      ref={scorecardRef}
      style={{
        background: "#fff",
        boxShadow: "0 6px 28px rgba(0,0,0,0.15)",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #bbb",
      }}
    >
      {/* ── TOP HEADER ── */}
      <div
        style={{
          background: "linear-gradient(180deg, #e8f0f7 0%, #d0dff0 100%)",
          borderBottom: "3px solid #0d47a1",
          padding: "14px 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Left logo */}
          <div
            style={{
              width: 70, height: 70, borderRadius: "50%", background: "#fff",
              border: "3px solid #0d47a1", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", fontSize: 9,
              fontWeight: 900, color: "#0d47a1", textAlign: "center",
              lineHeight: 1.3, flexShrink: 0,
            }}
          >
            <div style={{ fontSize: 11 }}>🔱</div>
            <div>GATE</div>
            <div>2026</div>
            <div style={{ fontSize: 7 }}>IITG</div>
          </div>

          {/* Center */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "#555", fontWeight: 600, letterSpacing: 1 }}>
              GRADUATE APTITUDE TEST IN ENGINEERING 2026
            </div>
            <div style={{ fontSize: 11, color: "#333", marginTop: 2 }}>
              अभियांत्रिकी स्नातक अभिक्षमता परीक्षा २०२६
            </div>
            <div style={{ fontSize: 10, color: "#555", marginTop: 3 }}>
              Organising Institute: INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI
            </div>
            <div
              style={{
                marginTop: 8, background: "#0d47a1", color: "#fff",
                fontSize: 22, fontWeight: 900, letterSpacing: 4,
                padding: "4px 0", fontFamily: "Georgia, serif",
              }}
            >
              SCORE CARD
            </div>
          </div>

          {/* Right logo */}
          <div
            style={{
              width: 70, height: 70, borderRadius: "50%", background: "#fff",
              border: "3px solid #8b0000", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", fontSize: 8,
              fontWeight: 900, color: "#8b0000", textAlign: "center",
              lineHeight: 1.4, flexShrink: 0,
            }}
          >
            <div style={{ fontSize: 11 }}>⚙️</div>
            <div>IIT</div>
            <div>GUWAHATI</div>
          </div>
        </div>
      </div>

      {/* ── CANDIDATE DETAILS + PHOTO ── */}
      <div style={{ padding: "16px 20px 12px", borderBottom: "1px solid #ccc" }}>
        <div style={{ display: "flex", gap: 16 }}>
          {/* Detail rows */}
          <div style={{ flex: 1 }}>
            {DETAIL_ROWS.map(([label, val]) => (
              <div
                key={label}
                style={{ display: "flex", borderBottom: "1px solid #e0e0e0", padding: "5px 0" }}
              >
                <div style={{ width: 220, fontSize: 12, color: "#444", fontWeight: 600, flexShrink: 0 }}>
                  {label}
                </div>
                <div style={{ fontSize: 12, color: "#111", fontWeight: 500 }}>{val}</div>
              </div>
            ))}

            {/* Score + Marks row */}
            <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#444", fontWeight: 600, marginBottom: 3 }}>
                  GATE Score
                </div>
                <div
                  style={{
                    border: "2px solid #0d47a1", padding: "6px 12px",
                    fontSize: 26, fontWeight: 900, color: "#0d47a1",
                    textAlign: "center", background: "#e8f0fd",
                  }}
                >
                  {d.gateScore}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#444", fontWeight: 600, marginBottom: 3 }}>
                  *Marks out of 100
                </div>
                <div
                  style={{
                    border: "2px solid #555", padding: "6px 12px",
                    fontSize: 26, fontWeight: 900, color: "#333",
                    textAlign: "center", background: "#f5f5f5",
                  }}
                >
                  {d.marksOutOf100}
                </div>
              </div>
            </div>
          </div>

          {/* Photo + signature */}
          <div
            style={{
              width: 120, flexShrink: 0,
              display: "flex", flexDirection: "column",
              gap: 8, alignItems: "center",
            }}
          >
            <PhotoBox />
            <div
              style={{
                width: "100%", height: 50,
                border: "1px solid #aaa",
                background: "#fafafa",
                padding: "4px 6px",
              }}
            >
              <CandidateSignature />
            </div>
            <div style={{ fontSize: 9, color: "#555", textAlign: "center" }}>
              *Normalised marks across two sessions of the test paper
            </div>
          </div>
        </div>
      </div>

      {/* ── AIR + QUALIFYING MARKS + QR ── */}
      <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
        {/* AIR + qualifying marks */}
        <div style={{ flex: 1, padding: "14px 20px", borderRight: "1px solid #ccc" }}>
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            {/* AIR */}
            <div>
              <div style={{ fontSize: 11, color: "#444", fontWeight: 600, marginBottom: 4 }}>
                All India Rank (AIR)
                <br />
                in the test paper
              </div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#8b0000", lineHeight: 1 }}>
                {d.allIndiaRank}
              </div>
              <div style={{ fontSize: 11, color: "#555", marginTop: 8 }}>
                Number of candidates
                <br />
                appeared for the test paper:{" "}
                <strong>{d.totalCandidates}</strong>
              </div>
            </div>

            {/* Qualifying Marks */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: "#444", fontWeight: 700, marginBottom: 6 }}>
                Qualifying Marks
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#e8eaf6" }}>
                    {["General", "EWS/OBC-NCL", "SC/ST/PwD"].map((h) => (
                      <th
                        key={h}
                        style={{ border: "1px solid #bbb", padding: "4px 8px", fontWeight: 700, fontSize: 11 }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {[d.qualifyingMarks.general, d.qualifyingMarks.obcNclEws, d.qualifyingMarks.scStPwd].map(
                      (val, i) => (
                        <td
                          key={i}
                          style={{
                            border: "1px solid #bbb", padding: "6px 8px",
                            textAlign: "center", fontWeight: 700, fontSize: 14,
                          }}
                        >
                          {val}
                        </td>
                      )
                    )}
                  </tr>
                </tbody>
              </table>
              <div style={{ fontSize: 10, color: "#555", marginTop: 6, lineHeight: 1.5 }}>
                A candidate is considered <strong>qualified</strong> if the marks secured are
                greater than or equal to the qualifying marks mentioned for the category, for
                which a valid category certificate, if applicable, must be produced along with
                this Score Card.
              </div>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div
          style={{
            width: 110, padding: "14px 12px",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 6,
          }}
        >
          <QRCode />
          <div style={{ fontSize: 8, color: "#555", textAlign: "center", lineHeight: 1.4 }}>
            1bf7de94b589c2dad99cbad5f12b0a
          </div>
          <div style={{ fontSize: 9, color: "#555", textAlign: "center" }}>Scan to verify</div>
        </div>
      </div>

      {/* ── VALIDITY BANNER ── */}
      <div
        style={{
          background: "#e8f5e9", border: "1.5px solid #43a047",
          margin: "12px 20px", padding: "8px 16px", borderRadius: 4,
          display: "flex", alignItems: "center", gap: 10,
        }}
      >
        <div style={{ fontSize: 18 }}>✅</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#2e7d32" }}>
            This Score Card is valid
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#2e7d32" }}>
            up to 31st March 2029.
          </div>
        </div>
      </div>

      {/* ── CHAIRMAN SIGNATURE + SEAL ── */}
      <div
        style={{
          padding: "10px 20px 14px",
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          borderTop: "1px solid #ddd",
        }}
      >
        <div>
          <ChairmanSignature />
          <div style={{ fontSize: 12, fontWeight: 700, color: "#111", marginTop: 4 }}>
            Prof. P. Arunagam
          </div>
          <div style={{ fontSize: 11, color: "#444" }}>Organising Chairperson, GATE 2026</div>
          <div style={{ fontSize: 11, color: "#444" }}>On behalf of NCB-GATE</div>
          <div style={{ fontSize: 11, color: "#444" }}>Ministry of Education (MoE)</div>
        </div>

        {/* Seal */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: 80, height: 80, borderRadius: "50%",
              border: "3px solid #0d47a1",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              fontSize: 8, fontWeight: 700, color: "#0d47a1",
              textAlign: "center", lineHeight: 1.5,
              background: "radial-gradient(circle, #e8f0fd 60%, #c5d8f5 100%)",
            }}
          >
            <div>⚙️</div>
            <div>OFFICIAL</div>
            <div>SEAL</div>
            <div>IIT GUWAHATI</div>
            <div>GATE 2026</div>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 11, color: "#555" }}>
            Generated:{" "}
            {new Date().toLocaleDateString("en-IN", {
              day: "2-digit", month: "long", year: "numeric",
            })}
          </div>
          <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>gate2026.iitg.ac.in</div>
          <div style={{ fontSize: 10, color: "#777", marginTop: 6 }}>pg 1 of 2</div>
        </div>
      </div>

      {/* ── PAGE 2: SCORE COMPUTATION ── */}
      <div style={{ borderTop: "3px solid #0d47a1", background: "#f9fafb" }}>
        <div
          style={{
            background: "#0d47a1", color: "#fff",
            padding: "8px 20px", fontSize: 13, fontWeight: 700, letterSpacing: 1,
          }}
        >
          GATE SCORE COMPUTATION
        </div>

        <div style={{ padding: "16px 20px", fontSize: 12, color: "#333", lineHeight: 1.8 }}>
          <p style={{ margin: "0 0 10px" }}>
            The GATE 2026 score is calculated using the formula:
          </p>

          {/* Formula box */}
          <div
            style={{
              background: "#fff", border: "1px solid #ccc",
              padding: "14px 20px", borderRadius: 4,
              margin: "10px 0 14px", fontFamily: "Georgia, serif",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: "#0d47a1", marginBottom: 6 }}>
              GATE Score = S<sub>q</sub> + (S<sub>t</sub> - S<sub>q</sub>) × (M - M
              <sub>q</sub>) / (M<sub>t</sub> - M<sub>q</sub>)
            </div>
            <div style={{ fontSize: 11, color: "#555", fontStyle: "italic" }}>where,</div>
            <div style={{ fontSize: 11, color: "#444", marginTop: 6, lineHeight: 1.9 }}>
              M is the normalised marks obtained by the candidate in the test paper mentioned on
              the GATE 2026 Score Card
              <br />
              M<sub>q</sub> is the qualifying marks for general category candidates in the test
              paper
              <br />
              M<sub>t</sub> is the mean of marks of top 0.1% or top 10 (whichever is larger) of
              all the candidates who appeared in the test paper
              <br />
              S<sub>q</sub> = 350, is the score assigned to M<sub>q</sub>, and
              <br />
              S<sub>t</sub> = 900, is the score assigned to M<sub>t</sub>
            </div>
          </div>

          <p style={{ margin: "0 0 8px", fontSize: 12 }}>
            In the GATE 2026 score formula, the qualifying marks (M<sub>q</sub>) for the general
            category candidate in each subject will be: Cut-off marks for GENERAL category =
            max(25, min(40, μ + σ)). Here μ is the mean and σ is the standard deviation of
            positive marks of all the candidates who appeared in the test paper.
          </p>

          {/* Footnotes */}
          <div
            style={{
              marginTop: 14, paddingTop: 12,
              borderTop: "1px dashed #ccc",
              fontSize: 11, color: "#555", lineHeight: 1.9,
            }}
          >
            <sup>#</sup> Normalised marks in case of multi-session papers (CE and CS)
            <br />
            <sup>##</sup> Qualifying Marks shown are for GATE 2026. These may be revised if any
            candidate's result is withheld or cancelled.
            <br />
            This scorecard is digitally generated and is valid without physical signature.
            <br />
            <strong>Validity:</strong> GATE 2026 Score is valid for{" "}
            <strong>3 years</strong> from the date of announcement (March 19, 2026).
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            background: "#0d47a1", color: "#b3d4ff",
            padding: "8px 24px", fontSize: 11,
            display: "flex", justifyContent: "space-between",
          }}
        >
          <span>GATE-JAM Office, IIT Guwahati | gate@iitg.ac.in</span>
          <span>pg 2 of 2</span>
        </div>
      </div>
    </div>
  );
}
