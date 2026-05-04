/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car as CarIcon, 
  ChevronRight, 
  Info, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Twitter, 
  Facebook,
  Menu,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { cars } from './data/cars';
import { Car } from './types';
import { cn } from './lib/utils';

export default function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = ['All', 'Sedan', 'Hatchback', 'SUV', 'Sports'];
  const filteredCars = filter === 'All' ? cars : cars.filter(c => c.category === filter);
  const newArrivals = cars.filter(c => c.isNewArrival);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-deep text-slate-200 font-sans selection:bg-brand-red selection:text-white">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex justify-between items-center",
          isScrolled ? "bg-bg-card/90 backdrop-blur-md border-b border-border-muted" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center font-bold text-white">Z</div>
          <span className="font-display text-xl font-bold tracking-tighter uppercase">Zenith<span className="text-brand-red">Motors</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
          <a href="#home" className="hover:text-brand-red transition-colors">Showroom</a>
          <a href="#gallery" className="hover:text-brand-red transition-colors">Inventory</a>
          <a href="#about" className="hover:text-brand-red transition-colors">Our Story</a>
          <a href="#contact" className="hover:text-brand-red transition-colors">Inquiry</a>
        </div>

        <button className="hidden md:block border border-slate-700 rounded-none px-6 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
          Book a Test Drive
        </button>

        <button 
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-40 bg-bg-deep pt-24 px-8 flex flex-col gap-8 md:hidden"
          >
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-display font-light border-b border-border-muted pb-4">Home</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-display font-light border-b border-border-muted pb-4">Gallery</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-display font-light border-b border-border-muted pb-4">About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-display font-light border-b border-border-muted pb-4 transition-colors hover:text-brand-red">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden border-b border-border-muted">
          <div className="absolute inset-0 bg-neutral-950">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop" 
              alt="Hero Car" 
              className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-[2000ms] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 bg-brand-red/10 border border-brand-red/50 text-brand-red text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                Official Japanese Export Partner
              </div>
              <h1 className="text-6xl md:text-[8rem] font-display font-bold tracking-tighter leading-[0.85] mb-8">
                NIPPON <br/> <span className="text-slate-500 font-light italic">PRECISION</span>
              </h1>
              <p className="max-w-md mx-auto text-sm md:text-base text-slate-400 font-light leading-relaxed mb-12">
                Experience the pinnacle of engineering. From Osaka's streets to the world stage, we bring you perfection in motion.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="#gallery" className="bg-brand-red text-white px-12 py-5 rounded-none text-xs font-bold tracking-widest uppercase hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20">
                  View Inventory
                </a>
                <a href="#contact" className="border border-slate-700 px-12 py-5 rounded-none text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                  Request Quote
                </a>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-12 hidden lg:flex gap-4">
             <div className="w-16 h-1 bg-brand-red"></div>
             <div className="w-16 h-1 bg-slate-800"></div>
             <div className="w-16 h-1 bg-slate-800"></div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-24 px-6 md:px-12 bg-bg-card border-b border-border-muted overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                  <span className="w-4 h-px bg-slate-700"></span> Seasonal Updates
                </h3>
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">New <span className="text-slate-500 italic font-light">Inventory</span></h2>
              </div>
              <a href="#gallery" className="text-[10px] font-bold uppercase tracking-widest text-brand-red group flex items-center gap-2">
                Browse Full Collection <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {newArrivals.map((car, idx) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCar(car)}
                >
                  <div className="relative aspect-video overflow-hidden border border-border-muted bg-neutral-900 mb-6">
                    <img 
                      src={car.image} 
                      alt={car.model} 
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400">{car.make}</span>
                      <h4 className="text-xl font-display font-medium">{car.model}</h4>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-slate-500">
                    <span className="flex items-center gap-2"><div className="w-2 h-px bg-brand-red"></div> {car.year} Model</span>
                    <span className="text-white">{car.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-6 md:px-12 bg-bg-deep">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 sticky top-32 h-fit">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                  <span className="w-4 h-px bg-slate-700"></span> Showroom Filter
                </h3>
                <h2 className="text-5xl font-display font-bold leading-[0.9] mb-10">CURATED <br/> <span className="text-slate-500 italic font-light">STOCK</span></h2>
                
                <div className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={cn(
                        "text-left px-4 py-3 text-[10px] font-bold tracking-widest uppercase transition-all border",
                        filter === cat 
                          ? "bg-brand-red text-white border-brand-red" 
                          : "bg-bg-card text-slate-400 border-border-muted hover:border-slate-600"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="mt-12 p-6 border border-border-muted bg-bg-card/50">
                  <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-2 font-bold">Showroom Note</p>
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    "Our inventory is updated weekly with hand-picked vehicles directly from Japanese auctions."
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCars.map((car) => (
                  <motion.div
                    layout
                    key={car.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="group border border-border-muted bg-bg-card p-4 hover:border-slate-500 transition-colors"
                  >
                    <div 
                      className="aspect-[4/3] overflow-hidden bg-neutral-900 mb-6 cursor-pointer relative"
                      onClick={() => setSelectedCar(car)}
                    >
                      <img 
                        src={car.image} 
                        alt={car.model} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm text-[8px] font-bold uppercase tracking-widest">
                        {car.category}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <h3 className="text-2xl font-display font-medium tracking-tight">{car.model}</h3>
                        <p className="text-sm font-light text-slate-400">{car.price}</p>
                      </div>
                      <div className="h-px w-full bg-border-muted" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border-l border-border-muted pl-3">
                          <p className="text-[9px] uppercase text-slate-500">Engine</p>
                          <p className="text-[11px] font-bold text-white uppercase">{car.specs.engine}</p>
                        </div>
                        <div className="border-l border-border-muted pl-3 text-right">
                          <p className="text-[9px] uppercase text-slate-500">Status</p>
                          <p className="text-[11px] font-bold text-brand-red uppercase">In Stock</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedCar(car)}
                        className="w-full py-3 border border-slate-700 text-[9px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                      >
                        Technical Specs <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-bg-card border-y border-border-muted">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square border border-border-muted p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Legacy" 
                    className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-red/5 backdrop-blur-xl border border-brand-red/20 hidden md:flex items-center justify-center text-center p-6">
                  <h4 className="font-display font-light text-sm italic leading-relaxed text-slate-300">
                    "Bridging the gap between Osaka and the world since 1994."
                  </h4>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                  <span className="w-4 h-px bg-slate-700"></span> Our Heritage
                </h3>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-[0.9]">
                  PRECISION DRIVE <br/> <span className="text-slate-500 italic font-light">GLOBAL LEGACY</span>
                </h2>
                <div className="space-y-6 text-slate-400 font-light leading-relaxed">
                  <p>
                    For three decades, Zenith Motors has served as the ultimate destination for Japanese automotive engineering. Our journey began in a small workshop in Shizuoka, where we learned that excellence isn't just about speed—it's about the soul of the machine.
                  </p>
                  <p>
                    Today, we maintain high-security facilities across Tokyo, Osaka, and now globally, housing a curated collection of standard and performance models that define durability and innovation.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-12">
                   <div className="border-l-2 border-brand-red pl-5 py-2">
                      <p className="text-2xl font-display font-bold">150+</p>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Quality checkpoints</p>
                   </div>
                   <div className="border-l-2 border-brand-red pl-5 py-2">
                      <p className="text-2xl font-display font-bold">100%</p>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Takumi certified</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 md:px-12 bg-bg-deep">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                  <span className="w-4 h-px bg-slate-700"></span> Communication
                </h3>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-[0.9]">DIRECT <br/> <span className="text-brand-red italic font-light">INQUIRY</span></h2>
                
                <div className="space-y-10 mt-16 group">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-red mt-1" />
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Showroom Center</h4>
                      <p className="text-xl font-light text-slate-200">Shibuya Cross, Tokyo, JP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-brand-red mt-1" />
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Electronic Mail</h4>
                      <p className="text-xl font-light text-slate-200">contact@zenithmotors.jp</p>
                    </div>
                  </div>
                </div>

                <div className="mt-20 flex gap-6 text-slate-600">
                  <span className="text-[10px] font-bold tracking-widest cursor-pointer hover:text-white transition-colors">INSTAGRAM</span>
                  <span className="text-[10px] font-bold tracking-widest cursor-pointer hover:text-white transition-colors">TWITTER</span>
                  <span className="text-[10px] font-bold tracking-widest cursor-pointer hover:text-white transition-colors">LINKEDIN</span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-bg-card border border-border-muted p-8 md:p-12 shadow-2xl">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Express Inquiry Form</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" placeholder="Full Name" className="w-full bg-slate-900/50 border border-slate-800 p-4 text-xs font-medium focus:border-brand-red outline-none transition-colors" />
                      <input type="email" placeholder="Email Address" className="w-full bg-slate-900/50 border border-slate-800 p-4 text-xs font-medium focus:border-brand-red outline-none transition-colors" />
                    </div>
                    <select className="w-full bg-slate-900/50 border border-slate-800 p-4 text-xs font-medium focus:border-brand-red outline-none appearance-none text-slate-500">
                      <option>Select Model of Interest</option>
                      <option>Toyota Corolla Altis</option>
                      <option>Suzuki Swift Sport</option>
                      <option>Honda Civic Type R</option>
                    </select>
                    <textarea placeholder="Specific Requirements / Modifications" rows={4} className="w-full bg-slate-900/50 border border-slate-800 p-4 text-xs font-medium focus:border-brand-red outline-none transition-colors" />
                    <button className="w-full bg-brand-red py-5 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-all text-white shadow-lg shadow-brand-red/20">
                      Transmit Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="h-20 bg-bg-deep border-t border-border-muted flex items-center justify-between px-6 md:px-12">
        <div className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">
          © 2024 Zenith Motors Showroom | Tokyo • Osaka • Dubai
        </div>
        <div className="hidden md:flex gap-8">
          <div className="flex items-center gap-2 opacity-30">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[9px] uppercase font-bold tracking-widest">Certified Dealer</span>
          </div>
        </div>
      </footer>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg-deep/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="min-h-screen px-6 py-12 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="max-w-6xl w-full border border-border-muted bg-bg-card p-8 md:p-12 relative"
              >
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <span className="text-brand-red text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">Technical Dossier</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">{selectedCar.make} <br/> <span className="text-slate-500 italic font-light">{selectedCar.model}</span></h2>
                  </div>
                  <button 
                    onClick={() => setSelectedCar(null)}
                    className="absolute top-8 right-8 p-3 text-slate-500 hover:text-white border border-slate-800 hover:border-slate-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div className="border border-border-muted p-2">
                    <img src={selectedCar.image} alt={selectedCar.model} className="w-full aspect-[4/3] object-cover" />
                  </div>

                  <div className="space-y-12">
                    <div>
                       <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 flex items-center gap-2">
                        <span className="w-4 h-px bg-slate-700"></span> Technical Specifications
                      </h3>
                      <div className="grid grid-cols-2 gap-y-6">
                        <div className="border-l border-border-muted pl-4">
                          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Engine Unit</p>
                          <p className="text-sm font-semibold text-white">{selectedCar.specs.engine}</p>
                        </div>
                        <div className="border-l border-border-muted pl-4">
                          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Power Output</p>
                          <p className="text-sm font-semibold text-white">{selectedCar.specs.power}</p>
                        </div>
                        <div className="border-l border-border-muted pl-4">
                          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Transmission</p>
                          <p className="text-sm font-semibold text-white">{selectedCar.specs.transmission}</p>
                        </div>
                        <div className="border-l border-border-muted pl-4">
                          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Fuel Economy</p>
                          <p className="text-sm font-semibold text-white">{selectedCar.specs.fuelEconomy}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-slate-900/40 border border-border-muted">
                      <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                        {selectedCar.description}
                      </p>
                      <div className="flex items-center gap-2 text-brand-red text-[10px] font-bold tracking-widest italic group pointer-events-none">
                         <div className="w-6 h-px bg-brand-red" />
                         AUTHENTIC JAPANESE IMPORT
                      </div>
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 bg-brand-red text-white py-4 font-bold tracking-widest uppercase hover:bg-red-700 transition-all text-xs">
                        Book Test Drive
                      </button>
                      <button className="flex-1 border border-slate-700 text-slate-300 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all text-xs">
                        Export Quote
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
