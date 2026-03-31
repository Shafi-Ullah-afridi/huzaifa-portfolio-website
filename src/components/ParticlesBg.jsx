import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: '#060b20' },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.75 } },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: '#61dafb' },
          links: { color: '#7c3aed', distance: 140, enable: true, opacity: 0.35, width: 1.3 },
          collisions: { enable: false },
          move: { direction: 'none', enable: true, outModes: 'bounce', random: true, speed: 1.3, straight: false },
          number: { density: { enable: true, area: 900 }, value: 80 },
          opacity: { value: 0.7 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;
