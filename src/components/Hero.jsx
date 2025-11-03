import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 sm:pt-36 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm text-gray-700 backdrop-blur-md shadow-sm"
        >
          Elevate Teams • Transform Skills • Drive Impact
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
        >
          Corporate training that moves your business forward
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg"
        >
          Blending engaging learning experiences with measurable outcomes. From onboarding to leadership, we upskill your workforce with modern, interactive programs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#programs"
            className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800"
          >
            Explore Programs
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
          >
            Talk to an Expert
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 grid w-full max-w-4xl grid-cols-2 items-center gap-6 rounded-xl bg-white/70 p-6 backdrop-blur-md shadow-md sm:grid-cols-4"
        >
          {[
            ['98% satisfaction', 'Learner-approved experiences'],
            ['60+ programs', 'Curated enterprise tracks'],
            ['Global delivery', 'Hybrid & remote ready'],
            ['Measurable ROI', 'Outcomes you can track'],
          ].map(([title, desc]) => (
            <div key={title} className="text-left">
              <p className="text-sm font-semibold text-gray-900">{title}</p>
              <p className="text-xs text-gray-600">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
