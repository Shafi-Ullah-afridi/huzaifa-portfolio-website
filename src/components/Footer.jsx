import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="relative bg-[#05070f] pb-8 pt-10 text-center text-slate-300">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-6 md:flex-row md:justify-between md:px-12">
      <p>© {new Date().getFullYear()} Machine Learning & Deep Learning Engineer. All rights reserved.</p>
      <div className="flex items-center justify-center gap-4 text-lg text-cyan-300">
        <a href="https://github.com/username" target="_blank" rel="noreferrer" className=" glow-link hover:text-white"><FaGithub /></a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="glow-link hover:text-white"><FaLinkedin /></a>
        <a href="mailto:your.email@example.com" className="glow-link hover:text-white"><FaEnvelope /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
