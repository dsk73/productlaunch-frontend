import ProductCTA from "./ProductCTA";

export default function ProductInfo({ product }) {
  const { name, price, hidePrice, launchStatus, ctaMode } = product;

  return (
    <div>
      <h1 className="text-5xl font-light mb-6">{name}</h1>

      {/* PRICE / STATUS */}
      {launchStatus === "coming_soon" ? (
        <p className="text-accent text-lg mb-6">Coming soon</p>
      ) : (
        !hidePrice &&
        price && <p className="text-2xl font-medium mb-6">₹{price}</p>
      )}

      {/* CTA */}
      <ProductCTA ctaMode={ctaMode} />

      {/* SUPPORTING TEXT */}
      <p className="text-muted mt-10 max-w-md">
        Product configuration and availability adapt automatically as new
        releases go live.
      </p>
    </div>
  );
}
