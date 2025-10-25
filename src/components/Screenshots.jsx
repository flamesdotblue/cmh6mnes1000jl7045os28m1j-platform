import React from 'react';

function PhoneFrame({ children, accent = 'from-yellow-300 to-amber-500' }) {
  return (
    <div className="relative mx-auto h-[560px] w-[290px] rounded-[36px] bg-gradient-to-br from-white/10 to-white/5 p-1 border border-white/10 shadow-2xl">
      <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 mt-2 h-6 w-28 rounded-full bg-black/70" />
      <div className="relative h-full w-full rounded-[32px] bg-black overflow-hidden">
        <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${accent} opacity-20`} />
        {children}
      </div>
    </div>
  );
}

function FeedUI() {
  const items = [
    { tag: 'Economy', title: 'Inflation cools to 4.8% as food prices ease', time: '2h ago' },
    { tag: 'Science', title: 'ISRO tests reusable engine for next-gen launch', time: '4h ago' },
    { tag: 'World', title: 'Global summit sets targets for green hydrogen', time: '6h ago' }
  ];
  return (
    <div className="h-full w-full text-white">
      <div className="px-4 pt-5 pb-3 flex items-center justify-between">
        <div className="text-lg font-semibold">currento</div>
        <div className="text-xs text-white/60">Daily feed</div>
      </div>
      <div className="px-4 space-y-3 overflow-y-auto h-[480px] pb-6">
        {items.map((n) => (
          <div key={n.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-2 text-[10px]">
              <span className="px-2 py-0.5 rounded-full bg-yellow-300/20 text-yellow-200 border border-yellow-300/30">{n.tag}</span>
              <span className="text-white/50">{n.time}</span>
            </div>
            <div className="mt-2 text-sm font-medium leading-snug">{n.title}</div>
            <div className="mt-2 text-xs text-white/70">
              Key takeaways:
              <ul className="list-disc pl-5 mt-1 space-y-0.5">
                <li>Concise 2-line summary for rapid scan</li>
                <li>Source verified and cross-checked</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuizUI() {
  const options = ['Raise repo rate', 'Cut repo rate', 'No change', 'Introduce QE'];
  return (
    <div className="h-full w-full text-white">
      <div className="px-4 pt-5 pb-3 flex items-center justify-between">
        <div className="text-lg font-semibold">Quiz</div>
        <div className="text-xs text-white/60">Adaptive • 8/12</div>
      </div>
      <div className="px-4 space-y-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <div className="text-sm font-medium">If inflation expectations rise, a central bank is most likely to:</div>
          <div className="mt-3 grid grid-cols-1 gap-2">
            {options.map((o, i) => (
              <button key={o} className={`text-left text-xs px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition ${i===0 ? 'ring-1 ring-yellow-300/50' : ''}`}>
                {o}
              </button>
            ))}
          </div>
          <div className="mt-3 text-[11px] text-white/70">
            Hint unlocked: Think about demand management and signaling.
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-emerald-400/15 to-teal-500/10 p-4">
          <div className="text-xs font-medium text-emerald-200">Why this matters</div>
          <p className="text-xs mt-1 text-white/80">Links to last week\'s article: Monetary policy stance explained in 3 bullets.</p>
        </div>
      </div>
    </div>
  );
}

export default function Screenshots() {
  return (
    <section id="screens" className="relative py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">A calm interface for high-velocity learning</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Screens crafted for flow: read with focus, quiz with intent, progress with clarity.</p>
          </div>
          <div className="text-sm text-white/60">iOS and Android • Offline mode • Privacy-first</div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          <div className="w-full flex flex-col items-center gap-3">
            <PhoneFrame>
              <FeedUI />
            </PhoneFrame>
            <div className="text-sm text-white/70">Signal-first feed</div>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <PhoneFrame accent="from-sky-300 to-blue-600">
              <QuizUI />
            </PhoneFrame>
            <div className="text-sm text-white/70">Adaptive quizzes</div>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <PhoneFrame accent="from-emerald-300 to-teal-600">
              <div className="h-full w-full text-white">
                <div className="px-4 pt-5 pb-3 flex items-center justify-between">
                  <div className="text-lg font-semibold">Progress</div>
                  <div className="text-xs text-white/60">Week 42</div>
                </div>
                <div className="px-4 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/70">Mastery</div>
                    <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-teal-500" />
                    </div>
                    <div className="mt-2 text-[11px] text-white/60">+7% this week</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/70">Streak</div>
                    <div className="mt-1 text-2xl font-semibold">14 days</div>
                    <div className="mt-2 grid grid-cols-7 gap-1">
                      {Array.from({ length: 14 }).map((_, i) => (
                        <div key={i} className={`h-2.5 rounded ${i<12 ? 'bg-emerald-400/80' : 'bg-white/15'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PhoneFrame>
            <div className="text-sm text-white/70">Clarity on progress</div>
          </div>
        </div>
      </div>
    </section>
  );
}
