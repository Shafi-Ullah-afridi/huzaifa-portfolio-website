import { motion } from 'framer-motion';

const awards = [
  { title: 'Top 10 AI Builders 2024', org: 'Global AI Summit', icon: '🏆' },
  { title: 'Best Deep Learning Paper', org: 'NeurIPS Workshop', icon: '🎖️' },
  { title: 'Google TensorFlow Ambassador', org: 'Google', icon: '🚀' },
  { title: 'Certified AWS ML Specialty', org: 'Amazon Web Services', icon: '📜' },
];

const SectionAchievements = () => (
  <section id="achievements" className="relative section-spacing bg-[#07112a]">
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-3xl font-bold text-white md:text-4xl">
        Achievements & Certifications
      </motion.h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((item, idx) => (
          <motion.div key={item.title} whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="rounded-2xl border border-cyan-400/20 bg-slate-900/40 p-5 shadow-glow backdrop-blur-xl">
            <div className="mb-3 text-4xl">{item.icon}</div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.org}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionAchievements;
