
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  material: string;
  complications: string[];
  image: string;
  gallery: string[];
  specs: string[];
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}