import React from 'react';
import SectionContainer from './SectionContainer';
import { CONTACT } from '../constants';
import { Mail, Phone, Linkedin, Github, Download, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const handleDownload = () => {
    alert("Resume download started... (This is a demo action)");
  };

  return (
    <div className="min-h-screen pt-20">
      <SectionContainer id="contact">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">Get In Touch</h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    I'm currently looking for full-time opportunities as a Java Full Stack Developer. 
                    Whether you have a question about my stack, a project idea, or just want to say hi!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                 <motion.a 
                    href={`mailto:${CONTACT.email}`}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col items-center justify-center gap-4 p-8 rounded-3xl glass-card hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-violet-900/20 transition-all group cursor-pointer"
                 >
                    <div className="p-4 rounded-full bg-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform">
                        <Mail size={32} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-1">Email Me</h3>
                        <span className="text-slate-400 group-hover:text-violet-300 transition-colors">{CONTACT.email}</span>
                    </div>
                 </motion.a>

                 <motion.a 
                    href={`tel:${CONTACT.phone}`}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col items-center justify-center gap-4 p-8 rounded-3xl glass-card hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all group cursor-pointer"
                 >
                    <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Phone size={32} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-1">Call Me</h3>
                        <span className="text-slate-400 group-hover:text-cyan-300 transition-colors">{CONTACT.phone}</span>
                    </div>
                 </motion.a>
            </div>

            <div className="flex flex-col items-center gap-10">
                <motion.button 
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all"
                >
                    <Download size={22} />
                    Download Resume
                </motion.button>

                <div className="flex gap-8">
                    <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-cyan-600 transition-all duration-300 hover:-translate-y-1">
                        <Linkedin size={28} />
                    </a>
                    <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1">
                        <Github size={28} />
                    </a>
                </div>
            </div>
            
            <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm flex flex-col items-center gap-2">
                <div className="flex items-center justify-center gap-2 text-slate-400 mb-2">
                    <MapPin size={16} />
                    <span>{CONTACT.location}</span>
                </div>
                <p>Designed & Built by Lokesh S</p>
            </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Contact;