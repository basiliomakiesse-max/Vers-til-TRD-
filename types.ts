
export interface Product {
  id: string;
  name: string;
  price: number | string;
  category: 'Doces' | 'Salgados' | 'Fast food' | 'Bebidas';
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Section {
  HERO = 'hero',
  MENU = 'menu',
  IMPORT = 'import',
  DELIVERY = 'delivery',
  CONTACT = 'contact'
}
