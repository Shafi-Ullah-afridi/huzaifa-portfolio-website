import { motion } from 'framer-motion';

const timelineRows = [
  { year: '2025', title: 'Senior ML Engineer Intern', subtitle: 'AI Innovate Labs', description: 'Designed a federated learning system for cross-device pattern detection.' },
  { year: '2024', title: 'MSc Deep Learning', subtitle: 'Tech University', description: 'Graduated with honors focusing on robust segmentation models.' },
  { year: '2023', title: 'ML Research Assistant', subtitle: 'Vision Compute Group', description: 'Published papers on domain adaptation and few-shot learning.' },
  { year: '2022', title: 'Certified TensorFlow Developer', subtitle: 'Google Cloud', description: 'Professional certification in production-ready deep learning systems.' },
];

const SectionTimeline = () => (
  <section id="experience" className="relative section-spacing bg-[#05070f]">
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-3xl font-bold text-white md:text-4xl">
        Experience & Education
      </motion.h2>
      <div className="relative mt-12 ml-2 pl-6 before:absolute before:left-3 before:top-0 before:h-full before:w-1 before:bg-purple-500/30">
        {timelineRows.map((row, idx) => (
          <motion.div key={row.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="relative mb-10 pl-6">
            <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-cyan-400 shadow-glow" />
            <div className="rounded-2xl border border-indigo-300/20 bg-slate-900/35 p-5 shadow-glow backdrop-blur-xl">
              <p className="text-sm font-semibold text-cyan-300">{row.year}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{row.title}</h3>
              <p className="text-sm text-indigo-200">{row.subtitle}</p>
              <p className="mt-2 text-slate-300">{row.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionTimeline;
