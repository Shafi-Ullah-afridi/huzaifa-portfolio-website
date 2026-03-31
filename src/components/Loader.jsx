import { motion } from 'framer-motion';

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04070f]">
    <motion.div
      className="h-20 w-20 rounded-full border-4 border-t-transparent border-cyan-300"
      animate={{ rotate: 360 }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

export default Loader;
