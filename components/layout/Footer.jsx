export default function Footer() {
  return (
    <footer
      style={{
        background: "#293957",
        color: "#cfd6ea",
        padding: "3rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
        © {new Date().getFullYear()} PokerMindset. All rights reserved.
      </p>
    </footer>
  );
}
