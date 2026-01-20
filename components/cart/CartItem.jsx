"use client";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const items = useCartStore((s) => s.items);

  if (!items.length) {
    return (
      <section className="section text-center">
        <h1 className="text-3xl font-light mb-4">Your cart is empty</h1>
        <a href="/shop/shop" className="btn-primary">
          Go to Shop
        </a>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light mb-12">Your Cart</h1>

        <div className="grid lg:grid-cols-[1fr_360px] gap-16">
          <div className="space-y-8">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <CartSummary />
        </div>
      </div>
    </section>
  );
}
