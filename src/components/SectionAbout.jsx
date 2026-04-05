import { motion } from 'framer-motion';
import { FaPython, FaNetworkWired, FaRobot } from 'react-icons/fa';

const expertise = [
  { icon: FaPython, label: 'Python', desc: 'Pro-level backend and modeling' },
  { icon: FaRobot, label: 'TensorFlow & PyTorch', desc: 'Custom model architectures' },
  { icon: FaNetworkWired, label: 'NLP & CV', desc: 'Transformers and vision pipelines' },
];

const SectionAbout = () => (
  <section id="about" className="relative section-spacing bg-transparent">
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-3xl font-bold text-white md:text-4xl"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mx-auto mt-4 max-w-3xl text-center text-slate-300"
      >
      
        Hi there! I am a Research Assistant at the Digital Image Processing (DIP) Lab, Islamia College Peshawar advised
        byDr. Muhammad Sajjad andDr. Khan Muhammad. Previously,
        I have worked with Corvit Networks Islamabad as an AI Instructor. I completed my BS in Computer Science at
        Islamia College Peshawar in 2024.
      </motion.p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {expertise.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl border border-primary/20 bg-slate-900/40 p-6 shadow-glow backdrop-blur-xl"
            >
              <Icon className="mb-4 text-4xl text-primary" />
              <h3 className="text-xl font-bold text-white">{item.label}</h3>
              <p className="mt-2 text-slate-300">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SectionAbout;
