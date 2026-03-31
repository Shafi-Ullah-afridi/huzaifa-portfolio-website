import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CursorGlow from './components/CursorGlow';
import Loader from './components/Loader';
import ParticlesBg from './components/ParticlesBg';
import SectionHero from './components/SectionHero';
import SectionAbout from './components/SectionAbout';
import SectionSkills from './components/SectionSkills';
import SectionProjects from './components/SectionProjects';
import SectionTimeline from './components/SectionTimeline';
import SectionAchievements from './components/SectionAchievements';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app relative min-h-screen overflow-x-hidden text-white">
      <ParticlesBg />
      <CursorGlow />
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      <header className="sticky top-0 z-40 border-b border-cyan-200/10 bg-[#061028]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <h1 className="text-lg font-bold tracking-wider text-white">Muhammad Huzafia</h1>
          <nav className="hidden gap-5 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-200 transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <SectionHero />
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
        <SectionTimeline />
        <SectionAchievements />
        <SectionContact />
      </main>
      <Footer />
      <motion.div className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 p-1 shadow-glow">
        <a href="#home" className="block rounded-full bg-[#04070f] px-4 py-2 text-xs font-semibold text-white transition hover:scale-110">Top</a>
      </motion.div>
    </div>
  );
}

export default App;
