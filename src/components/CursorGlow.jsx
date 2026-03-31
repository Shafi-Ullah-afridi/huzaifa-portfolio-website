import { useEffect } from 'react';

const CursorGlow = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = document.getElementById('cursor-glow');
      if (!dot) return;
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed z-50 h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 opacity-70 blur-xl transform -translate-x-1/2 -translate-y-1/2"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorGlow;
