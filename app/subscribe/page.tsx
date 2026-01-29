import Link from "next/link";

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-[#050107] text-white">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="w-full rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.4),rgba(5,1,7,0.9))] px-8 py-12">
          <p className="text-xs uppercase tracking-[0.32em] text-white/60">Codeless</p>
          <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            Join our newsletter
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            Get product insights, no-code resources, and launch playbooks delivered monthly.
          </p>
          <form className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="h-[50px] w-full rounded-full border border-white/15 bg-[#0c0a12] px-5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#a855f7]/70 sm:max-w-md"
              required
            />
            <button
              type="submit"
              className="glow-purple inline-flex h-[50px] w-[160px] items-center justify-center rounded-full bg-[#a855f7] text-sm font-semibold text-white"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-xs text-white/50">
            We respect your inbox. Unsubscribe anytime.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex text-xs uppercase tracking-[0.28em] text-white/60 transition hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
