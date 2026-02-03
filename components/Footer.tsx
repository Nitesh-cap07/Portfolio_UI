
import React from 'react';
import { STUDENT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white py-32 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">
            Let's build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">something great.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
            Currently accepting new project inquiries and internship opportunities for Fall 2024. Reach out and I'll get back to you within 24 hours.
          </p>
          
          <div className="flex gap-6">
            <a href={STUDENT_INFO.github} target="_blank" className="p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:text-blue-400 transition-all group">
               <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href={STUDENT_INFO.linkedin} target="_blank" className="p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:text-blue-400 transition-all group">
               <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <div className="bg-slate-900/40 p-10 rounded-3xl border border-slate-800/80 backdrop-blur-sm shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-700"
                  placeholder="Steve Wozniak"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-700"
                placeholder="woz@apple.com"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-700 resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-black text-xs uppercase tracking-widest hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg active:scale-95">
              Launch Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t border-slate-900/50 text-center">
        <p className="text-slate-600 text-[10px] uppercase font-black tracking-widest">
          © {new Date().getFullYear()} Engineered by {STUDENT_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
