import { motion } from 'framer-motion';
import { CheckCircle2, BarChart3, Sparkles } from 'lucide-react';

const items = [
  {
    icon: CheckCircle2,
    title: 'Outcome-first design',
    desc: 'Programs mapped to business KPIs with clear success metrics and milestones.',
  },
  {
    icon: BarChart3,
    title: 'Measurable progress',
    desc: 'Dashboards and learner analytics help you visualize adoption and ROI.',
  },
  {
    icon: Sparkles,
    title: 'Engagement that lasts',
    desc: 'Interactive modules, scenarios, and community keep learners coming back.',
  },
];

export default function WhyUs() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
          >
            Why teams choose us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-gray-600"
          >
            We combine human-centered design with data-driven coaching to create sustainable behavior change.
          </motion.p>

          <div className="mt-8 space-y-5">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
        >
          <div className="grid grid-cols-3 gap-4">
            {[
              ['Learner NPS', '78'],
              ['Completion', '94%'],
              ['Time to Skill', '2.3x'],
              ['Manager Adoption', '86%'],
              ['Sessions', '1.2M+'],
              ['Countries', '35'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-gray-50 p-4 text-center">
                <p className="text-xs text-gray-500">{k}</p>
                <p className="mt-1 text-xl font-semibold text-gray-900">{v}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">Real-time reporting available for all enterprise plans.</p>
        </motion.div>
      </div>
    </section>
  );
}
