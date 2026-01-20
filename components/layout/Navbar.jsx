"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LEFT — LOGO */}
        <div className="w-[150px] flex items-center">
          <Link href="/">
            <Image
              src="/images/brand/logo.png"
              alt="Brand logo"
              width={150}
              height={80}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* CENTER — NAV */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/products" className="hover:text-accent">
            Products
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
        </div>

        {/* RIGHT — ACTION */}
        <div className="w-[150px] flex justify-end">
          <Link href="/products" className="btn-primary">
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
}
