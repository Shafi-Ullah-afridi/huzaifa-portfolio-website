import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-slate-300 font-sans selection:bg-neonGreen/30 selection:text-neonGreen">
      {/* Background Particles Element */}
      <ParticlesBackground />
      
      {/* Fixed UI Elements */}
      <Navbar />
      <Sidebar />

      {/* Main Content Areas */}
      <main className="flex flex-col relative z-10 w-full">
        {/* Adds padding to account for the sidebar on large screens */}
        <div className="lg:pl-24 w-full">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
