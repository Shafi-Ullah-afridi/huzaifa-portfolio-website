import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center gap-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-neonGreen font-mono text-lg mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {portfolioData.personalInfo.name}.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
            Building intelligent physical systems.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            {portfolioData.personalInfo.subtitle}
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="inline-block px-8 py-4 bg-neonGreen/10 text-neonGreen font-semibold rounded hover:bg-neonGreen/20 transition-all border border-neonGreen shadow-[0_0_15px_rgba(46,204,113,0.3)]"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end shrink-0 relative"
        >
          {/* Glowing background behind image */}
          <div className="absolute inset-0 bg-neonGreen blur-[60px] opacity-20 rounded-full w-64 h-64 md:w-80 md:h-80 m-auto animate-pulse"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-neonGreen/30 overflow-hidden shadow-[0_0_30px_rgba(46,204,113,0.2)]">
            {/* Dark overlay for aesthetic */}
            <div className="absolute inset-0 bg-brightBlue/10 mix-blend-overlay z-10"></div>
            <img 
              src="/hero_profile.png" 
              alt={portfolioData.personalInfo.name} 
              className="w-full h-full object-cover filter contrast-125"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
