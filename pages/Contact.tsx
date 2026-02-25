
import React from 'react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-40 bg-gold-100 min-h-screen">
      <div className="luxury-container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="micro-label text-gold-400 mb-8">Concierge</p>
            <h1 className="text-5xl md:text-7xl serif-title text-stone-900 mb-10 leading-tight">Connect With Our <br /><span className="text-gold-400">Specialists</span></h1>
            <p className="text-xl text-stone-500 font-light leading-relaxed mb-16 max-w-lg">
              Our specialists are available for private consultations, product inquiries, and bespoke service requests. We look forward to welcoming you into the world of 5 Star Luxury.
            </p>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white border border-gold-200 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400 transition-colors duration-500">
                  <MapPin className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="micro-label text-stone-900 mb-3">Showroom Atelier</h5>
                  <p className="text-stone-500 leading-relaxed font-light">
                    1200 Prestigious Avenue, Suite 500<br />
                    Geneva, Switzerland 1201
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white border border-gold-200 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400 transition-colors duration-500">
                  <Mail className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="micro-label text-stone-900 mb-3">Direct Inquiries</h5>
                  <p className="text-stone-500 font-light">concierge@5starluxury.com</p>
                  <p className="text-stone-500 font-light">+41 22 555 0195</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white border border-gold-200 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400 transition-colors duration-500">
                  <Clock className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="micro-label text-stone-900 mb-3">Hours of Operation</h5>
                  <p className="text-stone-500 font-light">Mon — Fri: 09:00 - 18:00 CET</p>
                  <p className="text-stone-500 font-light">Sat: By Appointment Only</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gold-200 p-12 md:p-16 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
              <MessageSquare className="w-full h-full text-stone-950" />
            </div>
            <h2 className="text-3xl serif-title text-stone-900 mb-12">Inquiry Form</h2>
            <form className="space-y-10">
              <div className="space-y-3">
                <label className="micro-label text-stone-400 text-[9px]">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gold-200 py-4 outline-none focus:border-gold-400 transition-colors font-light text-lg" placeholder="Your name" />
              </div>
              <div className="space-y-3">
                <label className="micro-label text-stone-400 text-[9px]">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-gold-200 py-4 outline-none focus:border-gold-400 transition-colors font-light text-lg" placeholder="your@email.com" />
              </div>
              <div className="space-y-3">
                <label className="micro-label text-stone-400 text-[9px]">Your Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gold-200 py-4 outline-none focus:border-gold-400 transition-colors font-light text-lg resize-none" placeholder="How can we assist you?" />
              </div>
              <Button fullWidth type="button" className="group" onClick={() => alert('Thank you. Our concierge will contact you shortly.')}>
                Send Message
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

