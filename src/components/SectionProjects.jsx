import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

const SectionProjects = () => (
  <section id="projects" className="relative section-spacing bg-transparent">
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-3xl font-bold text-white md:text-4xl">
        Projects
      </motion.h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div key={project.id} whileHover={{ y: -6, scale: 1.02 }} className="group overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/50 shadow-glow backdrop-blur-xl transition-all">
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-slate-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-3 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/20 hover:text-white">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary/20 px-3 py-2 text-sm font-semibold text-primary transition hover:bg-primary/40 hover:text-white border border-transparent">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionProjects;
