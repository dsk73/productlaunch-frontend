import { productsByCategory } from "@/config/products.mock";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-light mb-4">Shop Merchandise</h1>
          <p className="text-muted max-w-xl mx-auto">
            Poker-inspired apparel and accessories for players who live the game
            beyond the table.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-28">
          {Object.entries(productsByCategory).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-light">{category}</h2>
                <span className="text-sm text-muted">Scroll →</span>
              </div>

              <ProductGrid products={items || []} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
