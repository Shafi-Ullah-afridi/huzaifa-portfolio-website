import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

const SectionProjects = () => (
  <section id="projects" className="relative section-spacing bg-[#070b1e]">
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-3xl font-bold text-white md:text-4xl">
        Projects
      </motion.h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div key={project.id} whileHover={{ y: -6, scale: 1.01 }} className="group overflow-hidden rounded-3xl border border-purple-500/20 bg-slate-900/30 shadow-glow backdrop-blur-xl transition-transform">
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-slate-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-indigo-500/30 px-3 py-1 text-xs font-medium text-cyan-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/60 px-3 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-purple-300/50 px-3 py-2 text-sm font-semibold text-purple-200 transition hover:border-purple-200 hover:bg-purple-500/20">
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
