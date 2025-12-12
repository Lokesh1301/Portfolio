import React from 'react';
import SectionContainer from './SectionContainer';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <SectionContainer id="education">
        <div className="grid md:grid-cols-2 gap-12">
            {/* Education Column */}
            <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="text-blue-400">05.</span> Education
                </h2>
                <div className="space-y-6">
                    {EDUCATION.map((edu, idx) => (
                        <div key={idx} className="relative pl-6 border-l border-slate-700 pb-2">
                            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                            <p className="text-slate-400">{edu.institution}</p>
                            <div className="flex justify-between items-center mt-2 text-sm text-slate-500">
                                <span>{edu.year}</span>
                                <span className="text-blue-300">{edu.grade}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications Column */}
            <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="text-pink-400">06.</span> Certifications
                </h2>
                <div className="space-y-4">
                    {CERTIFICATIONS.map((cert) => (
                        <div key={cert.id} className="bg-slate-900/50 border border-white/5 p-4 rounded-xl flex items-start gap-4 hover:border-pink-500/30 transition-colors">
                            <div className="mt-1 text-pink-500">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">{cert.title}</h3>
                                <p className="text-slate-400 text-sm">{cert.issuer} • {cert.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </SectionContainer>
  );
};

export default Education;