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
    <section id="drones" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            {DRONE_DATA.title}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
            探索我们的专业飞行平台，为每个任务提供完美的解决方案。
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-full border border-slate-200">
            {DRONE_DATA.subCategories?.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveTabId(sub.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTabId === sub.id
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white'
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
            <div className="flex flex-col items-center justify-center h-80 text-slate-400 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <AlertCircle className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-xl font-medium text-slate-500">该系列产品即将上线</p>
              <p className="text-sm mt-1 opacity-50">Coming Soon</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeCategory?.products.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 ${product.details ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden bg-slate-50 relative border-b border-slate-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Hover Overlay for Detailed Products */}
                    {product.details && (
                      <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                        <div className="bg-white/90 px-5 py-2.5 rounded-full shadow-xl flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="w-4 h-4 text-slate-900 mr-2" />
                          <span className="text-slate-900 font-bold text-sm">查看详情</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      {product.details && <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />}
                    </div>
                    
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Specs Tags */}
                    {product.specs && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.specs.slice(0, 3).map((spec, idx) => (
                          <span key={idx} className="text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1.5 rounded-md">
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className={`w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${!product.details && 'hidden'}`}></div>
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