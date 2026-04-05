import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mr-6">
            <span className="text-neonGreen font-mono text-2xl mr-2">02.</span> Experience
          </h2>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  {exp.role} <span className="text-neonGreen">@ {exp.company}</span>
                </h3>
                <span className="text-slate-400 font-mono text-sm mt-2 md:mt-0">{exp.duration}</span>
              </div>
              
              <ul className="space-y-3 mt-4">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex text-slate-300 text-[15px] leading-relaxed">
                    <span className="text-neonGreen mr-4 mt-1">▹</span> {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
