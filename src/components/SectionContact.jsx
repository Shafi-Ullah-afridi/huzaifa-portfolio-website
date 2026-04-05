import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const SectionContact = () => (
  <section id="contact" className="relative section-spacing bg-transparent">
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">
      <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-3xl font-bold text-white md:text-4xl">
        Contact Me
      </motion.h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-primary/20 bg-slate-900/40 p-6 shadow-glow backdrop-blur-xl">
          <p className="text-slate-300">Feel free to reach out for collaborations or consulting.</p>
          <div className="mt-6 space-y-3 text-white">
            <p className="flex items-center gap-3 text-primary"><FaEnvelope /> your.email@example.com</p>
            <p className="flex items-center gap-3 text-primary"><FaGithub /> github.com/username</p>
            <p className="flex items-center gap-3 text-primary"><FaLinkedin /> linkedin.com/in/username</p>
          </div>
        </motion.div>
        <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-primary/20 bg-slate-900/40 p-6 shadow-glow backdrop-blur-xl">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
              Name
            </label>
            <input id="name" autoComplete="name" type="text" placeholder="Your name" className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
              Email
            </label>
            <input id="email" autoComplete="email" type="email" placeholder="your.email@example.com" className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
              Message
            </label>
            <textarea id="message" rows="5" placeholder="Tell me about your project" className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105 hover:bg-primary/90 shadow-[0_0_15px_rgba(0,223,154,0.3)] hover:shadow-[0_0_20px_rgba(0,223,154,0.4)]">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default SectionContact;
