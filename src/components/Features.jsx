import React from 'react';
import { Newspaper, Brain, Zap, Shield, Globe, Bell } from 'lucide-react';

const items = [
  {
    icon: Newspaper,
    title: 'Curated News Feed',
    desc: 'Noise-free current affairs summarized for high-signal learning.'
  },
  {
    icon: Brain,
    title: 'Adaptive Questioning',
    desc: 'Smart quizzes that adjust difficulty to your mastery profile.'
  },
  {
    icon: Zap,
    title: 'Rapid Recall',
    desc: 'Spaced repetition and active recall baked into daily practice.'
  },
  {
    icon: Shield,
    title: 'Reliable Sources',
    desc: 'Sourced from verified outlets with cross-checking heuristics.'
  },
  {
    icon: Globe,
    title: 'Exam-ready GK',
    desc: 'Static GK decks with dynamic updates for real-world changes.'
  },
  {
    icon: Bell,
    title: 'Daily Streaks',
    desc: 'Micro goals and reminders that turn intent into habit.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-black">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="mx-auto max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold">Engineered for compounding knowledge</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Built like a deep tech product: measurable learning loops, transparent signals, and delightful craft.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-300/80 to-amber-600/80 flex items-center justify-center shadow-inner">
                  <it.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-medium text-lg">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{it.desc}</p>
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-yellow-400/10 blur-2xl group-hover:blur-3xl transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
