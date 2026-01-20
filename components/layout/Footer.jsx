export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-medium mb-4">Product Launch</h3>
          <p className="text-muted text-sm">
            A scalable launch platform built for modern products.
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-4">Links</h4>
          <ul className="text-sm text-muted space-y-2">
            <li>Products</li>
            <li>About</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Legal</h4>
          <ul className="text-sm text-muted space-y-2">
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
