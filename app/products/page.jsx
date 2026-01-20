import Link from "next/link";
import { getAllProducts } from "@/services/products";

export const metadata = {
  title: "Products | Product Launch",
  description: "Explore our product lineup",
};

export default async function ProductsPage() {
  const res = await getAllProducts();
  const products = Array.isArray(res?.data) ? res.data : [];

  const visibleProducts = products.filter((p) => p.launchStatus !== "archived");

  return (
    <main>
      {/* HEADER */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-light mb-6">Products</h1>
          <p className="text-muted max-w-xl">
            Browse currently available and upcoming products.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14
">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ product }) {
  const { slug, name, price, hidePrice, launchStatus } = product;

  return (
    <div key={product.id} className="card group cursor-pointer">
      {/* MEDIA */}
      <div className="aspect-[4/5] bg-[#eef1f8] rounded-xl mb-5 flex items-center justify-center overflow-hidden">
        <span className="text-muted text-sm">Product media</span>
      </div>

      {/* CONTENT */}
      <div className="space-y-1">
        <h3 className="text-lg font-medium leading-snug group-hover:underline underline-offset-4">
          {product.name}
        </h3>

        {product.launchStatus === "coming_soon" ? (
          <p className="text-accent text-sm">Coming soon</p>
        ) : (
          !product.hidePrice &&
          product.price && (
            <p className="text-muted text-sm">₹{product.price}</p>
          )
        )}
      </div>
    </div>
  );
}
