
import React, { useEffect, useState } from 'react';
import { X, Check, Activity, Shield, Battery, Wind, Cpu, Lightbulb, Radio, Play, AlertTriangle, FileText } from 'lucide-react';
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
  const [videoError, setVideoError] = useState(false);
  
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
    if (type === 'video') setVideoError(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-7xl h-full md:h-[90vh] bg-[#0f172a] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up border border-white/10">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/5 bg-[#0f172a]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
             <h2 className="text-2xl font-bold text-white tracking-tight">{product.name}</h2>
             <div className="flex gap-2">
               {product.specs?.some(s => s.includes('IP54')) && (
                  <span className="px-2.5 py-1 text-xs font-bold bg-blue-900/30 text-blue-400 rounded-md border border-blue-500/20 uppercase tracking-wider">
                    IP54 防护
                  </span>
               )}
               <span className="px-2.5 py-1 text-xs font-bold bg-slate-800 text-gray-400 rounded-md uppercase tracking-wider">
                  旗舰版
               </span>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto no-scrollbar flex-1 bg-[#0f172a]">
          
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Column: Media Gallery */}
            <div className="w-full lg:w-3/5 bg-slate-900/50 p-4 md:p-8 flex flex-col justify-start border-b lg:border-b-0 lg:border-r border-white/5">
              
              {/* Main Media Viewer */}
              <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg border border-white/5 mb-6 relative group">
                 {activeMedia.type === 'video' && !videoError ? (
                   <video 
                     src={activeMedia.src} 
                     controls 
                     autoPlay 
                     className="w-full h-full object-cover"
                     poster={product.image}
                     onError={(e) => {
                       console.error("Video load error", e);
                       setVideoError(true);
                     }}
                   >
                     Your browser does not support the video tag.
                   </video>
                 ) : (
                   <div className="relative w-full h-full">
                     <img 
                       src={activeMedia.type === 'video' ? product.image : activeMedia.src} 
                       alt="Product Detail" 
                       className="w-full h-full object-contain bg-slate-900 animate-fade-in"
                     />
                     {videoError && activeMedia.type === 'video' && (
                       <div className="absolute inset-0 flex items-center justify-center bg-slate-900/90 flex-col text-gray-500">
                         <AlertTriangle className="w-10 h-10 text-yellow-500 mb-2" />
                         <p>视频暂未上传</p>
                         <p className="text-xs mt-1">请上传至 public/videos/</p>
                       </div>
                     )}
                   </div>
                 )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1">
                {/* Video Thumbnail */}
                {details.video && (
                  <button 
                    onClick={() => handleThumbnailClick('video', details.video!)}
                    className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all shadow-sm ${
                      activeMedia.type === 'video' ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-white/5 hover:border-blue-500/50'
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                      <Play className="w-6 h-6 text-white fill-white drop-shadow-md" />
                    </div>
                    <img src={product.image} className="w-full h-full object-cover" alt="Video Thumbnail" />
                  </button>
                )}
                
                {/* Image Thumbnails */}
                {details.images?.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleThumbnailClick('image', img)}
                    className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all shadow-sm ${
                      activeMedia.type === 'image' && activeMedia.src === img ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-white/5 hover:border-blue-500/50'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Product Info */}
            <div className="w-full lg:w-2/5 p-6 md:p-10 flex flex-col">
               <h3 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">Product Overview</h3>
               <p className="text-gray-400 text-base leading-relaxed mb-8 border-b border-white/10 pb-8">
                 {details.intro}
               </p>

               {/* Key Features Grid */}
               <div className="grid grid-cols-2 gap-4 mb-8">
                 {details.features.map((feature, idx) => (
                   <div key={idx} className="bg-slate-900 p-4 rounded-xl border border-white/5">
                     <div className="text-gray-500 text-xs font-semibold uppercase mb-1">{feature.title}</div>
                     <div className="text-white text-lg font-bold">{feature.value}</div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="p-6 md:p-10 bg-[#0b1221] border-t border-white/5">
             <div className="flex items-center gap-4 mb-8">
               <h3 className="text-2xl font-bold text-white">技术参数详情</h3>
               <div className="h-px flex-1 bg-white/5"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.sections.map((section, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/30 transition-colors">
                    <div className="p-4 bg-white/5 border-b border-white/5 flex items-center gap-3">
                      <div className="p-2 bg-slate-800 rounded-lg text-blue-400 border border-white/5 shadow-sm">
                        {getIconForSection(section.title)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{section.title}</h4>
                        {section.description && <p className="text-xs text-gray-500">{section.description}</p>}
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        {section.specs?.map((spec, sIdx) => (
                          <li key={sIdx} className="flex justify-between items-start text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
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
             <div className="mt-16 flex justify-center">
               {details.pdf ? (
                  <a 
                    href={details.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transform hover:-translate-y-1"
                  >
                    <FileText className="w-5 h-5" />
                    下载完整参数表 (PDF)
                  </a>
               ) : (
                  <button 
                    disabled
                    className="flex items-center gap-2 px-10 py-4 bg-slate-800 text-gray-500 rounded-full font-bold cursor-not-allowed border border-white/5"
                  >
                    <FileText className="w-5 h-5" />
                    参数表暂未上传
                  </button>
               )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;
