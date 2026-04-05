import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mr-6">
            <span className="text-neonGreen font-mono text-2xl mr-2">03.</span> Projects
          </h2>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-card flex flex-col justify-between p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(46,204,113,0.3)] group cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-neonGreen">
                    {/* Folder Icon placeholder */}
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.link} className="text-slate-400 hover:text-neonGreen transition-colors" target="_blank" rel="noreferrer">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-neonGreen transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-4">
                  {project.description}
                </p>
              </div>
              
              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="text-xs font-mono text-slate-500">
                    {tech}
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

export default Projects;
