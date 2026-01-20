"use client";
import Link from "next/link";

export default function MobileDrawer({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="absolute right-0 top-0 h-full w-80 bg-white p-8">
        <button className="mb-10 text-xl" onClick={() => setOpen(false)}>
          ✕
        </button>

        <nav className="flex flex-col gap-8 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/shop/shop" onClick={() => setOpen(false)}>
            Shop
          </Link>

          <Link href="/marketing/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="/marketing/support" onClick={() => setOpen(false)}>
            Support
          </Link>

          <Link
            href="/shop/shop"
            className="btn-primary mt-6 text-center"
            onClick={() => setOpen(false)}
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </div>
  );
}
