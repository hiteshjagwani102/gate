import { useState } from "react";
import { VALID_CREDS } from "../data/constants";

export default function LoginPage({ setPage, setAuthed }) {
  const [enrollment, setEnrollment] = useState("");
  const [password, setPassword] = useState("");
  const [captcha] = useState(() => Math.floor(1000 + Math.random() * 9000).toString());
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!enrollment || !password || !captchaInput) {
      setError("Please fill all fields.");
      return;
    }
    if (captchaInput !== captcha) {
      setError("Invalid captcha. Please try again.");
      return;
    }
    if (enrollment !== VALID_CREDS.enrollment || password !== VALID_CREDS.password) {
      setError("Invalid Enrollment ID or Password. Please check and try again.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthed(true);
      setPage("result");
    }, 1200);
  };

  const fields = [
    { label: "Enrollment ID / Registration Number", val: enrollment, set: setEnrollment, placeholder: "", type: "text" },
    { label: "Password", val: password, set: setPassword, placeholder: "", type: "password" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f4f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 48,
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "100%",
          maxWidth: 460,
          borderRadius: 6,
          boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ background: "#0d47a1", padding: "20px 24px", color: "#fff" }}>
          <div style={{ fontSize: 13, color: "#b3d4ff" }}>GATE 2026 — GOAPS Portal</div>
          <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "Georgia, serif", marginTop: 4 }}>
            Candidate Login
          </div>
          <div style={{ fontSize: 12, color: "#b3d4ff", marginTop: 2 }}>
            Graduate Online Application Processing System
          </div>
        </div>

        <div style={{ padding: "28px 28px 24px" }}>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 20, lineHeight: 1.6 }}>
            Enter your <strong>Enrollment ID / Registration Number</strong> and{" "}
            <strong>Password</strong> to view your GATE 2026 Result.
          </p>

          {error && (
            <div
              style={{
                background: "#ffebee",
                border: "1px solid #ef9a9a",
                color: "#c62828",
                padding: "10px 14px",
                borderRadius: 4,
                fontSize: 13,
                marginBottom: 16,
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {fields.map((f) => (
            <div key={f.label} style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#333", marginBottom: 5 }}>
                {f.label} <span style={{ color: "#c62828" }}>*</span>
              </label>
              <input
                type={f.type}
                value={f.val}
                onChange={(e) => f.set(e.target.value)}
                placeholder={f.placeholder}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  fontFamily: "monospace",
                }}
              />
            </div>
          ))}

          {/* Captcha */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#333", marginBottom: 5 }}>
              Captcha <span style={{ color: "#c62828" }}>*</span>
            </label>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div
                style={{
                  background: "repeating-linear-gradient(45deg, #e8eaf6, #e8eaf6 2px, #c5cae9 2px, #c5cae9 4px)",
                  border: "1px solid #7986cb",
                  padding: "8px 20px",
                  borderRadius: 4,
                  fontFamily: "monospace",
                  fontSize: 20,
                  fontWeight: 900,
                  letterSpacing: 6,
                  color: "#283593",
                  userSelect: "none",
                  minWidth: 100,
                  textAlign: "center",
                }}
              >
                {captcha}
              </div>
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter captcha"
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%",
              background: loading ? "#78909c" : "#0d47a1",
              color: "#fff",
              border: "none",
              padding: "12px",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 4,
              cursor: loading ? "not-allowed" : "pointer",
              letterSpacing: 0.5,
              transition: "background 0.2s",
            }}
          >
            {loading ? "Authenticating…" : "LOGIN & VIEW RESULT"}
          </button>

          <div style={{ marginTop: 14, fontSize: 12, color: "#888", textAlign: "center" }}>
            For technical issues, contact: gate@iitg.ac.in
          </div>
        </div>
      </div>
    </div>
  );
}
