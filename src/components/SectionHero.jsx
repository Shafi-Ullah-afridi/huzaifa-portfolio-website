import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaNetworkWired } from 'react-icons/fa';

const floatCard = {
  initial: { y: 0 },
  animate: { y: [-12, 0, -12] },
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
};

const SectionHero = () => (
  <section id="home" className="relative min-h-screen overflow-hidden pb-24">
    <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-85" />
    <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center md:px-16">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold tracking-tight text-white md:text-6xl"
      >
     Machine Learning & Deep Learning Engineer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.15 }}
        className="mt-4 max-w-3xl text-lg text-slate-200 md:text-xl"
      >
        Machine Learning & Deep Learning Engineer.
        <span className="text-cyan-300"> AI · Data Science · Neural Networks.</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <a href="#projects" className="rounded-xl border border-cyan-400/40 px-6 py-3 text-sm font-semibold transition hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white">
          View Projects
        </a>
        <a href="#contact" className="rounded-xl bg-cyan-400/25 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/45 hover:text-white">
          Contact Me
        </a>
      </motion.div>
      <div className="pointer-events-none absolute top-12 left-6 hidden h-36 w-36 animate-float rounded-full bg-gradient-to-r from-purple-600/40 to-blue-400/30 blur-2xl md:block" />
      <div className="pointer-events-none absolute bottom-20 right-8 hidden h-36 w-36 animate-float rounded-full bg-gradient-to-r from-indigo-500/30 to-cyan-400/20 blur-2xl md:block" />
      <div className="mt-12 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        <motion.div variants={floatCard} initial="initial" animate="animate" className="rounded-3xl bg-slate-900/35 p-5 shadow-glow backdrop-blur-md">
          <FaBrain className="mx-auto mb-3 text-3xl text-violet-300" />
          <p className="text-sm font-medium text-white">Brain AI Architect</p>
        </motion.div>
        <motion.div variants={floatCard} initial="initial" animate="animate" className="rounded-3xl bg-slate-900/35 p-5 shadow-glow backdrop-blur-md">
          <FaNetworkWired className="mx-auto mb-3 text-3xl text-blue-300" />
          <p className="text-sm font-medium text-white">Neural Network Systems</p>
        </motion.div>
        <motion.div variants={floatCard} initial="initial" animate="animate" className="rounded-3xl bg-slate-900/35 p-5 shadow-glow backdrop-blur-md">
          <FaRobot className="mx-auto mb-3 text-3xl text-cyan-300" />
          <p className="text-sm font-medium text-white">AI Automation Flow</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SectionHero;
