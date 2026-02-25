import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Clock, Globe, Users } from 'lucide-react';

const TIMELINE = [
  {
    year: "1995",
    title: "The Genesis",
    desc: "Founded in a small atelier in Geneva with a vision to merge classic Swiss precision with a new, bold aesthetic for the rising generation of leaders."
  },
  {
    year: "2004",
    title: "The Royal Era",
    desc: "Launch of our flagship 'Royal' movement, setting a new benchmark for mechanical variance in independent watchmaking."
  },
  {
    year: "2012",
    title: "Global Expansion",
    desc: "Opening of our first Lagos showroom, bridging the gap between European heritage and the vibrant ambition of the African luxury market."
  },
  {
    year: "2020",
    title: "Modern Obsidian",
    desc: "Revolutionizing our design language with the Obsidian collection—focusing on the 'Dark Luxury' movement and architectural minimalism."
  },
  {
    year: "Today",
    title: "The Apex",
    desc: "Continuing to redefine the weight of seconds for patrons in over 50 countries, remaining fiercely independent and quality-obsessed."
  }
];

const PRINCIPLES = [
  {
    title: "The Architecture of Restraint",
    desc: "Luxury is not about what we add, but what we have the courage to remove. Every line on a 5 Star timepiece serves a structural or ergonomic purpose."
  },
  {
    title: "Chronomtric Integrity",
    desc: "We calibrate our automatic movements over 40 days in six different positions to ensure that time is not just kept, but honored."
  },
  {
    title: "Material Permanence",
    desc: "We use only materials that gain character with age—316L stainless steel, laboratory-grown sapphire, and ethically sourced 18k gold."
  }
];

export const About: React.FC = () => {
  return (
    <div className="pt-40 pb-40 bg-gold-100">
      <div className="luxury-container">
        {/* Hero Section */}
        <header className="max-w-4xl mb-40">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="micro-label text-gold-400 mb-8"
          >
            The Heritage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl serif-title text-stone-900 mb-12 leading-[0.9] tracking-tighter"
          >
            The Art of <br /><span className="text-gold-400">Timekeeping</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed max-w-2xl italic"
          >
            "We don't just measure time. We capture the essence of discipline and the weight of legacy."
          </motion.p>
        </header>

        {/* Vision & Origin */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-60">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group aspect-[4/5] overflow-hidden"
          >
            <img
              src="/home-collection-image2.jpeg"
              alt="Heritage Atelier"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
            />
            <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-1000" />
          </motion.div>

          <div className="space-y-12">
            <h2 className="text-5xl serif-title text-stone-900">Our Origin Story</h2>
            <div className="space-y-8 text-stone-500 leading-loose text-lg font-light">
              <p>
                5 Star Luxury Watches began as an act of rebellion. In 1995, our founder sought to strip away the excessive ornamentation of traditional luxury, focusing instead on the raw architectural beauty of horological engineering.
              </p>
              <p>
                Born in Geneva but inspired by global leaders, our atelier became a sanctuary for those who value restraint over noise. We believe that true power doesn't need to shout—it simply exists in the precision of a silent movement.
              </p>
            </div>
            <div className="pt-12 grid grid-cols-2 gap-12 border-t border-gold-200">
              <div className="space-y-2">
                <p className="text-5xl serif-title text-gold-400">29</p>
                <p className="micro-label text-stone-900">Years of Mastery</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl serif-title text-gold-400">12k+</p>
                <p className="micro-label text-stone-900">Global Patrons</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Timeline */}
        <section className="mb-60 py-40 border-y border-gold-200 relative">
          <div className="text-center mb-32">
            <p className="micro-label text-gold-400 mb-6">Evolution</p>
            <h2 className="text-5xl md:text-7xl serif-title text-stone-900">The Journey</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gold-200 md:-translate-x-1/2 hidden md:block" />

            <div className="space-y-32">
              {TIMELINE.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-0 md:left-1/2 w-2 h-2 bg-gold-400 rotate-45 md:-translate-x-1/2 z-10 hidden md:block" />

                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-24' : 'md:pr-24'} text-left md:text-right ${idx % 2 === 0 ? 'md:text-left' : ''}`}>
                    <span className="text-7xl serif-title text-gold-200 block mb-6 tracking-tighter">
                      {item.year}
                    </span>
                    <h4 className="text-2xl serif-title mb-6 text-stone-900">{item.title}</h4>
                    <p className="text-stone-500 leading-relaxed font-light max-w-sm ml-0 md:ml-auto md:mr-0 lg:mx-0">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="mb-60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-40">
              <p className="micro-label text-gold-400 mb-8">Ethos</p>
              <h2 className="text-5xl serif-title text-stone-900 mb-10 leading-tight">The DNA of <br />Modern Luxury</h2>
              <p className="text-stone-500 text-xl font-light leading-relaxed mb-10">
                Every design starts with a single question: How does this help the wearer master their domain? We don't chase trends; we build heritage.
              </p>
              <div className="w-24 h-px bg-gold-400" />
            </div>

            <div className="lg:col-span-7 space-y-24">
              {PRINCIPLES.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group border-b border-gold-200 pb-16 transition-all duration-700 hover:pl-8"
                >
                  <span className="micro-label text-gold-400 mb-8 block">Principle 0{idx + 1}</span>
                  <h3 className="text-3xl serif-title text-stone-900 mb-6 group-hover:text-gold-400 transition-colors">{principle.title}</h3>
                  <p className="text-stone-500 text-lg leading-loose font-light">
                    {principle.desc}
                  </p>
                </motion.div>
              ))}

              <div className="bg-stone-950 p-16 mt-16 border border-white/5 shadow-2xl">
                <h4 className="text-2xl serif-title text-white mb-6">A Note on Sustainability</h4>
                <p className="text-stone-400 text-lg font-light leading-relaxed italic">
                  "The most sustainable product is one that never needs to be replaced. Our watches are engineered for decades, not seasons. We offer full restoration services for all pieces ever manufactured by our atelier."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Quote */}
        <section className="text-center py-40 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
            <span className="text-[30vw] serif-title text-stone-950 select-none">VISION</span>
          </div>
          <div className="max-w-3xl mx-auto relative z-10">
             <h2 className="text-4xl md:text-5xl serif-title text-stone-900 mb-12 italic leading-tight">
               "Time is the only asset we cannot recreate. We simply provide the instrument to witness its passing with grace."
             </h2>
             <p className="micro-label text-gold-400">Chief Creative Director, 5 Star Luxury</p>
          </div>
        </section>
      </div>
    </div>
  );
};
