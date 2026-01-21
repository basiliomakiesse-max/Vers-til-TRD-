
import React, { useState } from 'react';
import { PRODUCTS, COLORS } from '../constants';
import { Product } from '../types';

interface PriceListProps {
  onAddToCart: (p: Product) => void;
}

const PriceList: React.FC<PriceListProps> = ({ onAddToCart }) => {
  const categories: Product['category'][] = ['Doces', 'Salgados', 'Fast food', 'Bebidas'];
  const [activeCategory, setActiveCategory] = useState<Product['category']>('Doces');

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Preçário</h2>
        <div className="w-20 h-1 bg-[#a3a3ff] mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full transition-all duration-300 border ${
              activeCategory === cat
                ? 'bg-[#a3a3ff] text-[#05051a] border-[#a3a3ff] font-semibold'
                : 'bg-transparent text-[#a3a3ff] border-[#a3a3ff]/30 hover:bg-[#a3a3ff]/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="bg-[#0f0f2d] rounded-3xl p-8 border border-white/5 shadow-2xl">
        <div className="flex justify-between items-center mb-6 text-[#a3a3ff] uppercase tracking-widest text-sm font-semibold border-b border-white/10 pb-4">
          <span>Unidades</span>
          <span>Valor (Kz)</span>
        </div>
        
        <div className="space-y-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="flex justify-between items-center group">
              <div className="flex flex-col">
                <span className="text-xl font-medium group-hover:text-[#a3a3ff] transition-colors">
                  {product.name}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg font-mono text-slate-300">
                  {typeof product.price === 'number' 
                    ? `${product.price.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}kz`
                    : product.price}
                </span>
                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-white/5 hover:bg-[#a3a3ff] hover:text-[#05051a] w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10"
                  title="Adicionar ao pedido"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceList;
