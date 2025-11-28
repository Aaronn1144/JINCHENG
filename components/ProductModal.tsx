
import React, { useEffect, useState } from 'react';
import { X, Check, Activity, Shield, Battery, Wind, Cpu, Lightbulb, Radio, Play, Image as ImageIcon } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const details = product.details;
  const [activeMedia, setActiveMedia] = useState<{ type: 'video' | 'image'; src: string }>({
    type: details?.video ? 'video' : 'image',
    src: details?.video || product.image
  });
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!details) return null;

  const getIconForSection = (title: string) => {
    if (title.includes('飞机')) return <Wind className="w-5 h-5" />;
    if (title.includes('天空端')) return <Cpu className="w-5 h-5" />;
    if (title.includes('地面端')) return <Battery className="w-5 h-5" />;
    if (title.includes('照明')) return <Lightbulb className="w-5 h-5" />;
    if (title.includes('系留线')) return <Activity className="w-5 h-5" />;
    if (title.includes('遥控')) return <Radio className="w-5 h-5" />;
    return <Check className="w-5 h-5" />;
  };

  const handleThumbnailClick = (type: 'video' | 'image', src: string) => {
    setActiveMedia({ type, src });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-7xl h-full md:h-[90vh] bg-slate-900 border-0 md:border border-gray-800 md:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
             <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{product.name}</h2>
             <div className="flex gap-2">
               {product.specs?.some(s => s.includes('IP54')) && (
                  <span className="px-2 py-1 text-[10px] md:text-xs font-bold bg-blue-900/50 text-blue-300 border border-blue-800 rounded uppercase tracking-wider">
                    IP54 防护
                  </span>
               )}
               <span className="px-2 py-1 text-[10px] md:text-xs font-bold bg-slate-800 text-gray-400 border border-slate-700 rounded uppercase tracking-wider">
                  旗舰版
               </span>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto no-scrollbar flex-1 bg-slate-900">
          
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Column: Media Gallery */}
            <div className="w-full lg:w-3/5 bg-black p-4 md:p-8 flex flex-col justify-start">
              
              {/* Main Media Viewer */}
              <div className="w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800 mb-4 relative">
                 {activeMedia.type === 'video' ? (
                   <video 
                     src={activeMedia.src} 
                     controls 
                     autoPlay 
                     className="w-full h-full object-cover"
                     poster={product.image}
                   >
                     Your browser does not support the video tag.
                   </video>
                 ) : (
                   <img 
                     src={activeMedia.src} 
                     alt="Product Detail" 
                     className="w-full h-full object-cover animate-fade-in"
                   />
                 )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {/* Video Thumbnail */}
                {details.video && (
                  <button 
                    onClick={() => handleThumbnailClick('video', details.video!)}
                    className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      activeMedia.type === 'video' ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                    <img src={product.image} className="w-full h-full object-cover" alt="Video Thumbnail" />
                  </button>
                )}
                
                {/* Image Thumbnails */}
                {details.images?.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleThumbnailClick('image', img)}
                    className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      activeMedia.type === 'image' && activeMedia.src === img ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Product Info */}
            <div className="w-full lg:w-2/5 p-6 md:p-8 flex flex-col">
               <h3 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Product Overview</h3>
               <p className="text-gray-300 text-base leading-relaxed mb-8 border-b border-gray-800 pb-8">
                 {details.intro}
               </p>

               {/* Key Features Grid */}
               <div className="grid grid-cols-2 gap-4 mb-8">
                 {details.features.map((feature, idx) => (
                   <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-gray-700/50">
                     <div className="text-gray-400 text-xs uppercase mb-1">{feature.title}</div>
                     <div className="text-white text-lg font-bold">{feature.value}</div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="p-6 md:p-8 bg-slate-950">
             <div className="flex items-center gap-4 mb-8">
               <h3 className="text-2xl font-bold text-white">技术参数详情</h3>
               <div className="h-px flex-1 bg-gray-800"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.sections.map((section, idx) => (
                  <div key={idx} className="bg-slate-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors">
                    <div className="p-4 bg-gray-800/30 border-b border-gray-800 flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                        {getIconForSection(section.title)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-200">{section.title}</h4>
                        {section.description && <p className="text-xs text-gray-500">{section.description}</p>}
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        {section.specs?.map((spec, sIdx) => (
                          <li key={sIdx} className="flex justify-between items-start text-sm border-b border-gray-800/50 pb-2 last:border-0 last:pb-0">
                            <span className="text-gray-500 shrink-0">{spec.label}</span>
                            <span className="text-gray-300 font-medium text-right ml-4 break-words">{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
             </div>

             {/* Footer Actions */}
             <div className="mt-12 flex justify-center">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-900/20">
                  下载完整参数表 (PDF)
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;
