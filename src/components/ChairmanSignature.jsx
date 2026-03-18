export default function ChairmanSignature() {
  return (
    <svg
      viewBox="0 0 220 90"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 160, height: 55 }}
    >
      {/* Digitally verified seal */}
      <circle cx="185" cy="20" r="14" fill="none" stroke="#d32f2f" strokeWidth="1.5" />
      <text
        x="185" y="26"
        fontFamily="serif"
        fontSize="8" fill="#d32f2f" fontWeight="bold" textAnchor="middle"
      >
        SEAL
      </text>
      
      {/* Primary signature - more formal */}
      <path
        d="M10 60 Q20 35, 32 55 Q42 70, 55 50 Q65 35, 78 58 Q88 72, 100 52 Q110 38, 125 62"
        fill="none" stroke="#1a1a1a" strokeWidth="2.8"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.95"
      />
      
      {/* Secondary approval mark */}
      <path
        d="M142 45 L148 52 L160 38"
        fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      
      {/* Timestamp indicator */}
      <text
        x="140" y="80"
        fontFamily="monospace"
        fontSize="7" fill="#666" opacity="0.6"
      >
        2026-03-19
      </text>
    </svg>
  );
}
