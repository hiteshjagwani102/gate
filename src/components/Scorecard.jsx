import PhotoBox from "./PhotoBox";
import { RESULT_DATA } from "../data/constants";

export default function Scorecard({ scorecardRef, resultData }) {
  const d = resultData || RESULT_DATA;

  // Extract subject code from testPaper (e.g., "Production and Industrial (PI)" -> "PI")
  const subjectCode = d.testPaper.match(/\(([^)]+)\)$/)?.[1] || "PI";
  return (
    <div
      ref={scorecardRef}
      style={{
        background: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 16, fontSize: 12, fontWeight: 600 }}>
        GATE
      </div>

      <div
        style={{
          textAlign: "center",
          marginBottom: 24,
          fontSize: 16,
          fontWeight: 600,
          color: "#333",
        }}
      >
        Your GATE 2026 Result [{subjectCode}]
      </div>

      <div style={{ height: "1px", background: "#ddd", marginBottom: 16 }} />

      {/* Main Content - Two Column */}
      <div style={{ display: "flex", gap: 32 }}>
        {/* Left Column - Form Fields */}
        <div style={{ flex: 1 }}>
          {/* Name */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 4 }}>
              Name
            </div>
            <div
              style={{
                border: "1px solid #000",
                padding: "8px 10px",
                fontSize: 13,
                fontWeight: 700,
                backgroundColor: "#f5f5dc",
              }}
            >
              {d.name}
            </div>
          </div>

          {/* Registration Number */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 4 }}>
              Registration Number
            </div>
            <div
              style={{
                border: "1px solid #000",
                padding: "8px 10px",
                fontSize: 13,
                fontWeight: 700,
                backgroundColor: "#f5f5dc",
              }}
            >
              {d.registrationNumber}
            </div>
          </div>

          {/* Gender */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 4 }}>
              Gender
            </div>
            <div
              style={{
                border: "1px solid #000",
                padding: "8px 10px",
                fontSize: 13,
                fontWeight: 700,
                backgroundColor: "#f5f5dc",
              }}
            >
              {d.gender}
            </div>
          </div>

          {/* Parent/Guardian's name */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 4 }}>
              Parent/Guardian's name
            </div>
            <div
              style={{
                border: "1px solid #000",
                padding: "8px 10px",
                fontSize: 13,
                fontWeight: 700,
                backgroundColor: "#f5f5dc",
              }}
            >
              {d.parentGuardian}
            </div>
          </div>

          {/* Date of Birth */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 4 }}>
              Date of Birth (YYYY-MM-DD)
            </div>
            <div
              style={{
                border: "1px solid #000",
                padding: "8px 10px",
                fontSize: 13,
                fontWeight: 700,
                backgroundColor: "#f5f5dc",
              }}
            >
              {d.dob}
            </div>
          </div>

          {/* Test Paper */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 4 }}>
              Test Paper
            </div>
            <div
              style={{
                border: "1px solid #000",
                padding: "8px 10px",
                fontSize: 13,
                fontWeight: 700,
                backgroundColor: "#f5f5dc",
              }}
            >
              {d.testPaper}
            </div>
          </div>

          {/* Score Boxes Row */}
          <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
            {/* Marks out of 100 */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 4 }}>
                Marks out of 100#
              </div>
              <div
                style={{
                  border: "2px solid #000",
                  padding: "12px 8px",
                  fontSize: 20,
                  fontWeight: 700,
                  textAlign: "center",
                  backgroundColor: "#fff",
                }}
              >
                {d.marksOutOf100}
              </div>
            </div>

            {/* All India Rank */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 4 }}>
                All India Rank in the Test Paper
              </div>
              <div
                style={{
                  border: "2px solid #000",
                  padding: "12px 8px",
                  fontSize: 20,
                  fontWeight: 700,
                  textAlign: "center",
                  backgroundColor: "#fff",
                }}
              >
                {d.allIndiaRank}
              </div>
            </div>

            {/* Score */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 4 }}>
                Score
              </div>
              <div
                style={{
                  border: "2px solid #000",
                  padding: "12px 8px",
                  fontSize: 20,
                  fontWeight: 700,
                  textAlign: "center",
                  backgroundColor: "#fff",
                }}
              >
                {d.gateScore}
              </div>
            </div>
          </div>

          {/* Qualifying Marks */}
          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#333", marginBottom: 8 }}>
              Qualifying Marks##
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    fontSize: 12,
                    fontWeight: 700,
                    backgroundColor: "#f5f5dc",
                  }}
                >
                  {d.qualifyingMarks.general}
                </div>
                <div style={{ fontSize: 10, color: "#444", marginTop: 4 }}>General</div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    fontSize: 12,
                    fontWeight: 700,
                    backgroundColor: "#f5f5dc",
                  }}
                >
                  {d.qualifyingMarks.obcNclEws}
                </div>
                <div style={{ fontSize: 10, color: "#444", marginTop: 4 }}>OBC-NCLEWS</div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    fontSize: 12,
                    fontWeight: 700,
                    backgroundColor: "#f5f5dc",
                  }}
                >
                  {d.qualifyingMarks.scStPwd}
                </div>
                <div style={{ fontSize: 10, color: "#444", marginTop: 4 }}>SC/ST/PwD</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Photo and Signature */}
        <div style={{ width: 140, flexShrink: 0 }}>
          {/* Photograph */}
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                border: "2px solid #000",
                width: 130,
                height: 140,
                overflow: "hidden",
                marginBottom: 4,
              }}
            >
              <PhotoBox />
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: 11,
                fontWeight: 600,
                color: "#333",
              }}
            >
              Photograph
            </div>
          </div>

          {/* Signature */}
          <div>
            <div
              style={{
                border: "2px solid #000",
                width: 130,
                height: 60,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 4,
                backgroundColor: "#f9f9f9",
              }}
            >
              <img
                src="/signature.png"
                alt="Signature"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: 11,
                fontWeight: 600,
                color: "#333",
              }}
            >
              Signature
            </div>
          </div>
        </div>
      </div>

      {/* Footer Notes */}
      <div
        style={{
          marginTop: 28,
          paddingTop: 12,
          borderTop: "1px solid #999",
          fontSize: 9,
          color: "#555",
          lineHeight: 1.6,
        }}
      >
        <div style={{ marginBottom: 6 }}>
          #Normalised marks in case of multiseason papers (CE and CS)
        </div>
        <div>
          ##A candidate is considered qualified if the marks secured are greater than or equal to the qualifying
          marks mentioned for the category, for which a valid category certificate, if applicable, must be produced
          along with the Score Card
        </div>
      </div>
    </div>
  );
}
