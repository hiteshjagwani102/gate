export default function CandidateSignature() {
  return (
    <svg
      viewBox="0 0 200 80"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Digitally signed indicator */}
      <circle cx="160" cy="15" r="12" fill="none" stroke="#2e7d32" strokeWidth="1.5" />
      <path d="M155 15 L158 18 L165 11" fill="none" stroke="#2e7d32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Signature path - more authentic electronic look */}
      <path
        d="M15 50 Q25 30, 35 45 Q42 55, 50 42 Q58 32, 68 48 Q75 58, 85 45 Q92 38, 100 52 Q108 62, 115 48 Q120 42, 128 55"
        fill="none" stroke="#1a237e" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.9"
      />
      
      {/* Timestamp/seal effect */}
      <circle cx="160" cy="65" r="8" fill="none" stroke="#1a237e" strokeWidth="1" opacity="0.5" />
      <text
        x="160" y="69"
        fontFamily="monospace"
        fontSize="6" fill="#1a237e" opacity="0.4" textAnchor="middle"
      >
        ✓
      </text>
    </svg>
  );
}
