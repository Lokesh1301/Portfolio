import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROFILE, CONTACT } from '../constants';
import { Linkedin, Github, ChevronRight, Terminal, Database, Server, Layers, FileCode, Code, Palette } from 'lucide-react';

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setCurrentText(isDeleting 
        ? fullText.substring(0, currentText.length - 1) 
        : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, texts, typingSpeed]);

  return (
    <span className="text-cyan-400 font-semibold border-r-2 border-pink-500 pr-1 animate-pulse">
      {currentText}
    </span>
  );
};

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const titles = [
    "Java Full Stack Developer",
    "Backend Architect",
    "Java Enthusiast",
    "SQL Expert"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20 overflow-hidden scroll-mt-24">
      {/* Creative Background Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-violet-600/20 rounded-full blur-xl animate-float delay-1000 hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-cyan-600/20 rounded-full blur-xl animate-float delay-2000 hidden lg:block"></div>
      
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Available for Hire
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 animate-gradient-x">
              {PROFILE.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 h-12 flex items-center gap-2"
          >
             <Terminal size={24} className="text-pink-500" />
             <span>I am a</span>
             <TypewriterText texts={titles} />
          </motion.div>
          
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="text-slate-400 max-w-lg mb-10 leading-relaxed"
          >
             Crafting robust backend systems and scalable web applications with clean code and modern architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
             <motion.a
                href="#contact"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex group items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-200 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg focus:outline-none shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 cursor-pointer"
            >
                <span className="flex items-center gap-2">
                  Let's Talk <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
            </motion.a>

            <div className="flex gap-4">
                <motion.a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3.5 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 text-white transition-all"
                >
                    <Linkedin size={22} className="text-cyan-400" />
                </motion.a>
                <motion.a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3.5 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-pink-500/50 hover:bg-slate-800 text-white transition-all"
                >
                    <Github size={22} className="text-pink-400"/>
                </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Improved Visual Element - Profile Photo with Glass Effect */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"
            />
            
            <div className="relative w-full h-full rounded-full border-4 border-slate-900/50 overflow-hidden shadow-2xl">
              <img 
                src={PROFILE.image} 
                alt={PROFILE.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
            </div>

            {/* Java Badge (Top Right) */}
            <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
               className="absolute top-4 -right-4 md:top-10 md:-right-10 p-3 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl flex items-center gap-2"
            >
               <div className="p-1.5 bg-violet-500/20 rounded-lg text-violet-400">
                  <Server size={20} />
               </div>
               <span className="text-sm font-bold text-white">Java</span>
            </motion.div>

            {/* SQL Badge (Bottom Left) */}
            <motion.div 
               animate={{ y: [10, -10, 10] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-10 -left-6 md:bottom-20 md:-left-12 p-3 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl flex items-center gap-2"
            >
               <div className="p-1.5 bg-cyan-500/20 rounded-lg text-cyan-400">
                  <Database size={20} />
               </div>
               <span className="text-sm font-bold text-white">SQL</span>
            </motion.div>

            {/* React Badge (Bottom Right) */}
            <motion.div 
               animate={{ y: [-8, 8, -8] }}
               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute bottom-8 -right-4 md:bottom-12 md:-right-8 p-3 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl flex items-center gap-2"
            >
               <div className="p-1.5 bg-blue-500/20 rounded-lg text-blue-400">
                  <Layers size={20} />
               </div>
               <span className="text-sm font-bold text-white">React</span>
            </motion.div>

            {/* JS Badge (Top Left) */}
            <motion.div 
               animate={{ y: [8, -8, 8] }}
               transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               className="absolute top-12 -left-4 md:top-12 md:-left-8 p-3 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl flex items-center gap-2"
            >
               <div className="p-1.5 bg-yellow-500/20 rounded-lg text-yellow-400">
                  <FileCode size={20} />
               </div>
               <span className="text-sm font-bold text-white">JS</span>
            </motion.div>

            {/* HTML Badge (Middle Right) */}
            <motion.div 
               animate={{ x: [-5, 5, -5] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
               className="absolute top-1/2 -right-8 md:-right-16 -translate-y-1/2 p-3 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl flex items-center gap-2"
            >
               <div className="p-1.5 bg-orange-500/20 rounded-lg text-orange-500">
                  <Code size={20} />
               </div>
               <span className="text-sm font-bold text-white">HTML</span>
            </motion.div>

            {/* CSS Badge (Middle Left) */}
            <motion.div 
               animate={{ x: [5, -5, 5] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
               className="absolute top-1/2 -left-8 md:-left-16 -translate-y-1/2 p-3 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl flex items-center gap-2"
            >
               <div className="p-1.5 bg-sky-500/20 rounded-lg text-sky-400">
                  <Palette size={20} />
               </div>
               <span className="text-sm font-bold text-white">CSS</span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;