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
        <span className="text-primary"> AI · Data Science · Neural Networks.</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <a href="#projects" className="rounded-xl border border-primary/40 px-6 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/20 hover:text-white">
          View Projects
        </a>
        <a href="#contact" className="rounded-xl bg-primary/25 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/45 hover:text-white">
          Contact Me
        </a>
      </motion.div>
      <div className="pointer-events-none absolute top-12 left-6 hidden h-36 w-36 animate-float rounded-full bg-gradient-to-r from-primary/30 to-slate-800/30 blur-2xl md:block" />
      <div className="pointer-events-none absolute bottom-20 right-8 hidden h-36 w-36 animate-float rounded-full bg-gradient-to-r from-slate-700/30 to-primary/20 blur-2xl md:block" />
      <div className="mt-12 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        <motion.div variants={floatCard} initial="initial" animate="animate" className="rounded-3xl bg-slate-900/40 p-5 shadow-glow backdrop-blur-md transition hover:-translate-y-1">
          <FaBrain className="mx-auto mb-3 text-3xl text-primary" />
          <p className="text-sm font-medium text-white">Brain AI Architect</p>
        </motion.div>
        <motion.div variants={floatCard} initial="initial" animate="animate" className="rounded-3xl bg-slate-900/40 p-5 shadow-glow backdrop-blur-md transition hover:-translate-y-1">
          <FaNetworkWired className="mx-auto mb-3 text-3xl text-primary" />
          <p className="text-sm font-medium text-white">Neural Network Systems</p>
        </motion.div>
        <motion.div variants={floatCard} initial="initial" animate="animate" className="rounded-3xl bg-slate-900/40 p-5 shadow-glow backdrop-blur-md transition hover:-translate-y-1">
          <FaRobot className="mx-auto mb-3 text-3xl text-primary" />
          <p className="text-sm font-medium text-white">AI Automation Flow</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SectionHero;
