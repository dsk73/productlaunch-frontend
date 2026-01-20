import Link from "next/link";

const categories = [
  { name: "Hoodies", href: "/shop/shop" },
  { name: "T-Shirts", href: "/shop/shop" },
  { name: "Caps", href: "/shop/shop" },
  { name: "Accessories", href: "/shop/shop" },
];

export default function FeaturedCategories() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-12">Shop by Category</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group block bg-white rounded-3xl p-10 card"
            >
              <h3 className="text-xl mb-4">{cat.name}</h3>
              <span className="text-sm text-muted group-hover:underline">
                Shop now →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
