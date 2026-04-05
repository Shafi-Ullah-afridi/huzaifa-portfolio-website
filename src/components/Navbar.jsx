import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[#030712]/80 backdrop-blur-md border-b border-slate-800/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-0 flex justify-between items-center">
        <motion.a 
          href="#" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-mono tracking-tighter text-white"
        >
          &lt;IN /&gt;
        </motion.a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium text-slate-300 hover:text-neonGreen transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="px-5 py-2 text-sm font-medium text-neonGreen border border-neonGreen rounded-md hover:bg-neonGreen/10 transition-colors"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
