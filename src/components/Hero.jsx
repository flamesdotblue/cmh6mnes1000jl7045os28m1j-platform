import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl flex flex-col justify-center items-start min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1.5 text-xs text-white/80"
        >
          <Star className="w-3.5 h-3.5 text-yellow-400" />
          YC-grade deep tech for learners who never stop
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight"
        >
          currento
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/80"
        >
          A Current Affairs and GK app with an intelligent news feed and adaptive quizzes. Learn faster, retain longer, and stay ahead—every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#screens"
            className="inline-flex items-center gap-2 rounded-md bg-yellow-400 text-black px-5 py-3 text-sm font-medium hover:brightness-95 transition shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
          >
            <Rocket className="w-4 h-4" />
            See the app
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/[0.08] transition"
          >
            Explore features
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="mt-8 flex items-center gap-6 text-xs text-white/60"
        >
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500" />
            <span>Dark mode native</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-600" />
            <span>Realtime curation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600" />
            <span>Adaptive quizzes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
