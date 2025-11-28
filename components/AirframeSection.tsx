import React from 'react';
import { AIRFRAME_DATA } from '../constants';
import { Layers, Wind, Zap } from 'lucide-react';

const icons = [Layers, Zap, Wind];

const AirframeSection: React.FC = () => {
  return (
    <section id="airframes" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-2">
              Technology Core
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {AIRFRAME_DATA.title}
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {AIRFRAME_DATA.description}
            </p>

            <div className="space-y-8">
              {AIRFRAME_DATA.features.map((feature, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-900/30 p-3 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="relative">
             <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
             <img 
               src="https://picsum.photos/id/203/800/800" 
               alt="Carbon Fiber Frame" 
               className="relative rounded-2xl shadow-2xl border border-gray-700 grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute bottom-6 left-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-lg border border-gray-700 max-w-xs">
                <p className="text-xs text-gray-400 font-mono">MATERIAL CODE</p>
                <p className="text-white font-bold">TORAY T700 CARBON</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AirframeSection;
