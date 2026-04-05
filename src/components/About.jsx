import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mr-6">
            <span className="text-neonGreen font-mono text-2xl mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="glass-card p-8 md:p-10">
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            {portfolioData.personalInfo.about}
          </p>
          
          <div className="mt-8">
            <h3 className="text-white font-semibold mb-4">Here are a few technologies I have been working with recently:</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {portfolioData.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-slate-400 font-mono text-sm">
                  <span className="text-neonGreen mr-2">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
