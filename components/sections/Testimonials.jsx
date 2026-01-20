export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Finally merch that actually represents poker culture. Clean, premium, and wearable.",
      name: "Rahul Sharma",
      role: "Cash Game Grinder",
    },
    {
      quote:
        "Love the quality and the mindset behind the designs. Feels authentic.",
      name: "Aman Verma",
      role: "Tournament Player",
    },
    {
      quote: "Subtle designs, great fabric, and perfect for everyday wear.",
      name: "Kunal Mehta",
      role: "Poker Enthusiast",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-12 text-center">
          What Players Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <p className="text-muted mb-6 leading-relaxed">“{t.quote}”</p>

              <div>
                <p className="font-medium text-[#293957]">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
