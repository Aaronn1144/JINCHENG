import React from 'react';
import { ChevronRight, Wind, Target, Cpu } from 'lucide-react';

interface HeroProps {
  onEnterSite: () => void;
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnterSite, onContactClick }) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Engineering Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.15]"></div>
        
        {/* Soft Aurora Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[100px] animate-float opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[100px] animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Decorative Technical UI Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
         {/* Top Left Coords */}
         <div className="absolute top-32 left-10 text-[10px] font-mono text-slate-400 tracking-widest">
            <p>LAT: 38.0428° N</p>
            <p>LNG: 114.5149° E</p>
            <p className="mt-2 text-blue-500">SYS: ONLINE</p>
         </div>

         {/* Bottom Right Spinner */}
         <div className="absolute bottom-20 right-10 opacity-30">
            <div className="w-32 h-32 border border-slate-300 rounded-full flex items-center justify-center animate-spin-slow border-dashed">
               <div className="w-24 h-24 border border-slate-300 rounded-full"></div>
            </div>
         </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-16">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm text-blue-600 text-xs font-bold uppercase tracking-widest mb-10 shadow-sm animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Next Gen Aviation Technology
        </div>
        
        {/* Main Heading */}
        <h1 className="relative mb-8">
           {/* Background Watermark */}
           <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] font-black text-slate-100/50 -z-10 select-none tracking-tighter whitespace-nowrap">
             AVIATION
           </span>
           
           <div className="flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
             <span className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-none mb-2 bg-clip-text text-transparent bg-gradient-to-b from-slate-700 to-slate-900">
               金成航空
             </span>
             <span className="text-lg md:text-2xl font-light text-slate-500 tracking-[0.5em] uppercase">
               JinCheng Aviation
             </span>
           </div>
        </h1>

        {/* Features Row */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12 animate-fade-in-up text-slate-500" style={{ animationDelay: '0.2s' }}>
           <div className="flex flex-col items-center">
              <Wind className="w-6 h-6 mb-2 text-blue-500" />
              <span className="text-xs font-bold tracking-widest uppercase">Aerodynamics</span>
           </div>
           <div className="flex flex-col items-center">
              <Cpu className="w-6 h-6 mb-2 text-blue-500" />
              <span className="text-xs font-bold tracking-widest uppercase">Intelligence</span>
           </div>
           <div className="flex flex-col items-center">
              <Target className="w-6 h-6 mb-2 text-blue-500" />
              <span className="text-xs font-bold tracking-widest uppercase">Precision</span>
           </div>
        </div>
        
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          重新定义低空飞行边界。
          <span className="block text-slate-400 text-base mt-2 font-normal">
            专注高端无人机研发 · 气动弹射巡飞 · 应急系留照明
          </span>
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={onEnterSite}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              浏览产品系列 <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            onClick={onContactClick}
            className="px-8 py-4 border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 rounded-full font-bold transition-all"
          >
            联系我们
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;