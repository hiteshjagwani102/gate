export default function PhotoBox() {
  return (
    <div
      style={{
        width: 105,
        height: 128,
        border: "1.5px solid #888",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#e8e8e8",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src="/photo.jpeg"
        alt="Candidate Photo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
