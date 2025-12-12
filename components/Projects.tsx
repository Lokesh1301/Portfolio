import React from 'react';
import SectionContainer from './SectionContainer';
import { PROJECTS } from '../constants';
import { Folder, ArrowUpRight } from 'lucide-react';
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Projects: React.FC = () => {
  return (
    <SectionContainer id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-purple-400">04.</span> Featured Projects
      </h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
          >
            <SpotlightCard className="h-full flex flex-col group" spotlightColor="rgba(139, 92, 246, 0.15)">
              <div className="p-8 flex-grow flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/20 transition-colors"
                  >
                      <Folder size={28} />
                  </motion.div>
                  <div className="text-slate-500 group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 flex-grow">
                  {project.description.map((desc, i) => (
                      <p key={i} className="text-slate-400 text-sm leading-relaxed">
                          {desc}
                      </p>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default Projects;