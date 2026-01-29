import Link from "next/link";

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-[#050107] text-white">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="w-full rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.4),rgba(5,1,7,0.92))] px-10 py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/60">Learning Hub</p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Level up with Codeless
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted">
            Tutorials, frameworks, and practical playbooks to help you build, launch, and
            scale no-code products with confidence.
          </p>
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {[
              "No-code product strategy",
              "Design systems for lean teams",
              "Launch-ready Webflow stacks",
              "Growth experiments that convert",
            ].map((topic) => (
              <div
                key={topic}
                className="rounded-2xl border border-white/10 bg-[#0c0a12]/80 p-5"
              >
                <p className="text-sm font-semibold text-white">{topic}</p>
                <p className="mt-2 text-xs text-white/50">
                  New lesson dropping soon — stay tuned.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/subscribe"
              className="glow-purple inline-flex h-[50px] w-[160px] items-center justify-center rounded-full bg-[#a855f7] text-sm font-semibold text-white"
            >
              Join updates
            </Link>
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.28em] text-white/60 transition hover:text-white"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
