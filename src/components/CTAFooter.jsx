import React from 'react';

export default function CTAFooter() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-[900px] rounded-full bg-yellow-400 blur-[100px]" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl py-20">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold">Get early access</h3>
            <p className="mt-2 text-white/70">Join the waitlist and be the first to try currento. We\'ll send you a TestFlight/Play Beta link.</p>
          </div>
          <form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e)=>e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@domain.com"
              className="w-full sm:w-auto flex-1 rounded-md bg-black/60 border border-white/15 px-4 py-3 text-sm outline-none focus:border-yellow-300/50 focus:ring-2 focus:ring-yellow-300/20"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-yellow-400 text-black px-5 py-3 text-sm font-medium hover:brightness-95 transition"
            >
              Join waitlist
            </button>
          </form>
          <div className="mt-3 text-xs text-white/60">No spam. Unsubscribe anytime.</div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-yellow-300 to-amber-600" />
            <span>currento</span>
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#screens">Screens</a>
            <a className="hover:text-white" href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
