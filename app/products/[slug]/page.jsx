import { getProductBySlug } from "@/services/products";
import { notFound } from "next/navigation";

import ProductMedia from "@/components/product/ProductMedia";
import ProductInfo from "@/components/product/ProductInfo";
import ProductHighlights from "@/components/product/ProductHighlights";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await getProductBySlug(slug);
  const product = res?.data?.[0];

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Product Launch`,
    description: product.description?.slice(0, 150),
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  const res = await getProductBySlug(slug);
  const product = res?.data?.[0];

  if (!product) return notFound();

  return (
    <main>
      {/* ===============================
          TOP SECTION
      =============================== */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[45%_55%] gap-20 items-start">
          <ProductMedia media={product.product_media || []} />
          <ProductInfo product={product} />
        </div>
      </section>

      {/* ===============================
          HIGHLIGHTS
      =============================== */}
      <ProductHighlights highlights={product.product_highlights || []} />

      {/* ===============================
          DESCRIPTION
      =============================== */}
      {product.description && (
        <section className="section">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-light mb-6">Product details</h2>
            <p className="text-muted leading-relaxed">{product.description}</p>
          </div>
        </section>
      )}
    </main>
  );
}
