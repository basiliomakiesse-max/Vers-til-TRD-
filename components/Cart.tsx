
import React, { useMemo } from 'react';
import { CartItem } from '../types';
import { CONTACTS } from '../constants';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onUpdateQuantity, isOpen, onClose }) => {
  const total = useMemo(() => {
    return items.reduce((sum, item) => {
      const price = typeof item.price === 'number' ? item.price : 0;
      return sum + price * item.quantity;
    }, 0);
  }, [items]);

  const whatsappMessage = useMemo(() => {
    const header = "Olá Versátil TRD! Gostaria de fazer o seguinte pedido:\n\n";
    const body = items.map(item => `- ${item.name} (${item.quantity}x) - ${typeof item.price === 'number' ? (item.price * item.quantity) + 'kz' : item.price}`).join('\n');
    const footer = total > 0 ? `\n\nTotal estimado: ${total.toLocaleString('pt-PT')}kz` : "";
    return encodeURIComponent(header + body + footer);
  }, [items, total]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-[#0f0f2d] w-full max-w-lg rounded-t-3xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-xl font-bold">Meu Pedido</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full">&times;</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
              <p>Seu carrinho está vazio.</p>
              <button onClick={onClose} className="mt-4 text-[#a3a3ff] underline">Explorar cardápio</button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-slate-400">
                    {typeof item.price === 'number' ? `${item.price}kz cada` : item.price}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-[#05051a] rounded-full border border-white/10">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="px-3 py-1 hover:text-[#a3a3ff]"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-mono text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="px-3 py-1 hover:text-[#a3a3ff]"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-red-400/50 hover:text-red-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-white/10 bg-[#0a0a25]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-slate-400 uppercase tracking-widest text-xs">Total Estimado</span>
            <span className="text-2xl font-bold text-[#a3a3ff]">{total.toLocaleString('pt-PT')}kz</span>
          </div>
          
          <div className="space-y-3">
            <a
              href={`https://wa.me/${CONTACTS.whatsapp1.replace(/\D/g, '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all duration-300 ${
                items.length > 0 
                  ? 'bg-[#a3a3ff] text-[#05051a] hover:bg-[#8e8eff] shadow-lg shadow-[#a3a3ff]/20' 
                  : 'bg-white/5 text-white/20 cursor-not-allowed'
              }`}
            >
              Enviar pedido via WhatsApp
            </a>
            <p className="text-[10px] text-center text-slate-500">O pagamento deve ser feito por IBAN ou no ato da entrega.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
