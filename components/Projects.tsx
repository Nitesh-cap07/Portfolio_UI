
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Digital Creations</h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Engineering solutions and crafting experiences. Each project represents a milestone in my learning journey.
            </p>
          </div>
          <a href="#" className="group inline-flex items-center gap-3 text-blue-400 font-bold hover:text-cyan-400 transition-all text-sm uppercase tracking-widest">
            More on GitHub
            <div className="p-2 bg-slate-900 rounded-full border border-slate-800 group-hover:border-blue-500 group-hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-900/50 rounded-[2rem] overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)] flex flex-col preserve-3d"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                   {project.tags.slice(0, 1).map(tag => (
                     <span key={tag} className="px-3 py-1 bg-blue-600/90 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-tighter text-white">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-8 flex-1 font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex -space-x-2">
                    {project.tags.map((tag, tIdx) => (
                      <div key={tIdx} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[8px] font-bold text-slate-400 uppercase">
                        {tag.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="p-3 bg-slate-950 rounded-xl text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-inner"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
