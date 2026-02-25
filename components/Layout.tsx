import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Instagram, Linkedin, Globe } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isWhiteText = isHome && !isScrolled && !isMenuOpen;
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Collection', path: '/collection' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-gold-100/80 backdrop-blur-md border-b border-gold-200 py-4 shadow-sm'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="luxury-container flex justify-between items-center">
          <Link
            to="/"
            className={`text-xl md:text-2xl serif-title tracking-[0.2em] transition-colors duration-500 ${
              isWhiteText ? 'text-white' : 'text-stone-900'
            }`}
          >
            5 STAR <span className="text-gold-400">LUXURY</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`micro-label transition-all duration-300 hover:text-gold-400 ${
                  isWhiteText ? 'text-white/80' : 'text-stone-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative group">
              <ShoppingBag
                strokeWidth={1.2}
                className={`w-6 h-6 transition-colors duration-500 ${
                  isWhiteText ? 'text-white group-hover:text-gold-400' : 'text-stone-900 group-hover:text-gold-400'
                }`}
              />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-2 bg-gold-400 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-6 h-6 z-[110]"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-stone-900" strokeWidth={1.2} />
              ) : (
                <Menu
                  className={`w-6 h-6 transition-colors duration-500 ${
                    isWhiteText ? 'text-white' : 'text-stone-900'
                  }`}
                  strokeWidth={1.2}
                />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-gold-100 md:hidden"
          >
            <div className="flex flex-col h-full justify-center px-12 space-y-10">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="text-4xl serif-title text-stone-900 hover:text-gold-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-12 border-t border-gold-200"
              >
                 <p className="micro-label text-gold-400 mb-4">Concierge</p>
                 <p className="text-lg text-stone-600">+234 800 LUXURY 01</p>
                 <p className="text-sm text-stone-500">concierge@5starluxury.com.ng</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-stone-950 text-white pt-32 pb-12">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <h4 className="text-2xl serif-title tracking-[0.15em]">5 STAR <span className="text-gold-400">LUXURY</span></h4>
              <p className="text-sm text-stone-400 leading-loose max-w-xs font-light">
                Redefining the heritage of horology with Swiss-grade precision and a modern, minimalist vision. Crafted for the relentless.
              </p>
            </div>

            <div>
              <h5 className="micro-label mb-10 text-gold-400">Explore</h5>
              <ul className="space-y-5 text-sm">
                <li><Link to="/" className="text-stone-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-stone-400 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/collection" className="text-stone-400 hover:text-white transition-colors">The Collection</Link></li>
                <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors">Showroom</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="micro-label mb-10 text-gold-400">Assistance</h5>
              <ul className="space-y-5 text-sm">
                <li><Link to="/terms" className="text-stone-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-stone-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Bespoke Orders</a></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Global Warranty</a></li>
              </ul>
            </div>

            <div>
              <h5 className="micro-label mb-10 text-gold-400">Mailing List</h5>
              <p className="text-sm text-stone-400 mb-6 font-light">Enter the world of 5 Star Luxury.</p>
              <div className="flex border-b border-white/10 py-3 group focus-within:border-gold-400 transition-colors">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent text-sm w-full outline-none placeholder:text-white/20"
                />
                <button className="text-gold-400 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">Join</button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[9px] tracking-[0.4em] text-stone-600 uppercase font-semibold">
              &copy; 2025 5 STAR LUXURY WATCHES. THE APEX OF TIME.
            </p>
            <div className="flex space-x-10 mt-6 md:mt-0">
              <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors"><Globe className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
