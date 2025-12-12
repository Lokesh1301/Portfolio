import React from 'react';
import SectionContainer from './SectionContainer';
import { PROFILE } from '../constants';
import { Terminal, Coffee, Code2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionContainer id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Creative Code Card Visual */}
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-xs text-slate-500 font-mono">lokesh_profile.java</div>
                </div>
                <div className="space-y-2 font-mono text-sm">
                    <div className="flex">
                        <span className="text-pink-500 w-8">01</span>
                        <span className="text-violet-400">class</span> <span className="text-yellow-300 ml-2">Developer</span> <span className="text-white">{"{"}</span>
                    </div>
                    <div className="flex">
                        <span className="text-slate-600 w-8">02</span>
                        <span className="ml-4 text-cyan-400">String</span> <span className="text-white ml-2">name</span> <span className="text-pink-500 ml-2">=</span> <span className="text-green-400 ml-2">"Lokesh S"</span><span className="text-white">;</span>
                    </div>
                    <div className="flex">
                        <span className="text-slate-600 w-8">03</span>
                        <span className="ml-4 text-cyan-400">String[]</span> <span className="text-white ml-2">skills</span> <span className="text-pink-500 ml-2">=</span> <span className="text-white ml-2">{"{"}</span>
                    </div>
                    <div className="flex">
                        <span className="text-slate-600 w-8">04</span>
                        <span className="ml-8 text-green-400">"Java"</span><span className="text-white">,</span> <span className="text-green-400">"SQL"</span><span className="text-white">,</span> <span className="text-green-400">"Backend"</span>
                    </div>
                    <div className="flex">
                        <span className="text-slate-600 w-8">05</span>
                        <span className="ml-4 text-white">{"};"}</span>
                    </div>
                    <div className="flex">
                        <span className="text-slate-600 w-8">06</span>
                        <span className="ml-4 text-violet-400">void</span> <span className="text-blue-400 ml-2">buildAwesomeStuff</span><span className="text-white">()</span> <span className="text-white">{"{"}</span>
                    </div>
                    <div className="flex">
                        <span className="text-slate-600 w-8">07</span>
                        <span className="ml-8 text-slate-400">// Consistent learning & coding</span>
                    </div>
                     <div className="flex">
                        <span className="text-slate-600 w-8">08</span>
                        <span className="ml-8 text-white">System.out.println(</span><span className="text-green-400">"Hello World!"</span><span className="text-white">);</span>
                    </div>
                    <div className="flex">
                        <span className="text-slate-600 w-8">09</span>
                        <span className="ml-4 text-white">{"}"}</span>
                    </div>
                    <div className="flex">
                        <span className="text-slate-600 w-8">10</span>
                        <span className="text-white">{"}"}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Text Content */}
        <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium mb-6">
                <Code2 size={16} />
                <span>About Me</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Transforming Logic into <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Scalable Solutions</span>
            </h2>
            
            <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                    {PROFILE.about}
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-violet-500/30 transition-colors">
                        <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400">
                            <Terminal size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Clean Code Enthusiast</h4>
                            <p className="text-sm text-slate-400">Writing maintainable, efficient, and readable code.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-colors">
                        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                            <Coffee size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Problem Solver</h4>
                            <p className="text-sm text-slate-400">Turning complex requirements into working features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;