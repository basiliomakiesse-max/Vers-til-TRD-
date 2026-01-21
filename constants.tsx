
import React from 'react';
import { Product } from './types';

export const COLORS = {
  background: '#05051a',
  accent: '#a3a3ff',
  accentDark: '#7a7aff',
  text: '#ffffff',
  muted: '#94a3b8'
};

export const PRODUCTS: Product[] = [
  // Doces
  { id: 'd1', name: 'Galette', price: 100, category: 'Doces' },
  { id: 'd2', name: 'Cake', price: 250, category: 'Doces' },
  { id: 'd3', name: 'Bolinho', price: 50, category: 'Doces' },
  { id: 'd4', name: 'Iogurte', price: 100, category: 'Doces' },
  { id: 'd5', name: 'Churros', price: 200, category: 'Doces' },
  { id: 'd6', name: 'Bolo no pote', price: 400, category: 'Doces' },
  
  // Salgados
  { id: 's1', name: 'Rissol', price: 150, category: 'Salgados' },
  { id: 's2', name: 'Coxinha', price: 200, category: 'Salgados' },
  { id: 's3', name: 'Chamuça', price: 150, category: 'Salgados' },
  
  // Fast Food
  { id: 'f1', name: 'Mini hambúrguer', price: 'Sob consulta', category: 'Fast food' },
  { id: 'f2', name: 'Mini cachorro', price: 'Sob consulta', category: 'Fast food' },
  
  // Bebidas
  { id: 'b1', name: 'Coca-Cola mini', price: 'Sob consulta', category: 'Bebidas' },
  { id: 'b2', name: 'Fanta mini', price: 'Sob consulta', category: 'Bebidas' },
  { id: 'b3', name: 'Blue mini', price: 'Sob consulta', category: 'Bebidas' },
  { id: 'b4', name: 'Água', price: 'Sob consulta', category: 'Bebidas' },
];

export const CONTACTS = {
  whatsapp1: '+244939984432',
  whatsapp2: '+244933428210',
  call: '+244933427838',
  iban: '0040 0000 0849 5041 1014 0',
  beneficiary: 'Kiriana Mabassa Lela'
};

export const IMPORT_SERVICE = {
  name: 'Shein',
  exchangeRate: '1.100kz/$',
  tax: '16%'
};
