
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Technical Arsenal</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {categories.map((cat) => (
            <div 
              key={cat} 
              className="group p-8 bg-slate-900/40 rounded-3xl border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 hover:bg-slate-900/60 hover-3d preserve-3d"
            >
              <h3 className="text-xl font-black text-slate-100 mb-8 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                {cat}s
              </h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div key={skill.name} className="group/item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-400 group-hover/item:text-blue-400 transition-colors tracking-wide">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-black text-slate-600 group-hover/item:text-blue-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/50">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
