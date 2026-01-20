"use client";

export default function LoginPage() {
  return (
    <section className="section">
      <div className="max-w-md mx-auto card">
        <h1 className="text-3xl font-light mb-6 text-center">Login</h1>

        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-3"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
