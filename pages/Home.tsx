
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, ShieldCheck, Zap, Clock } from 'lucide-react';

// Home collection display images (not products)
const HOME_COLLECTION_IMAGES = [
  '/home-collection-image2.jpeg',
  '/home-colletion -image.jpeg'
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Adebayo O.",
    model: "Royal Chronograph Gold Edition",
    text: "The craftsmanship is unparalleled. My Royal Chronograph is more than a watch; it's a piece of art that commands respect in every room I enter."
  },
  {
    id: 2,
    name: "Sarah J.",
    model: "Midnight Obsidian Automatic",
    text: "Minimalist perfection. It’s rare to find a timepiece that manages to be both strikingly modern and timelessly elegant. It hasn't left my wrist."
  },
  {
    id: 3,
    name: "Dr. Emmanuel K.",
    model: "Platinum Sovereign Tourbillon",
    text: "The precision is staggering. As a collector, I appreciate the technical mastery behind the tourbillon. Truly the apex of my collection."
  }
];

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHomeImage, setCurrentHomeImage] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentHomeImage((prev) => (prev + 1) % HOME_COLLECTION_IMAGES.length);
    }, 5000);
    return () => clearInterval(imageTimer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-950">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 opacity-60"
        >
          <img
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Watch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-transparent to-stone-950" />
        </motion.div>

        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="micro-label text-gold-400 mb-8"
          >
            Horological Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl serif-title text-white mb-12 leading-[0.9] tracking-tighter"
          >
            Precision.<br />Prestige.<br /><span className="text-gold-400">Perfection.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <Link to="/collection">
              <Button variant="secondary" className="min-w-[200px]">
                The Collection
              </Button>
            </Link>
            <Link to="/contact" className="group flex items-center gap-3 text-white micro-label hover:text-gold-400 transition-colors">
              Private Viewing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="micro-label text-white/40 vertical-text">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section className="py-40 bg-gold-100">
        <div className="luxury-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <p className="micro-label text-gold-400 mb-6">Curated Selection</p>
              <h2 className="text-5xl md:text-7xl serif-title text-stone-900 leading-tight">Signature Pieces</h2>
            </div>
            <Link to="/collection" className="group flex items-center gap-3 text-stone-900 micro-label hover:text-gold-400 transition-colors">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Promise Section */}
      <section className="bg-stone-950 py-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img
            src="/hublot-gold-black.jpeg"
            alt="Luxury Watch"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="luxury-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <p className="micro-label text-gold-400 mb-8">The 5 Star Commitment</p>
              <h2 className="text-5xl md:text-7xl serif-title text-white mb-16 leading-tight">Engineered for Legacy</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {[
                  { icon: Zap, title: 'Precision', desc: 'Swiss-grade accuracy within 0.5s/year.' },
                  { icon: ShieldCheck, title: 'Durability', desc: 'Sapphire crystal & aerospace titanium.' },
                  { icon: Award, title: 'Heritage', desc: 'Crafted in our Geneva atelier since 1995.' },
                  { icon: Clock, title: 'Warranty', desc: '5-year global protection & lifetime care.' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="space-y-4"
                  >
                    <item.icon className="w-8 h-8 text-gold-400" strokeWidth={1} />
                    <h4 className="text-xl serif-title text-white">{item.title}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square bg-gold-400/10 border border-gold-400/20 p-12 flex items-center justify-center text-center"
              >
                <div className="space-y-8">
                  <p className="text-8xl serif-title text-gold-400 italic">Est. 1995</p>
                  <p className="micro-label text-white tracking-[0.5em]">Atelier de Genève</p>
                  <div className="w-12 h-px bg-gold-400 mx-auto" />
                  <p className="text-stone-400 text-sm max-w-xs mx-auto leading-loose font-light italic">
                    "We don't just build instruments for measuring time. We build vessels for ambition."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-gold-50">
        <div className="luxury-container max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <p className="text-3xl md:text-5xl serif-title text-stone-900 leading-tight italic">
                "{TESTIMONIALS[currentTestimonial].text}"
              </p>
              <div>
                <h4 className="micro-label text-stone-900 mb-2">
                  {TESTIMONIALS[currentTestimonial].name}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-gold-400">
                  Owner of {TESTIMONIALS[currentTestimonial].model}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-6 mt-20">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`h-px transition-all duration-500 ${
                  idx === currentTestimonial ? 'bg-gold-400 w-12' : 'bg-stone-300 w-6'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-40 text-center bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <span className="text-[40vw] serif-title text-stone-950 select-none">LEGACY</span>
        </div>
        <div className="luxury-container relative z-10 max-w-3xl">
          <p className="micro-label text-gold-400 mb-8">The Vision</p>
          <h2 className="text-5xl md:text-7xl serif-title text-stone-900 mb-12 leading-tight">Crafted For Those Who Lead</h2>
          <Link to="/about">
            <Button variant="primary" className="min-w-[240px]">Our Heritage</Button>
          </Link>
        </div>
      </section>

      {/* Dynamic Home Collection Showcase */}
      <section className="py-40 bg-gold-50">
        <div className="luxury-container">
          <div className="text-center mb-24">
            <p className="micro-label text-gold-400 mb-6">Featured Gallery</p>
            <h2 className="text-5xl md:text-7xl serif-title text-stone-900 leading-tight">Collection Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHomeImage}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={HOME_COLLECTION_IMAGES[currentHomeImage]}
                  alt="Collection Showcase"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col justify-center space-y-8">
              <h3 className="text-3xl md:text-4xl serif-title text-stone-900">
                {currentHomeImage === 0 ? 'Timeless Elegance' : 'Modern Sophistication'}
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                {currentHomeImage === 0
                  ? 'Discover our curated selection of luxury timepieces that embody the perfect balance between traditional craftsmanship and contemporary design.'
                  : 'Experience the fusion of innovative materials and classic horological excellence in our exclusive collection.'}
              </p>
              <div className="flex gap-4">
                {HOME_COLLECTION_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentHomeImage(idx)}
                    className={`h-2 transition-all duration-300 ${
                      idx === currentHomeImage ? 'bg-gold-400 w-12' : 'bg-stone-300 w-8'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
