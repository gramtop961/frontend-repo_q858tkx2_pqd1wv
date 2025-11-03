import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, Shield } from 'lucide-react';

const tracks = [
  {
    icon: BookOpen,
    title: 'Onboarding Excellence',
    desc: 'Get new hires productive faster with interactive, role-based journeys and practice labs.',
  },
  {
    icon: Users,
    title: 'Leadership & Management',
    desc: 'Coach high-performing managers with scenarios, feedback loops, and peer learning.',
  },
  {
    icon: GraduationCap,
    title: 'Digital & AI Skills',
    desc: 'Upskill teams on AI, data literacy, and modern tools through hands-on projects.',
  },
  {
    icon: Shield,
    title: 'Compliance & Risk',
    desc: 'Deliver compliance that sticks—with microlearning, simulations, and checkpoints.',
  },
];

export default function ProgramTracks() {
  return (
    <section id="programs" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
        >
          Programs built for modern teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-gray-600"
        >
          Flexible tracks that scale across roles, locations, and growth stages.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tracks.map(({ icon: Icon, title, desc }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
              <Icon size={22} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
            <div className="mt-4 text-sm font-medium text-gray-900 opacity-0 transition group-hover:opacity-100">
              Learn more →
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
