import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Sidebar = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 bg-neonGreen/10 backdrop-blur-md px-3 py-6 rounded-full border border-neonGreen/20 shadow-[0_0_15px_rgba(46,204,113,0.2)]">
      <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neonGreen transition-colors duration-300">
        <FaGithub size={24} />
      </a>
      <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neonGreen transition-colors duration-300">
        <FaLinkedin size={24} />
      </a>
      <a href={portfolioData.personalInfo.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neonGreen transition-colors duration-300">
        <FaTwitter size={24} />
      </a>
      <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-slate-400 hover:text-neonGreen transition-colors duration-300">
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default Sidebar;
