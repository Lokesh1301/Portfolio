import React from 'react';
import SectionContainer from './SectionContainer';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Skills: React.FC = () => {
  return (
    <SectionContainer id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-blue-500">02.</span> Skills & Tools
      </h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SKILLS.map((skillGroup, idx) => (
          <motion.div 
            key={skillGroup.category}
            variants={itemVariants}
            className="group bg-slate-900/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10"
          >
            <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:from-blue-300 group-hover:to-white transition-all">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <motion.span 
                  key={skill} 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.15)", borderColor: "rgba(6, 182, 212, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 text-sm font-medium bg-slate-800/80 text-slate-300 rounded-lg border border-white/5 cursor-default transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default Skills;