import React from 'react';
import { AIRFRAME_DATA } from '../constants';
import { Layers, Wind, Zap } from 'lucide-react';

const icons = [Layers, Zap, Wind];

const AirframeSection: React.FC = () => {
  return (
    <section id="airframes" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-100/30 skew-x-12 translate-x-32 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">
              Technology Core
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {AIRFRAME_DATA.title}
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed border-l-4 border-blue-500 pl-6">
              {AIRFRAME_DATA.description}
            </p>

            <div className="space-y-8">
              {AIRFRAME_DATA.features.map((feature, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <div key={idx} className="flex items-start group">
                    <div className="flex-shrink-0 bg-white p-3 rounded-xl mr-5 group-hover:bg-blue-600 transition-colors duration-300 border border-slate-200 group-hover:border-blue-600 shadow-sm">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{feature.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="order-1 lg:order-2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 to-indigo-200/50 rounded-3xl transform rotate-3 scale-105 opacity-60 blur-lg"></div>
             <img 
               src="https://picsum.photos/id/203/800/800" 
               alt="Carbon Fiber Frame" 
               className="relative rounded-3xl shadow-2xl shadow-blue-900/10 border border-white"
             />
             <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-bounce-slow hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                   <p className="text-xs text-slate-500 font-mono uppercase tracking-wide">Material Spec</p>
                </div>
                <p className="text-slate-900 font-bold text-lg tracking-wider">TORAY T700 CARBON</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AirframeSection;