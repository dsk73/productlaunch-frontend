import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light mb-12">Your Cart</h1>

        <div className="grid lg:grid-cols-[1fr_360px] gap-16">
          {/* Items */}
          <div className="space-y-8">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          {/* Summary */}
          <CartSummary />
        </div>
      </div>
    </section>
  );
}
