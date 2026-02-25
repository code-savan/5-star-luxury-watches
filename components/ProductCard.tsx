
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/5] bg-gold-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-700" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full py-3 text-[10px] tracking-[0.3em] uppercase font-bold text-stone-900 hover:text-gold-400 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      
      <div className="pt-6 text-center">
        <p className="micro-label text-gold-400 mb-2">{product.category}</p>
        <h3 className="text-lg serif-title text-stone-900 mb-1">{product.name}</h3>
        <p className="text-stone-500 font-light tracking-widest text-sm">₦{product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
};
