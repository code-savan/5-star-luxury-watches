
import React from 'react';
import { motion } from 'framer-motion';

export const Terms: React.FC = () => (
  <div className="pt-40 pb-40 bg-gold-100 min-h-screen">
    <div className="luxury-container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="micro-label text-gold-400 mb-8">Legal</p>
        <h1 className="text-5xl md:text-6xl serif-title text-stone-900 mb-16">Terms & Conditions</h1>
        <div className="space-y-16 text-stone-500 leading-loose font-light text-lg">
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">01. Introduction</h2>
            <p>Welcome to 5 Star Luxury Watches. By accessing our website and purchasing our timepieces, you agree to be bound by these Terms and Conditions. Please read them carefully.</p>
          </section>
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">02. Orders & Acceptance</h2>
            <p>All orders are subject to acceptance and availability. We reserve the right to refuse service to anyone at any time for any reason. Upon placing an order, you will receive an acknowledgment email; this does not constitute acceptance of your order.</p>
          </section>
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">03. Payments & Pricing</h2>
            <p>Prices are shown in USD and exclude taxes where applicable. We accept all major credit cards and secure payment methods. Title of the goods remains with 5 Star Luxury Watches until full payment is received.</p>
          </section>
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">04. Shipping & Delivery</h2>
            <p>We provide insured worldwide shipping. Delivery dates are estimates only. We are not liable for delays caused by customs or third-party carriers.</p>
          </section>
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">05. Limited Warranty</h2>
            <p>Each timepiece carries a 5-year international warranty against manufacturing defects. This warranty does not cover damage resulting from misuse, accidents, or unauthorized repairs.</p>
          </section>
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">06. Intellectual Property</h2>
            <p>All content on this site, including designs, trademarks, and imagery, is the property of 5 Star Luxury Watches and is protected by international copyright laws.</p>
          </section>
        </div>
      </motion.div>
    </div>
  </div>
);

export const Privacy: React.FC = () => (
  <div className="pt-40 pb-40 bg-gold-100 min-h-screen">
    <div className="luxury-container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="micro-label text-gold-400 mb-8">Legal</p>
        <h1 className="text-5xl md:text-6xl serif-title text-stone-900 mb-16">Privacy Policy</h1>
        <div className="space-y-16 text-stone-500 leading-loose font-light text-lg">
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">Data Collection</h2>
            <p>We collect information you provide directly to us when you make a purchase, subscribe to our newsletter, or contact our concierge. This includes your name, email, shipping address, and phone number.</p>
          </section>
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">Cookies & Analytics</h2>
            <p>We use cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings, though some features of our atelier may be restricted.</p>
          </section>
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">Payment Security</h2>
            <p>All financial transactions are processed through secure, encrypted gateways. We do not store full credit card numbers on our servers.</p>
          </section>
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">Third-Party Services</h2>
            <p>We only share data with trusted partners necessary for order fulfillment (shipping carriers) and marketing (newsletter services). We never sell your data.</p>
          </section>
          <section className="border-l-2 border-gold-200 pl-8">
            <h2 className="text-2xl serif-title text-stone-900 mb-6">Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact our privacy officer at privacy@5starluxury.com for any requests.</p>
          </section>
        </div>
      </motion.div>
    </div>
  </div>
);

