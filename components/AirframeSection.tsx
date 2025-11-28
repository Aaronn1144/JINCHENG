import React from 'react';
import { AIRFRAME_DATA } from '../constants';
import { Layers, Wind, Zap } from 'lucide-react';

const icons = [Layers, Zap, Wind];

const AirframeSection: React.FC = () => {
  return (
    <section id="airframes" className="py-24 bg-[#020617] relative overflow-hidden border-t border-slate-900">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-900/30 skew-x-12 translate-x-32 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-2">
              Technology Core
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {AIRFRAME_DATA.title}
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed border-l-4 border-blue-600 pl-6">
              {AIRFRAME_DATA.description}
            </p>

            <div className="space-y-8">
              {AIRFRAME_DATA.features.map((feature, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <div key={idx} className="flex items-start group">
                    <div className="flex-shrink-0 bg-slate-800 p-3 rounded-xl mr-5 group-hover:bg-blue-600 transition-colors duration-300 border border-slate-700 group-hover:border-blue-500">
                      <Icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{feature.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="order-1 lg:order-2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-indigo-900/20 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>
             <img 
               src="https://picsum.photos/id/203/800/800" 
               alt="Carbon Fiber Frame" 
               className="relative rounded-3xl shadow-2xl shadow-black/50 border border-white/10 opacity-90"
             />
             <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/10 max-w-xs animate-bounce-slow hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                   <p className="text-xs text-gray-400 font-mono uppercase tracking-wide">Material Spec</p>
                </div>
                <p className="text-white font-bold text-lg tracking-wider">TORAY T700 CARBON</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AirframeSection;