import { notFound } from "next/navigation";
import { getProductBySlug } from "@/config/products.mock";
import Image from "next/image";

export default async function ProductPage({ params }) {
  // ✅ params is async in Next.js 16
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        {/* Back */}
        <a href="/shop/shop" className="text-sm text-muted mb-8 inline-block">
          ← Back to shop
        </a>

        {/* Main */}
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* IMAGE */}
          <div className="flex-shrink-0">
            <div className="relative w-[320px] sm:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#293957]/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="360px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* INFO */}
          <div className="flex-1">
            <p className="text-sm text-muted mb-3">{product.category}</p>

            <h1 className="text-4xl font-light mb-6">{product.name}</h1>

            <p className="text-2xl font-semibold mb-8">₹{product.price}</p>

            <button className="btn-primary">Add to Cart</button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-32 max-w-3xl">
          <h2 className="text-3xl font-light mb-6">Product Details</h2>
          <p className="text-muted leading-relaxed">
            Premium poker merchandise crafted for players who respect the grind,
            the mindset, and the game beyond the table.
          </p>
        </div>
      </div>
    </section>
  );
}
