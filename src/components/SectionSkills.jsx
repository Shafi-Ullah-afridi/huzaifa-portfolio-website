import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const SectionSkills = () => (
  <section id="skills" className="relative section-spacing bg-transparent">
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-3xl font-bold text-white md:text-4xl">
        Skills
      </motion.h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {skillCategories.map((section) => (
          <motion.div key={section.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-3xl border border-primary/20 bg-slate-900/30 p-6 shadow-glow backdrop-blur-xl">
            <h3 className="mb-4 text-xl font-semibold text-primary">{section.category}</h3>
            <div className="space-y-4">
              {section.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex items-center justify-between text-sm text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full rounded-full bg-primary shadow-[0_0_10px_rgba(0,223,154,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionSkills;
