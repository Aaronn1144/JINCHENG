import React from 'react';
import { LEASING_DATA } from '../constants';
import { Camera, Zap, LifeBuoy, Map, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'camera': <Camera className="w-8 h-8" />,
  'zap': <Zap className="w-8 h-8" />,
  'life-buoy': <LifeBuoy className="w-8 h-8" />,
  'map': <Map className="w-8 h-8" />
};

const LeasingSection: React.FC = () => {
  return (
    <section id="leasing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {LEASING_DATA.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {LEASING_DATA.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEASING_DATA.services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center text-blue-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                咨询方案 <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-blue-800/30">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">需要定制化解决方案？</h3>
            <p className="text-blue-200">我们的工程师团队随时准备为您服务。</p>
          </div>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="mt-6 md:mt-0 px-8 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-100 transition-colors">
            立即联系
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeasingSection;
