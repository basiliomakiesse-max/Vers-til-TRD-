
import React, { useState, useEffect, useCallback } from 'react';
import Logo from './components/Logo';
import PriceList from './components/PriceList';
import ImportService from './components/ImportService';
import DeliveryService from './components/DeliveryService';
import Cart from './components/Cart';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Visual feedback
    const toast = document.createElement('div');
    toast.innerText = `${product.name} adicionado!`;
    toast.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 bg-[#a3a3ff] text-[#05051a] px-6 py-2 rounded-full font-bold shadow-xl animate-bounce z-[100]';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }, []);

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen pb-24 selection:bg-[#a3a3ff]/30">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
        scrolled ? 'bg-[#05051a]/80 backdrop-blur-lg border-b border-white/5 py-2' : 'bg-transparent'
      }`}>
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className={scrolled ? "w-10" : "w-16"} />
        </div>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest text-slate-300">
          <a href="#menu" className="hover:text-[#a3a3ff] transition-colors">Cardápio</a>
          <a href="#import" className="hover:text-[#a3a3ff] transition-colors">Importação</a>
          <a href="#delivery" className="hover:text-[#a3a3ff] transition-colors">Entregas</a>
        </nav>

        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative group p-2 rounded-full bg-white/5 hover:bg-[#a3a3ff]/20 transition-all"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#a3a3ff] text-[#05051a] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Logo className="w-48 mx-auto mb-10 animate-fade-in" />
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Sabor, Praticidade e <span className="text-[#a3a3ff]">Versatilidade</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Seu ponto de encontro para os melhores doces, salgados e serviços de importação exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="px-8 py-4 bg-[#a3a3ff] text-[#05051a] font-bold rounded-2xl hover:bg-[#8e8eff] transition-all shadow-lg shadow-[#a3a3ff]/20">
              Ver Cardápio
            </a>
            <a href="#import" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
              Serviços Shein
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <PriceList onAddToCart={handleAddToCart} />
      <ImportService />
      <DeliveryService />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#05051a]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo className="w-24 opacity-50 grayscale" />
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Versátil TRD. Todos os direitos reservados.</p>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest font-mono">Angola &bull; Luanda</p>
          </div>
        </div>
      </footer>

      {/* Cart Modal */}
      <Cart 
        items={cart} 
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-30 md:hidden bg-gradient-to-t from-[#05051a] to-transparent pointer-events-none">
        <button 
          onClick={() => setIsCartOpen(true)}
          className="pointer-events-auto w-full py-4 bg-[#a3a3ff] text-[#05051a] rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          Ver Pedido ({cartCount})
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
