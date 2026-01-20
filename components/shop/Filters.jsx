"use client";

export default function Filters() {
  return (
    <aside className="card sticky top-28 h-fit">
      <h3 className="text-lg mb-6">Filters</h3>

      {/* Category */}
      <div className="mb-8">
        <p className="text-sm font-medium mb-4">Category</p>
        <div className="space-y-3 text-sm text-muted">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            T-Shirts
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Hoodies
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Caps
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Accessories
          </label>
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="text-sm font-medium mb-4">Price</p>
        <div className="space-y-3 text-sm text-muted">
          <label className="flex items-center gap-2">
            <input type="radio" name="price" />
            Under ₹1,000
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" />
            ₹1,000 – ₹2,000
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" />
            Above ₹2,000
          </label>
        </div>
      </div>
    </aside>
  );
}
