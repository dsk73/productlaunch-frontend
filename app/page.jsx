import Hero from "@/components/hero/Hero";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import LifestyleStory from "@/components/sections/LifestyleStory";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* TRUST STRIP */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <TrustItem text="Premium Quality" />
          <TrustItem text="Poker-Inspired Design" />
          <TrustItem text="Fast Shipping" />
          <TrustItem text="Secure Checkout" />
        </div>
      </section>

      {/* CATEGORIES */}
      <FeaturedCategories />

      {/* BEST SELLERS */}
      <FeaturedProducts />

      {/* BRAND STORY */}
      <LifestyleStory />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <FinalCTA />
    </>
  );
}

function TrustItem({ text }) {
  return <div className="text-sm font-medium text-[#293957]">{text}</div>;
}
