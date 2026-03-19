import { RESULT_DATA } from "../data/constants";

export default function ApplicationStatusPage({ setPage, setSelectedSubject }) {
  const subjects = [
    { code: "PI", name: "Production and Industrial" },
    { code: "ME", name: "Mechanical Engineering" },
  ];

  const handleViewResult = (subjectCode) => {
    setSelectedSubject(subjectCode);
    setPage("result");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f4f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 48,
        paddingBottom: 40,
      }}
    >
      {/* Header */}
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          background: "#6a4c93",
          color: "white",
          padding: "20px 24px",
          fontSize: 28,
          fontWeight: "bold",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          textAlign: "center",
        }}
      >
        Application Status
      </div>

      {/* Info Card */}
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          background: "white",
          padding: "24px",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          marginBottom: 24,
        }}
      >
        {/* Enrollment ID */}
        <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid #e0e0e0" }}>
          <div style={{ fontSize: 14, fontWeight: "600", color: "#333", marginBottom: 4 }}>
            Enrollment ID
          </div>
          <div style={{ fontSize: 20, fontWeight: "bold", color: "#1a1a3e" }}>
            {RESULT_DATA.registrationNumber}
          </div>
        </div>

        {/* Applicant Name */}
        <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid #e0e0e0" }}>
          <div style={{ fontSize: 14, fontWeight: "600", color: "#333", marginBottom: 4 }}>
            Applicant Name
          </div>
          <div style={{ fontSize: 20, fontWeight: "bold", color: "#1a1a3e" }}>
            {RESULT_DATA.name}
          </div>
        </div>

        {/* Applicant Status */}
        <div style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 14, fontWeight: "600", color: "#333", marginBottom: 4 }}>
            Applicant Status
          </div>
          <div style={{ fontSize: 16, fontWeight: "500", color: "#1a1a3e", lineHeight: 1.6 }}>
            Your GATE 2026 results are available for viewing
          </div>
        </div>
      </div>

      {/* View Result Buttons - Row 1 */}
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 16,
        }}
      >
        {subjects.map((subject) => (
          <button
            key={`result-${subject.code}`}
            onClick={() => handleViewResult(subject.code)}
            style={{
              background: "#6a4c93",
              color: "white",
              border: "none",
              padding: "32px 16px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: 1.6,
              transition: "background 0.3s, transform 0.2s",
              boxShadow: "0 4px 8px rgba(106, 76, 147, 0.3)",
              letterSpacing: 0.5,
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#573a7d";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#6a4c93";
              e.target.style.transform = "translateY(0)";
            }}
          >
            <div>VIEW</div>
            <div>RESULT</div>
            <div>({subject.code})</div>
          </button>
        ))}
      </div>

      {/* View Responses Buttons - Row 2 (Clickable but inactive) */}
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 24,
        }}
      >
        {subjects.map((subject) => (
          <button
            key={`responses-${subject.code}`}
            onClick={() => {}}
            style={{
              background: "#6a4c93",
              color: "white",
              border: "none",
              padding: "32px 16px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: 1.6,
              transition: "background 0.3s, transform 0.2s",
              boxShadow: "0 4px 8px rgba(106, 76, 147, 0.3)",
              letterSpacing: 0.5,
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#573a7d";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#6a4c93";
              e.target.style.transform = "translateY(0)";
            }}
          >
            <div>VIEW</div>
            <div>RESPONSES</div>
            <div>({subject.code})</div>
          </button>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => setPage("home")}
        style={{
          background: "#546e7a",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: 4,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: "600",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.background = "#37474f")}
        onMouseLeave={(e) => (e.target.style.background = "#546e7a")}
      >
        ← Logout
      </button>
    </div>
  );
}
