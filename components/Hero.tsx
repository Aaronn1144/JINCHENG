import React from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#020617]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Dark Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          New Generation Aviation
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
          金成航空
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium tracking-wide leading-relaxed">
          专注高端无人机研发、制造与行业应用解决方案。<br className="hidden md:block"/>
          从极速FPV到长航时垂起固定翼，定义未来飞行。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => document.getElementById('drones')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 flex items-center justify-center"
          >
            浏览产品 <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold transition-all backdrop-blur-sm"
          >
            联系我们
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;