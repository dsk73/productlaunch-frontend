import Link from "next/link";

export default function Hero() {
  return (
    <section className="section pt-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* TEXT */}
        <div>
          <p className="text-sm uppercase tracking-wide text-[#ef852c] mb-4">
            Premium Poker Merchandise
          </p>

          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
            Designed for players
            <br />
            who respect the grind.
          </h1>

          <p className="text-muted max-w-lg mb-10">
            Apparel and accessories inspired by mindset, discipline, and life
            beyond the table.
          </p>

          <div className="flex gap-6">
            <Link href="/shop/shop" className="btn-primary">
              Shop Now
            </Link>

            <Link
              href="/marketing/about"
              className="underline text-sm self-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* VISUAL PLACEHOLDER */}
        <div className="hidden lg:block">
          <div className="w-[360px] h-[460px] bg-[#293957]/5 rounded-3xl mx-auto" />
        </div>
      </div>
    </section>
  );
}
