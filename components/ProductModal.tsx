import React, { useEffect, useState } from 'react';
import { X, Check, Activity, Shield, Battery, Wind, Cpu, Lightbulb, Radio, Play, AlertTriangle, FileText, Phone } from 'lucide-react';
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
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-7xl h-full md:h-[90vh] bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
             <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{product.name}</h2>
             <div className="flex gap-2">
               {product.specs?.some(s => s.includes('IP54')) && (
                  <span className="px-2.5 py-1 text-xs font-bold bg-blue-50 text-blue-600 rounded-md border border-blue-100 uppercase tracking-wider">
                    IP54 防护
                  </span>
               )}
               <span className="px-2.5 py-1 text-xs font-bold bg-slate-100 text-slate-600 rounded-md uppercase tracking-wider">
                  旗舰版
               </span>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 bg-white">
          
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Column: Media Gallery & Actions */}
            <div className="w-full lg:w-3/5 bg-slate-50/50 p-4 md:p-8 flex flex-col justify-start border-b lg:border-b-0 lg:border-r border-slate-100">
              
              {/* Main Media Viewer */}
              <div className="w-full aspect-video bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 mb-6 relative group">
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
                       className="w-full h-full object-contain bg-white animate-fade-in"
                     />
                     {videoError && activeMedia.type === 'video' && (
                       <div className="absolute inset-0 flex items-center justify-center bg-slate-50 flex-col text-slate-400">
                         <AlertTriangle className="w-10 h-10 text-yellow-500 mb-2" />
                         <p>视频暂未上传</p>
                         <p className="text-xs mt-1">请上传至 public/videos/</p>
                       </div>
                     )}
                   </div>
                 )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2 px-1">
                {/* Video Thumbnail */}
                {details.video && (
                  <button 
                    onClick={() => handleThumbnailClick('video', details.video!)}
                    className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all shadow-sm ${
                      activeMedia.type === 'video' ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200 hover:border-blue-400'
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
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
                      activeMedia.type === 'image' && activeMedia.src === img ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200 hover:border-blue-400'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx}`} />
                  </button>
                ))}
              </div>

              {/* Action Buttons (PDF & Contact) */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {/* PDF Download Button */}
                 {details.pdf ? (
                    <a 
                      href={details.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-bold transition-all border border-slate-200 hover:border-blue-400 shadow-sm group"
                    >
                      <FileText className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">下载完整参数表 (PDF)</span>
                    </a>
                 ) : (
                    <button 
                      disabled
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 text-slate-400 rounded-xl font-bold cursor-not-allowed border border-slate-100"
                    >
                      <FileText className="w-5 h-5" />
                      <span className="text-sm">参数表暂未上传</span>
                    </button>
                 )}

                 {/* Contact Sales Button */}
                 <a 
                    href="tel:19833137881"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
                 >
                    <Phone className="w-5 h-5 fill-current" />
                    <span className="text-sm">联系销售购买</span>
                 </a>
              </div>
            </div>

            {/* Right Column: Product Info */}
            <div className="w-full lg:w-2/5 p-6 md:p-10 flex flex-col">
               <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Product Overview</h3>
               <p className="text-slate-600 text-base leading-relaxed mb-8 border-b border-slate-100 pb-8">
                 {details.intro}
               </p>

               {/* Key Features Grid */}
               <div className="grid grid-cols-2 gap-4 mb-8">
                 {details.features.map((feature, idx) => (
                   <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                     <div className="text-slate-500 text-xs font-semibold uppercase mb-1">{feature.title}</div>
                     <div className="text-slate-900 text-lg font-bold">{feature.value}</div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="p-6 md:p-10 bg-slate-50 border-t border-slate-200">
             <div className="flex items-center gap-4 mb-8">
               <h3 className="text-2xl font-bold text-slate-900">技术参数详情</h3>
               <div className="h-px flex-1 bg-slate-200"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.sections.map((section, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg text-blue-600 border border-slate-100 shadow-sm">
                        {getIconForSection(section.title)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{section.title}</h4>
                        {section.description && <p className="text-xs text-slate-500">{section.description}</p>}
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        {section.specs?.map((spec, sIdx) => (
                          <li key={sIdx} className="flex justify-between items-start text-sm border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                            <span className="text-slate-500 shrink-0">{spec.label}</span>
                            <span className="text-slate-900 font-medium text-right ml-4 break-words">{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;