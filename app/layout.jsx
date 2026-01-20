import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyProduct from "@/components/hero/StickyProduct";

export const metadata = {
  title: "PokerMindset",
  description: "Poker merchandise for serious players",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <StickyProduct />
        {children}
        <Footer />
      </body>
    </html>
  );
}
