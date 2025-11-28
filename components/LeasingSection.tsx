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
    <section id="leasing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {LEASING_DATA.title}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {LEASING_DATA.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEASING_DATA.services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md border border-slate-100">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center text-blue-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                咨询方案 <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-900/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
          
          <div className="relative z-10 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">需要定制化解决方案？</h3>
            <p className="text-blue-100/80">我们的工程师团队随时准备为您服务，打造专属飞行方案。</p>
          </div>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="relative z-10 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
            立即联系
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeasingSection;