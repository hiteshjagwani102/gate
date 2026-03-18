const NAV_ITEMS = ["Home", "About GATE", "Notifications", "Result", "Contact"];

export default function Navbar({ page, setPage }) {
  return (
    <nav
      style={{
        background: "linear-gradient(135deg, #0d47a1 0%, #1565c0 60%, #1976d2 100%)",
        padding: 0,
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
      }}
    >
      {/* Gov strip */}
      <div
        style={{
          background: "#8b0000",
          padding: "4px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          color: "#fff",
        }}
      >
        <span>भारत सरकार | Government of India | Ministry of Education</span>
        <span>📞 GATE Helpdesk: 0361-258-2751</span>
      </div>

      {/* Logo row */}
      <div style={{ display: "flex", alignItems: "center", padding: "10px 24px", gap: 16 }}>
        <div
          style={{
            width: 52, height: 52, borderRadius: "50%", background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 11, color: "#0d47a1", textAlign: "center",
            lineHeight: 1.2, border: "3px solid #ffd700",
          }}
        >
          IIT<br />IITG
        </div>
        <div>
          <div style={{ color: "#ffd700", fontFamily: "Georgia, serif", fontSize: 13, letterSpacing: 1 }}>
            अभियांत्रिकी स्नातक अभिक्षमता परीक्षा 2026
          </div>
          <div style={{ color: "#fff", fontSize: 22, fontWeight: 800, fontFamily: "Georgia, serif", letterSpacing: 1 }}>
            GATE 2026
          </div>
          <div style={{ color: "#b3d4ff", fontSize: 11 }}>
            Graduate Aptitude Test in Engineering | Organizing Institute: IIT Guwahati
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
          {["MHRD", "IISc", "IIT"].map((l) => (
            <div
              key={l}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff", fontSize: 10, padding: "4px 8px", borderRadius: 3,
              }}
            >
              {l}
            </div>
          ))}
        </div>
      </div>

      {/* Nav links */}
      <div style={{ background: "rgba(0,0,0,0.2)", display: "flex", gap: 0, overflowX: "auto" }}>
        {NAV_ITEMS.map((item) => {
          const isActive =
            (page === "home" && item === "Home") ||
            ((page === "login" || page === "result") && item === "Result");
          return (
            <button
              key={item}
              onClick={() => {
                if (item === "Result") setPage("login");
                else if (item === "Home") setPage("home");
              }}
              style={{
                background: isActive ? "rgba(255,255,255,0.2)" : "transparent",
                border: "none",
                color: "#fff",
                padding: "10px 18px",
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "Georgia, serif",
                borderBottom: `3px solid ${isActive ? "#ffd700" : "transparent"}`,
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
