export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#293957",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.85 }}>
          The page you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  );
}
