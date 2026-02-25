
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Lock, CreditCard, Truck, ArrowLeft } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2500);
  };

  const totalWithTax = subtotal * 1.075;

  if (isSuccess) {
    return (
      <div className="pt-60 pb-40 text-center luxury-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto"
        >
          <div className="w-24 h-24 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl serif-title mb-8 text-stone-900">Order Confirmed</h1>
          <p className="text-stone-500 mb-12 font-light text-lg leading-relaxed">
            Thank you for your acquisition. Your order <span className="text-stone-900 font-bold">#LX-{Math.floor(Math.random() * 90000) + 10000}</span> is being meticulously prepared for shipment. A confirmation email has been sent to your inbox.
          </p>
          <Button onClick={() => navigate('/')}>Return to Atelier</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-40 bg-gold-100 min-h-screen">
      <div className="luxury-container">
        <button 
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 micro-label text-stone-400 hover:text-gold-400 transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Bag
        </button>

        <div className="mb-16">
          <p className="micro-label text-gold-400 mb-4">Secure Checkout</p>
          <h1 className="text-5xl md:text-6xl serif-title text-stone-900">Finalize Purchase</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-16">
            {/* Customer Info */}
            <section className="bg-white p-10 border border-gold-200 shadow-sm">
              <h2 className="micro-label text-stone-900 mb-10 flex items-center gap-4">
                <span className="w-8 h-8 bg-stone-950 text-white flex items-center justify-center text-[10px] font-bold">01</span>
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="micro-label text-stone-400 text-[9px]">Full Name</label>
                  <input required type="text" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="micro-label text-stone-400 text-[9px]">Email Address</label>
                  <input required type="email" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="john@example.com" />
                </div>
              </div>
            </section>

            {/* Shipping */}
            <section className="bg-white p-10 border border-gold-200 shadow-sm">
              <h2 className="micro-label text-stone-900 mb-10 flex items-center gap-4">
                <span className="w-8 h-8 bg-stone-950 text-white flex items-center justify-center text-[10px] font-bold">02</span>
                Shipping Destination
              </h2>
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="micro-label text-stone-400 text-[9px]">Street Address</label>
                  <input required type="text" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="123 Luxury Way" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="micro-label text-stone-400 text-[9px]">City</label>
                    <input required type="text" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="Lagos" />
                  </div>
                  <div className="space-y-3">
                    <label className="micro-label text-stone-400 text-[9px]">Postal Code</label>
                    <input required type="text" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="100001" />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="bg-white p-10 border border-gold-200 shadow-sm">
              <h2 className="micro-label text-stone-900 mb-10 flex items-center gap-4">
                <span className="w-8 h-8 bg-stone-950 text-white flex items-center justify-center text-[10px] font-bold">03</span>
                Payment Method
              </h2>
              <div className="space-y-8">
                <div className="flex items-center justify-between p-4 border border-gold-400 bg-gold-50/50">
                  <div className="flex items-center gap-4">
                    <CreditCard className="w-5 h-5 text-gold-400" />
                    <span className="text-sm font-bold text-stone-900">Credit / Debit Card</span>
                  </div>
                  <Lock className="w-4 h-4 text-stone-400" />
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="micro-label text-stone-400 text-[9px]">Card Number</label>
                    <input required type="text" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="micro-label text-stone-400 text-[9px]">Expiry Date</label>
                      <input required type="text" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="MM / YY" />
                    </div>
                    <div className="space-y-3">
                      <label className="micro-label text-stone-400 text-[9px]">CVV</label>
                      <input required type="text" className="w-full bg-gold-50 border border-gold-200 p-4 outline-none focus:border-gold-400 transition-colors font-light" placeholder="000" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <div className="bg-stone-950 p-10 shadow-2xl">
                <h3 className="micro-label text-white mb-10">Order Total</h3>
                <div className="space-y-8 mb-10 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-20 bg-white/10 overflow-hidden flex-shrink-0">
                          <img src={item.image} className="w-full h-full object-cover opacity-80" />
                        </div>
                        <div>
                          <p className="text-white serif-title text-lg leading-tight mb-1">{item.name}</p>
                          <p className="micro-label text-stone-500 text-[8px]">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-stone-300 font-light">₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/10 pt-8 space-y-4">
                  <div className="flex justify-between text-stone-400 text-sm font-light">
                    <span>Shipping</span>
                    <span className="text-gold-400 uppercase tracking-widest text-[10px] font-bold">Complimentary</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="serif-title text-2xl text-white">Grand Total</span>
                    <span className="serif-title text-4xl text-gold-400">₦{totalWithTax.toLocaleString()}</span>
                  </div>
                </div>

                <Button type="submit" fullWidth className="mt-12" disabled={isProcessing}>
                  {isProcessing ? 'Authorizing...' : 'Finalize Purchase'}
                </Button>

                <div className="mt-10 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2 text-stone-500">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[9px] tracking-widest uppercase font-bold">Tier-1 Security</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 border border-gold-200 flex flex-col items-center text-center gap-3">
                  <Truck className="w-5 h-5 text-gold-400" />
                  <span className="text-[8px] tracking-widest uppercase font-bold text-stone-600">Insured Delivery</span>
                </div>
                <div className="bg-white p-6 border border-gold-200 flex flex-col items-center text-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                  <span className="text-[8px] tracking-widest uppercase font-bold text-stone-600">Authenticity</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

