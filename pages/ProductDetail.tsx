
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Shield, Truck, RotateCcw, Plus, Minus } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="pt-40 text-center">Product not found.</div>;
  }

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  return (
    <div className="pt-40 pb-40 bg-gold-100 min-h-screen">
      <div className="luxury-container">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-4 mb-12 text-[10px] tracking-[0.3em] uppercase font-bold text-stone-400">
          <button onClick={() => navigate('/')} className="hover:text-stone-900 transition-colors">Home</button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigate('/collection')} className="hover:text-stone-900 transition-colors">Collection</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Gallery */}
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-[4/5] overflow-hidden bg-white relative group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  src={activeImage} 
                  alt={product.name} 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {product.gallery.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square overflow-hidden border-2 transition-all duration-500 ${activeImage === img ? 'border-gold-400 scale-95' : 'border-transparent hover:border-gold-200'}`}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="micro-label text-gold-400 mb-6">{product.category}</p>
              <h1 className="text-5xl md:text-6xl serif-title text-stone-900 mb-8 leading-tight">{product.name}</h1>
              <p className="text-3xl serif-title text-gold-400 mb-12">₦{product.price.toLocaleString()}</p>
              
              <p className="text-stone-500 leading-relaxed mb-12 text-lg font-light">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <div className="flex items-center border border-gold-200 py-4 px-6 bg-white/50 w-full sm:w-auto justify-between">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 hover:text-gold-400 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-stone-900">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 hover:text-gold-400 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button fullWidth onClick={() => addToCart(product, quantity)}>Add To Bag</Button>
              </div>
              
              <Button variant="secondary" fullWidth className="mb-16" onClick={handleBuyNow}>Instant Checkout</Button>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 py-8 border-y border-gold-200">
                <div className="flex flex-col items-center text-center gap-3">
                  <Truck className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                  <span className="text-[9px] tracking-widest uppercase font-bold text-stone-600">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <Shield className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                  <span className="text-[9px] tracking-widest uppercase font-bold text-stone-600">5yr Warranty</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <RotateCcw className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                  <span className="text-[9px] tracking-widest uppercase font-bold text-stone-600">30 Day Return</span>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="micro-label text-stone-900">Specifications</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-sm text-stone-500">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-gold-400 rotate-45" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

