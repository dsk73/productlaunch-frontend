"use client";
import { useCartStore } from "@/store/cartStore";

export default function CartSummary() {
  const subtotal = useCartStore((s) => s.subtotal());

  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="card sticky top-32">
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

      <button className="btn-primary w-full">Proceed to Checkout</button>
    </div>
  );
}
