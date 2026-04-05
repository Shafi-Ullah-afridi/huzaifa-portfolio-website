import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    return (
        <footer className="py-8 text-center" id="contact">
            <div className="max-w-4xl mx-auto px-6 border-t border-slate-800/50 pt-8">
                <a 
                    href={portfolioData.personalInfo.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-mono text-sm text-slate-400 hover:text-neonGreen transition-colors flex items-center justify-center gap-2"
                >
                    <span>Built by {portfolioData.personalInfo.name}</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
