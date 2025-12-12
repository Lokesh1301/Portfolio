import React from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, id, className = "", delay = 0 }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 md:px-8 max-w-6xl mx-auto relative scroll-mt-24 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionContainer;