
import React from 'react';
import { IMPORT_SERVICE, CONTACTS } from '../constants';

const ImportService: React.FC = () => {
  return (
    <section id="import" className="py-20 px-4 bg-[#0a0a25]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Serviços de Importação</h2>
          <p className="text-[#a3a3ff] font-medium tracking-wide uppercase">{IMPORT_SERVICE.name}</p>
          <div className="w-20 h-1 bg-[#a3a3ff] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#0f0f2d] p-8 rounded-3xl border border-white/5 shadow-xl flex flex-col justify-center text-center">
            <span className="text-sm uppercase tracking-widest text-slate-400 mb-2">Câmbio</span>
            <div className="text-4xl font-bold text-white mb-4">
              {IMPORT_SERVICE.exchangeRate} <span className="text-[#a3a3ff]">+ Taxa {IMPORT_SERVICE.tax}</span>
            </div>
            <p className="text-slate-400 text-sm italic">Valores atualizados diariamente de acordo com o mercado.</p>
          </div>

          <div className="bg-[#0f0f2d] p-8 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#a3a3ff] text-[#05051a] flex items-center justify-center text-sm font-bold">!</span>
              Método de compra
            </h3>
            <ul className="space-y-4">
              {[
                'Baixar o app da Shein ou acessar o site',
                'Identificar o produto que deseja',
                `Enviar o link do produto para um de nossos contactos`,
                `Efetuar o pagamento para a coordenada bancária indicada`
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-[#a3a3ff] font-bold">{i + 1}.</span>
                  <span className="text-slate-300 leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-[#0f0f2d] p-8 rounded-3xl border border-[#a3a3ff]/20 text-center">
          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-[#a3a3ff]">Dados para Pagamento</h3>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Coordenada Bancária (IBAN):</p>
            <p className="text-2xl font-mono font-bold tracking-tighter select-all">{CONTACTS.iban}</p>
            <p className="text-md font-medium text-slate-300 mt-2">{CONTACTS.beneficiary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportService;
