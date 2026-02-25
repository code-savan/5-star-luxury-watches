
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const tax = subtotal * 0.075; // Using Nigeria VAT (7.5%)
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="pt-60 pb-40 text-center luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="w-24 h-24 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-10">
            <ShoppingBag className="w-10 h-10 text-gold-400" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl serif-title mb-6 text-stone-900">Your Bag is Empty</h1>
          <p className="text-stone-500 mb-12 font-light text-lg">Your sanctuary of time is currently vacant. Discover our latest masterpieces.</p>
          <Link to="/collection">
            <Button>Explore The Collection</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-40 bg-gold-100 min-h-screen">
      <div className="luxury-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="micro-label text-gold-400 mb-4">Your Selection</p>
            <h1 className="text-5xl md:text-6xl serif-title text-stone-900">Shopping Bag</h1>
          </div>
          <p className="text-stone-500 font-light italic">
            {cart.length} {cart.length === 1 ? 'Masterpiece' : 'Masterpieces'} selected
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <div className="space-y-0">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div 
                    key={item.id} 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col sm:flex-row gap-8 py-10 border-b border-gold-200 items-center group"
                  >
                    <Link to={`/product/${item.id}`} className="w-40 h-52 flex-shrink-0 bg-white overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors" />
                    </Link>
                    
                    <div className="flex-grow w-full">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="micro-label text-gold-400 mb-2">{item.category}</p>
                          <h3 className="text-2xl serif-title text-stone-900 group-hover:text-gold-400 transition-colors">{item.name}</h3>
                        </div>
                        <p className="text-xl serif-title text-stone-900">₦{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-8">
                        <div className="flex items-center border border-gold-200 py-2 px-4 bg-white/50">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                            className="px-2 hover:text-gold-400 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-10 text-center font-bold text-stone-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                            className="px-2 hover:text-gold-400 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold text-stone-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-40">
              <div className="bg-white p-10 border border-gold-200 shadow-xl">
                <h3 className="micro-label text-stone-900 mb-10">Order Summary</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500 font-light">Subtotal</span>
                    <span className="text-stone-900 font-bold">₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500 font-light">VAT (7.5%)</span>
                    <span className="text-stone-900 font-bold">₦{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500 font-light">Shipping</span>
                    <span className="text-gold-400 font-bold uppercase tracking-widest text-[10px]">Complimentary</span>
                  </div>
                  <div className="border-t border-gold-200 pt-6 flex justify-between items-end">
                    <span className="serif-title text-xl text-stone-900">Total</span>
                    <span className="serif-title text-3xl text-gold-400">₦{total.toLocaleString()}</span>
                  </div>
                </div>
                
                <Link to="/checkout">
                  <Button fullWidth className="group">
                    Checkout Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <div className="mt-10 pt-10 border-t border-gold-100 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2 text-gold-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] tracking-widest uppercase font-bold">Secure Checkout</span>
                  </div>
                  <p className="text-[9px] text-stone-400 text-center uppercase tracking-widest leading-relaxed">
                    Tier-1 Payment Encryption & <br />Biometric Verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

