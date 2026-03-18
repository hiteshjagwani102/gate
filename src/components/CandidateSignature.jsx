export default function CandidateSignature() {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Official seal - circular */}
      <circle cx="60" cy="60" r="55" fill="none" stroke="#1a237e" strokeWidth="2" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="#1a237e" strokeWidth="1" strokeDasharray="2,3" />
      
      {/* Inner circle */}
      <circle cx="60" cy="60" r="45" fill="none" stroke="#1a237e" strokeWidth="1.5" />
      
      {/* Verification checkmark in center */}
      <circle cx="60" cy="60" r="20" fill="#e3f2fd" stroke="#2e7d32" strokeWidth="1.5" />
      <path d="M52 60 L57 65 L68 54" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* SEAL text around circle */}
      <defs>
        <path id="circlePath" d="M 30, 60 A 30, 30 0 0,1 90, 60" fill="none" />
      </defs>
      <text fontFamily="Arial, sans-serif" fontSize="10" fill="#1a237e" fontWeight="bold" letterSpacing="2">
        <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
          AUTHENTIC
        </textPath>
      </text>
      
      {/* Date below seal */}
      <text x="60" y="105" fontFamily="monospace" fontSize="8" fill="#666" textAnchor="middle">
        2026-03-19
      </text>
    </svg>
  );
}
