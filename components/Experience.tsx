import React from 'react';
import SectionContainer from './SectionContainer';
import { EXPERIENCE } from '../constants';
import { Calendar, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const Experience: React.FC = () => {
  return (
    <SectionContainer id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-pink-500">03.</span> Experience
      </h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {EXPERIENCE.map((exp) => (
          <motion.div key={exp.id} variants={itemVariants}>
            <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(236, 72, 153, 0.15)">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                  <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                          {exp.role}
                      </h3>
                      <p className="text-lg text-purple-400 font-medium flex items-center gap-2 mt-1">
                          <Briefcase size={16} />
                          {exp.company}
                      </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-mono bg-slate-950/50 px-4 py-2 rounded-full border border-white/5 w-fit">
                      <Calendar size={14} />
                      {exp.period}
                  </div>
              </div>

              <ul className="space-y-3 mt-6">
                  {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.6)]"></span>
                          <span className="leading-relaxed">{point}</span>
                      </li>
                  ))}
              </ul>

            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default Experience;