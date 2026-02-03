
import React, { useState, useEffect } from 'react';
import { STUDENT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black text-white tracking-tighter group uppercase">
          <span className="text-blue-500 group-hover:text-cyan-400 transition-colors">{STUDENT_INFO.name.charAt(0)}</span>{STUDENT_INFO.name.slice(1)}
          <span className="text-blue-500">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Start</a>
          <a href="#skills" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Stack</a>
          <a href="#projects" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Works</a>
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-blue-500 transition-all shadow-[0_5px_15px_rgba(37,99,235,0.3)] active:scale-95"
          >
            Hire
          </a>
        </nav>

        <button className="md:hidden p-2 text-white bg-slate-900 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
