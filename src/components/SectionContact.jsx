import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const SectionContact = () => (
  <section id="contact" className="relative section-spacing bg-[#040a1d]">
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">
      <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-3xl font-bold text-white md:text-4xl">
        Contact Me
      </motion.h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-indigo-500/20 bg-slate-900/40 p-6 shadow-glow backdrop-blur-xl">
          <p className="text-slate-300">Feel free to reach out for collaborations or consulting.</p>
          <div className="mt-6 space-y-3 text-white">
            <p className="flex items-center gap-3 text-cyan-200"><FaEnvelope /> your.email@example.com</p>
            <p className="flex items-center gap-3 text-cyan-200"><FaGithub /> github.com/username</p>
            <p className="flex items-center gap-3 text-cyan-200"><FaLinkedin /> linkedin.com/in/username</p>
          </div>
        </motion.div>
        <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-6 shadow-glow backdrop-blur-xl">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
              Name
            </label>
            <input id="name" autoComplete="name" type="text" placeholder="Your name" className="w-full rounded-lg border  border-indigo-600/40 bg-[#070b20] px-4 py-2 text-white placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
              Email
            </label>
            <input id="email" autoComplete="email" type="email" placeholder="your.email@example.com" className="w-full rounded-lg border border-indigo-600/40 bg-[#070b20] px-4 py-2 text-white placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
              Message
            </label>
            <textarea id="message" rows="5" placeholder="Tell me about your project" className="w-full rounded-lg border border-indigo-600/40 bg-[#070b20] px-4 py-2 text-white placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 px-5 py-3 text-sm font-semibold text-black transition hover:scale-105">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default SectionContact;
