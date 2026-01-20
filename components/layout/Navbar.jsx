"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import MobileDrawer from "./MobileDrawer";
import MiniCart from "@/components/cart/MiniCart";
import { useCartStore } from "@/store/cartStore";

const NAVBAR_HEIGHT = 110;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const items = useCartStore((s) => s.items);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 w-full z-50 border-b border-gray-200"
        style={{
          height: NAVBAR_HEIGHT,
          backgroundColor: "#ffffff",
          opacity: 1,
          backdropFilter: "none",
        }}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6">
          <div className="grid grid-cols-3 items-center h-full">
            {/* LEFT: LOGO */}
            <div className="flex items-center">
              <Link href="/" className="relative w-[150px] h-[100px]">
                <Image
                  src="/images/brand/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* CENTER: NAV LINKS */}
            <div className="hidden md:flex justify-center gap-10 text-sm font-medium text-[#293957]">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#ef852c] transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* RIGHT: ACTIONS */}
            <div className="flex items-center justify-end gap-5 text-[#293957]">
              {/* CART */}
              <button
                className="relative text-xl"
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
              >
                🛒
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ef852c] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>

              {/* MOBILE MENU */}
              <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* DRAWERS (OPEN BELOW NAVBAR) */}
      <MobileDrawer
        open={menuOpen}
        setOpen={setMenuOpen}
        offsetTop={NAVBAR_HEIGHT}
      />

      <MiniCart
        open={cartOpen}
        setOpen={setCartOpen}
        offsetTop={NAVBAR_HEIGHT}
      />
    </>
  );
}
