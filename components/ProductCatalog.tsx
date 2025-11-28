import React, { useState } from 'react';
import { DRONE_DATA } from '../constants';
import { Product } from '../types';
import ProductModal from './ProductModal';
import { ChevronRight, AlertCircle, Eye, ArrowUpRight } from 'lucide-react';

const ProductCatalog: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(DRONE_DATA.subCategories![0].id);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const activeCategory = DRONE_DATA.subCategories?.find(sub => sub.id === activeTabId);

  const handleProductClick = (product: Product) => {
    // Only open modal if details exist
    if (product.details) {
      setSelectedProduct(product);
    }
  };

  return (
    <section id="drones" className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {DRONE_DATA.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            探索我们的专业飞行平台，为每个任务提供完美的解决方案。
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-900/50 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            {DRONE_DATA.subCategories?.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveTabId(sub.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTabId === sub.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 transform scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {sub.title}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="min-h-[400px]">
          {activeCategory?.isEmpty ? (
            <div className="flex flex-col items-center justify-center h-80 text-gray-500 bg-slate-900/30 rounded-3xl border border-dashed border-gray-800">
              <div className="bg-slate-800/50 p-4 rounded-full shadow-sm mb-4">
                <AlertCircle className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xl font-medium text-gray-400">该系列产品即将上线</p>
              <p className="text-sm mt-1 opacity-50">Coming Soon</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeCategory?.products.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className={`group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/5 shadow-xl hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 ${product.details ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden bg-slate-800 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Hover Overlay for Detailed Products */}
                    {product.details && (
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-blue-600/90 px-5 py-2.5 rounded-full shadow-xl flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="w-4 h-4 text-white mr-2" />
                          <span className="text-white font-bold text-sm">查看详情</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                      {product.details && <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />}
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Specs Tags */}
                    {product.specs && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.specs.slice(0, 3).map((spec, idx) => (
                          <span key={idx} className="text-xs font-semibold bg-slate-800 text-gray-300 border border-slate-700 px-2.5 py-1.5 rounded-md">
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className={`w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${!product.details && 'hidden'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default ProductCatalog;