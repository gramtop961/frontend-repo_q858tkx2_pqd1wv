import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 p-[1px] shadow-xl">
        <div className="relative rounded-3xl bg-white p-10 sm:p-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Ready to accelerate your team's growth?
            </h3>
            <p className="mt-3 text-gray-600">
              Get a tailored plan with timelines, pricing, and outcomes in under a week.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800"
              >
                Book a Strategy Call
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
              >
                Download Program Deck
              </a>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
        </div>
      </div>
    </section>
  );
}
