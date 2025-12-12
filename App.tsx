import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

// Background Component
const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-grid z-0 opacity-[0.15]"></div>
    
    <motion.div 
      animate={{ 
        x: [0, 50, 0], 
        y: [0, -50, 0],
        scale: [1, 1.2, 1] 
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"
    />
    
    <motion.div 
      animate={{ 
        x: [0, -50, 0], 
        y: [0, 50, 0],
        scale: [1, 1.1, 1] 
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50"
    />

    <motion.div 
      animate={{ 
        x: [0, 30, -30, 0], 
        y: [0, 30, 30, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[100px] mix-blend-screen opacity-30"
    />
  </div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-slate-950 min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <AnimatedBackground />

      <div className="relative z-10 flex flex-col space-y-10 md:space-y-20 pb-20">
        <Navbar />
        
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
}

export default App;