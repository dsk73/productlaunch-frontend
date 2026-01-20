export default function ProductCTA({ ctaMode }) {
  if (ctaMode === "notify") {
    return <button className="btn-primary">Notify Me</button>;
  }

  if (ctaMode === "buy") {
    return <button className="btn-primary">Add to Cart</button>;
  }

  return (
    <button disabled className="btn-primary opacity-50 cursor-not-allowed">
      Unavailable
    </button>
  );
}
