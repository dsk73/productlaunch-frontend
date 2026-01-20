"use client";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

export default function MiniCart({ open, setOpen }) {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal());

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="absolute right-0 top-0 h-full w-[380px] bg-white p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg">Your Cart</h3>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Items */}
        <div className="flex-1 space-y-4 overflow-auto">
          {!items.length && <p className="text-muted">Your cart is empty.</p>}

          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative w-16 h-16 rounded bg-[#293957]/5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm">{item.name}</p>
                <p className="text-xs text-muted">Qty {item.quantity}</p>
              </div>

              <span className="text-sm">₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t pt-4">
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <a href="/shop/cart" className="btn-primary w-full text-center block">
            View Cart
          </a>
        </div>
      </div>
    </div>
  );
}
