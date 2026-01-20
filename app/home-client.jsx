"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function HomeClient({ products }) {
  const reduceMotion = usePrefersReducedMotion();

  const featuredProducts = products.filter(
    (p) => p.isFeatured && p.launchStatus !== "archived"
  );

  return (
    <main>
      {/* ===============================
          HERO (CLIENT, ANIMATED)
      =============================== */}
      <section className="section bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div
            variants={reduceMotion ? {} : fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block mb-5 text-sm uppercase tracking-widest text-muted">
              Poker lifestyle merchandise
            </span>

            <h1 className="text-6xl font-light leading-tight mb-6">
              Wear the
              <br />
              <span className="text-accent">grinder mindset</span>
            </h1>

            <p className="text-muted max-w-xl mb-10">
              Premium poker-inspired apparel and accessories built for players
              who live the game beyond the table.
            </p>

            <div className="flex gap-6">
              <Link href="/products" className="btn-primary">
                Explore products
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[380px] h-[380px] rounded-full bg-bg border border-black/10 flex items-center justify-center shadow-sm">
              <span className="text-muted text-sm">
                Signature product visual
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
          FEATURED PRODUCTS
      =============================== */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-4xl font-light mb-4">Featured products</h2>
              <p className="text-muted max-w-md">
                Live or upcoming products curated for this launch.
              </p>
            </div>

            <Link
              href="/products"
              className="hidden md:block text-sm underline underline-offset-4"
            >
              View all
            </Link>
          </div>

          {featuredProducts.length === 0 ? (
            <p className="text-muted">No featured products yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="card">
                  <div className="aspect-square bg-bg rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-muted text-sm">Product media</span>
                  </div>

                  <h3 className="font-medium mb-2">{product.name}</h3>

                  {product.launchStatus === "coming_soon" ? (
                    <p className="text-accent text-sm">Coming soon</p>
                  ) : (
                    !product.hidePrice &&
                    product.price && (
                      <p className="text-muted">₹{product.price}</p>
                    )
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===============================
          WHY THIS PLATFORM
      =============================== */}
      <section className="section bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-14">
          <Feature
            title="CMS-driven"
            desc="Swap products, prices, and content without touching frontend code."
          />
          <Feature
            title="Launch-ready"
            desc="Designed for coming soon, live, and archived product states."
          />
          <Feature
            title="Future-proof"
            desc="Supports variants, new media types, and ecommerce growth."
          />
        </div>
      </section>

      {/* ===============================
          FINAL CTA
      =============================== */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">
            Ready to explore the launch?
          </h2>

          <p className="text-muted mb-10">
            Discover what’s live today and what’s coming next.
          </p>

          <Link href="/products" className="btn-primary">
            Browse products
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ===============================
   HELPER
================================ */
function Feature({ title, desc }) {
  return (
    <div>
      <h3 className="font-medium mb-3">{title}</h3>
      <p className="text-muted text-sm">{desc}</p>
    </div>
  );
}
