"use client";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
  const subtotal = useCartStore((s) => s.subtotal());
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <section className="section">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* Form */}
        <div>
          <h1 className="text-4xl font-light mb-10">Checkout</h1>

          <form className="space-y-6">
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Full Name"
            />
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Email"
            />
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Phone"
            />
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Address"
            />
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="City"
            />
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Postal Code"
            />

            <button className="btn-primary w-full mt-6">Place Order</button>
          </form>
        </div>

        {/* Summary */}
        <div className="card sticky top-32 h-fit">
          <h3 className="text-lg mb-6">Order Summary</h3>

          <div className="space-y-4 text-sm mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
