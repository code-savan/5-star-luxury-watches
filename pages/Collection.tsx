
import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown, Search } from 'lucide-react';

export const Collection: React.FC = () => {
  const [typeFilter, setTypeFilter] = useState('All');
  const [materialFilter, setMaterialFilter] = useState('All');
  const [complicationFilter, setComplicationFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isRefineOpen, setIsRefineOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const productTypes = ['All', 'Hublot', 'Jaeger-LeCoultre', 'Luxury Gold Chain', 'Poedagar'];
  const materials = ['All', 'Gold', 'Steel', 'Titanium', 'Ceramic', 'Wood'];
  const complications = ['All', 'Chronograph', 'Date', 'Automatic', 'Moonphase'];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (typeFilter !== 'All') {
      result = result.filter(p => {
        if (typeFilter === 'Hublot') return p.name.includes('Hublot');
        if (typeFilter === 'Jaeger-LeCoultre') return p.name.includes('Jaeger');
        if (typeFilter === 'Luxury Gold Chain') return p.name.includes('Luxury Gold Chain');
        if (typeFilter === 'Poedagar') return p.name.includes('Poedagar');
        return true;
      });
    }

    if (materialFilter !== 'All') {
      result = result.filter(p => p.material === materialFilter);
    }

    if (complicationFilter !== 'All') {
      result = result.filter(p => p.complications.includes(complicationFilter));
    }

    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [typeFilter, materialFilter, complicationFilter, sortBy, searchQuery]);

  const resetFilters = () => {
    setTypeFilter('All');
    setMaterialFilter('All');
    setComplicationFilter('All');
    setSortBy('Featured');
    setSearchQuery('');
  };

  const activeFiltersCount = [
    materialFilter !== 'All',
    complicationFilter !== 'All',
    searchQuery !== ''
  ].filter(Boolean).length;

  return (
    <div className="pt-40 pb-40 bg-gold-100 min-h-screen">
      <div className="luxury-container">
        {/* Header */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="micro-label text-gold-400 mb-6">The Catalog</p>
            <h1 className="text-5xl md:text-7xl serif-title text-stone-900 mb-8 leading-tight">
              The Collection
            </h1>
            <p className="text-stone-500 text-lg leading-relaxed font-light tracking-wide max-w-xl">
              An exhaustive study in horological precision. Each piece is curated to represent the apex of modern craftsmanship and aesthetic discipline.
            </p>
          </motion.div>
        </header>

        {/* Toolbar */}
        <div className="bg-gold-100 border-y border-gold-200 py-6 mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Product Types */}
            <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
              {productTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className="relative group py-2 whitespace-nowrap"
                >
                  <span className={`micro-label transition-colors ${
                    typeFilter === type ? 'text-stone-900' : 'text-stone-400 hover:text-stone-900'
                  }`}>
                    {type}
                  </span>
                  {typeFilter === type && (
                    <motion.span
                      layoutId="typeUnderline"
                      className="absolute bottom-0 left-0 w-full h-px bg-gold-400"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-8 w-full lg:w-auto justify-between lg:justify-end">
              <div className="relative flex-grow lg:flex-grow-0 max-w-xs">
                <Search className="absolute left-4 top-8 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search watches..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white border border-stone-200 rounded-lg py-3 pl-12 pr-4 text-sm tracking-wide outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 w-full shadow-sm"
                />
              </div>

              {/* Commented out filter button for now
              <button
                onClick={() => setIsRefineOpen(!isRefineOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  isRefineOpen
                    ? 'bg-gold-400 text-white border-gold-400 shadow-lg'
                    : 'bg-white border-stone-200 text-stone-900 hover:border-gold-400 hover:shadow-md'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm font-medium">Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-white/20 text-xs rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
              */}

              <div className="hidden sm:flex items-center gap-3">
                <span className="text-xs text-stone-500 font-medium">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Refine Panel */}
        {/* Commented out refine panel for now
        <AnimatePresence>
          {isRefineOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-b border-stone-200 mb-20 bg-white rounded-lg shadow-lg"
            >
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 mb-4">Material</h4>
                    <div className="flex flex-wrap gap-2">
                      {materials.map(mat => (
                        <button
                          key={mat}
                          onClick={() => setMaterialFilter(mat === materialFilter ? 'All' : mat)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            materialFilter === mat
                              ? 'bg-gold-400 text-white shadow-md transform scale-105'
                              : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 hover:border-gold-300'
                          }`}
                        >
                          {mat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 mb-4">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {complications.map(comp => (
                        <button
                          key={comp}
                          onClick={() => setComplicationFilter(comp === complicationFilter ? 'All' : comp)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            complicationFilter === comp
                              ? 'bg-gold-400 text-white shadow-md transform scale-105'
                              : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 hover:border-gold-300'
                          }`}
                        >
                          {comp}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 mb-4">Price Range</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <button
                        onClick={() => {
                          setMaterialFilter('All');
                          setComplicationFilter('All');
                        }}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                          materialFilter === 'All' && complicationFilter === 'All'
                            ? 'bg-gold-400 text-white shadow-md transform scale-105'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 hover:border-gold-300'
                        }`}
                      >
                        All Watches
                        <span className="block text-xs opacity-75">₦31k - ₦50k</span>
                      </button>
                      <button
                        onClick={() => {
                          setMaterialFilter('Steel');
                          setComplicationFilter('Date');
                        }}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                          materialFilter === 'Steel' && complicationFilter === 'Date'
                            ? 'bg-gold-400 text-white shadow-md transform scale-105'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 hover:border-gold-300'
                        }`}
                      >
                        Classic
                        <span className="block text-xs opacity-75">₦31k - ₦36k</span>
                      </button>
                      <button
                        onClick={() => {
                          setMaterialFilter('Gold');
                          setComplicationFilter('Chronograph');
                        }}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                          materialFilter === 'Gold' && complicationFilter === 'Chronograph'
                            ? 'bg-gold-400 text-white shadow-md transform scale-105'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 hover:border-gold-300'
                        }`}
                      >
                        Premium
                        <span className="block text-xs opacity-75">₦48k - ₦50k</span>
                      </button>
                      <button
                        onClick={() => {
                          setMaterialFilter('Titanium');
                          setComplicationFilter('Automatic');
                        }}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                          materialFilter === 'Titanium' && complicationFilter === 'Automatic'
                            ? 'bg-gold-400 text-white shadow-md transform scale-105'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 hover:border-gold-300'
                        }`}
                      >
                        Modern
                        <span className="block text-xs opacity-75">₦42k - ₦47k</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 mt-6 border-t border-stone-200">
                  <button
                    onClick={resetFilters}
                    className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium"
                  >
                    Clear all filters
                  </button>
                  <button
                    onClick={() => setIsRefineOpen(false)}
                    className="px-6 py-2 bg-gold-400 text-white rounded-lg hover:bg-gold-500 transition-colors text-sm font-medium"
                  >
                    Apply filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        */}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40"
          >
            <p className="micro-label text-stone-400">
              No timepieces found matching your criteria
            </p>
            <button
              onClick={resetFilters}
              className="mt-8 micro-label text-gold-400 border-b border-gold-400 pb-1"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <section className="mt-60 pt-40 border-t border-gold-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="aspect-[16/10] overflow-hidden bg-stone-200 relative group">
              <img
                src="/jaeger-green.jpeg"
                alt="Bespoke Watch Service"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-1000" />
            </div>
            <div className="space-y-10">
              <p className="micro-label text-gold-400">Bespoke Services</p>
              <h2 className="text-4xl md:text-5xl serif-title leading-tight">Looking for something truly unique?</h2>
              <p className="text-stone-500 text-lg font-light leading-relaxed">
                Our master horologists are available for private consultations. Create a timepiece that is uniquely yours, engineered to your exact specifications.
              </p>
              <div className="pt-4">
                <button className="micro-label text-stone-900 border-b border-gold-400 pb-2 hover:text-gold-400 transition-all">
                  Inquire About Commissions
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
