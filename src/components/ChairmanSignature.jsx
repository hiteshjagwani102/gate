export default function ChairmanSignature() {
  return (
    <svg
      viewBox="0 0 240 110"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 160, height: 55 }}
    >
      {/* Official digital seal border */}
      <rect x="5" y="5" width="230" height="100" fill="none" stroke="#d32f2f" strokeWidth="1.5" strokeDasharray="4,3" rx="6" />
      
      {/* SEAL text in corner */}
      <circle cx="220" cy="20" r="14" fill="none" stroke="#d32f2f" strokeWidth="2" />
      <text x="220" y="26" fontFamily="serif" fontSize="9" fill="#d32f2f" fontWeight="bold" textAnchor="middle">
        SEAL
      </text>
      
      {/* Primary signature - bold and formal */}
      {/* <path
        d="M15 75 Q25 45, 38 72 Q50 90, 68 60 Q82 40, 98 80 Q112 95, 125 65 Q138 45, 155 88"
        fill="none" stroke="#1a1a1a" strokeWidth="3.2"
        strokeLinecap="round" strokeLinejoin="round" 
      /> */}
      
      {/* Verification checkmark */}
      <path
        d="M170 50 L178 60 L195 35"
        fill="none" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      />
      
      {/* Electronically authenticated label */}
      <text
        x="120" y="28"
        fontFamily="Arial, sans-serif"
        fontSize="8" fill="#1a1a1a" fontWeight="bold"
      >
        Digitally Authenticated
      </text>
      
      {/* Timestamp */}
      <text
        x="165" y="100"
        fontFamily="monospace"
        fontSize="6" fill="#666" opacity="0.6"
      >
        2026-03-19
      </text>
      
      {/* Certificate stamp effect */}
      <circle cx="30" cy="100" r="12" fill="none" stroke="#d32f2f" strokeWidth="1.2" opacity="0.4" />
    </svg>
  );
}
