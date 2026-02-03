
import React from 'react';
import { STUDENT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-1000"></div>

      <div className="max-w-4xl text-center z-10 perspective-1000">
        {/* Profile Photo with 3D Floating Effect */}
        <div className="relative inline-block mb-12 animate-float preserve-3d">
          {/* Layered glows */}
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-40 scale-125"></div>
          <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 scale-150 rotate-45"></div>

          <div className="relative p-1 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.4)]">
            <img
              src="/profile.png"
              alt={STUDENT_INFO.name}
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-slate-950"
            />
          </div>

          {/* Floating detail tag */}
          <div className="absolute -bottom-2 -right-4 bg-slate-900 border border-slate-800 px-4 py-1 rounded-full shadow-xl transform translate-z-20">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Open for Work</span>
          </div>
        </div>

        <div className="block mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900/50 text-blue-400 font-bold text-xs border border-blue-500/20 backdrop-blur-sm tracking-wider uppercase">
            {STUDENT_INFO.university}
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none preserve-3d transform">
          <span className="block text-slate-500 text-2xl md:text-3xl mb-2 font-medium tracking-normal">Hello World, I'm</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
            {STUDENT_INFO.name}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          {STUDENT_INFO.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#projects"
            className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1 active:scale-95"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-slate-900/50 text-white font-bold rounded-2xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-all active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
