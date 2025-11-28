
import React, { useState } from 'react';
import { DRONE_DATA } from '../constants';
import { Product } from '../types';
import ProductModal from './ProductModal';
import { ChevronRight, AlertCircle, Eye } from 'lucide-react';

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
    <section id="drones" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {DRONE_DATA.title}
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 mb-12 border-b border-gray-800 pb-2">
          {DRONE_DATA.subCategories?.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveTabId(sub.id)}
              className={`whitespace-nowrap px-6 py-3 text-lg font-medium transition-colors border-b-2 ${
                activeTabId === sub.id
                  ? 'text-blue-500 border-blue-500'
                  : 'text-gray-400 border-transparent hover:text-gray-200'
              }`}
            >
              {sub.title}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="min-h-[400px]">
          {activeCategory?.isEmpty ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500 border border-dashed border-gray-800 rounded-lg">
              <AlertCircle className="w-12 h-12 mb-4 opacity-50" />
              <p className="text-xl font-light">该系列产品即将上线，敬请期待</p>
              <p className="text-sm mt-2">Coming Soon</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeCategory?.products.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className={`group relative bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10 ${product.details ? 'cursor-pointer hover:border-blue-500/50' : 'cursor-default'}`}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden bg-slate-800 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Hover Overlay Icon for Detailed Products */}
                    {product.details && (
                      <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-4 py-2 bg-blue-600/90 text-white rounded-full text-sm font-medium flex items-center transform scale-90 group-hover:scale-100 transition-transform">
                          <Eye className="w-4 h-4 mr-2" /> 查看详情
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Specs Tags */}
                    {product.specs && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.specs.slice(0, 2).map((spec, idx) => (
                          <span key={idx} className="text-xs font-mono bg-slate-800 text-gray-300 px-2 py-1 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}

                    <button className="flex items-center text-blue-500 text-sm font-medium hover:text-blue-400 transition-colors">
                      {product.details ? '了解详情' : '咨询客服'} <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
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
