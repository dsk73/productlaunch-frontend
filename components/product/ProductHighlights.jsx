export default function ProductHighlights({ highlights = [] }) {
  if (!Array.isArray(highlights) || highlights.length === 0) {
    return null;
  }

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-14">Why you’ll love it</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-surface p-6 rounded-2xl border border-black/5"
            >
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
