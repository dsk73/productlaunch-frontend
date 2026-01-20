import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-light mb-6">Page not found</h1>

        <p className="text-muted mb-10">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link href="/" className="btn-primary">
          Go back home
        </Link>
      </div>
    </main>
  );
}
