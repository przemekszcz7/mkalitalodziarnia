/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  ExternalLink,
  ChevronRight,
  Heart,
  Star,
  Quote
} from "lucide-react";

const IMAGES = [
  "https://iili.io/BQA7xyX.md.jpg",
  "https://iili.io/BQA7q4p.md.jpg",
  "https://iili.io/BQA7C3N.md.jpg",
  "https://iili.io/BQA7fGR.md.jpg",
  "https://iili.io/BQA7Rnf.md.jpg",
  "https://iili.io/BQA7Tjs.md.jpg",
  "https://iili.io/BQA7Iun.md.jpg",
  "https://iili.io/BQA7aF2.md.jpg"
];

const TORTY_IMAGES = [
  "https://iili.io/BQA7l87.md.jpg",
  "https://iili.io/BQA7199.md.jpg",
  "https://iili.io/BQA7Eue.md.jpg"
];

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const decorativeLine = {
    initial: { width: 0 },
    whileInView: { width: "100%" },
    viewport: { once: true },
    transition: { duration: 1.2, ease: "easeInOut" }
  };

  const KashubianFlower = ({ className = "" }) => (
    <div className={`relative ${className}`}>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 opacity-10"
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-k-blue-med">
          <path d="M50 0C55 20 75 20 100 25C80 30 80 50 75 75C70 55 50 55 25 50C45 45 45 25 50 0Z" />
        </svg>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen selection:bg-k-blue-light selection:text-k-blue-dark relative overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 kashubian-pattern z-0 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-k-blue-dark">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#" className="flex flex-col">
            <span className="font-serif text-2xl font-black text-k-blue-dark leading-none">
              M. KALITA
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-k-blue-med font-bold">
              Lodziarnia Stężyca
            </span>
          </a>
          
          <div className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-k-blue-dark">
            <a href="#o-nas" className="hover:text-k-red transition-colors relative group">
              O nas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-k-red transition-all group-hover:w-full" />
            </a>
            <a href="#smaki" className="hover:text-k-green transition-colors relative group">
              Smaki
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-k-green transition-all group-hover:w-full" />
            </a>
            <a href="#torty" className="hover:text-k-yellow transition-colors relative group">
              Torty
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-k-yellow transition-all group-hover:w-full" />
            </a>
            <a href="#kontakt" className="hover:text-k-blue-med transition-colors relative group">
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-k-blue-med transition-all group-hover:w-full" />
            </a>
          </div>

          <a 
            href="https://www.facebook.com/profile.php?id=61559161885623"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 bg-k-blue-dark text-white rounded-full hover:bg-k-blue-med hover:rotate-12 transition-all shadow-lg"
          >
            <Facebook size={20} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center lg:items-end justify-start overflow-hidden pt-20 px-4 md:px-12 lg:pb-24">
        <div className="absolute inset-x-0 top-0 bottom-0 lg:left-1/3 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={IMAGES[0]}
            alt="Delicious ice cream"
            className="w-full h-full object-cover grayscale-[0.3] brightness-90 lg:rounded-l-[100px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pattern-bg via-pattern-bg/40 to-transparent lg:hidden" />
        </div>
        
        <div className="relative z-10 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-0.5 w-12 bg-k-red" />
              <span className="text-k-red font-black uppercase tracking-widest text-xs">
                Kaszubska Tradycja
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-k-blue-dark leading-none mb-6">
              Lody<br/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-k-blue-dark via-k-blue-med to-k-blue-light">Prawdziwe</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-700 font-serif italic mb-10 max-w-lg">
              "Od 16 lat doskonalimy się dla Was, by sprostać wymaganiom małych i dużych smakoszy"
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#smaki"
                className="group relative bg-k-blue-dark text-white px-10 py-5 rounded-full font-bold overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Zasmakuj w tradycji</span>
                <div className="absolute inset-0 bg-k-red -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>
              <a 
                href="tel:882085002"
                className="group flex items-center gap-4 bg-k-yellow px-10 py-5 rounded-full font-black text-k-blue-dark hover:bg-white transition-all shadow-[0_10px_40px_rgba(255,204,0,0.4)] hover:shadow-2xl hover:scale-105 active:scale-95 border-2 border-k-yellow"
              >
                <div className="w-8 h-8 rounded-full bg-k-blue-dark flex items-center justify-center text-white group-hover:bg-k-red transition-colors animate-bounce">
                  <Phone size={14} fill="currentColor" />
                </div>
                <span className="text-xl tracking-tighter">882 085 002</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute bottom-10 right-10 hidden xl:block animate-float">
          <KashubianFlower className="scale-[3] rotate-12" />
        </div>
      </section>

      {/* About Section - Folk Style */}
      <section id="o-nas" className="py-32 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div {...fadeIn} className="flex-1 relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden relative shadow-2xl">
                <img src={IMAGES[1]} className="w-full h-full object-cover" alt="History" />
                <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-k-yellow p-8 rounded-full shadow-xl rotate-12 hidden md:block">
                <div className="text-center font-black">
                  <div className="text-4xl text-k-blue-dark">16</div>
                  <div className="text-[10px] uppercase tracking-widest text-k-blue-dark leading-none">LAT</div>
                </div>
              </div>
            </motion.div>

            <div className="flex-1">
              <motion.div {...fadeIn}>
                <div className="flex items-center gap-4 mb-4">
                  <KashubianFlower />
                  <span className="font-black text-k-blue-med tracking-widest text-sm uppercase">O naszej pasji</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
                  Sercem Pisane,<br/><span className="text-k-red italic">Ręcznie Kręcone</span>
                </h2>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  className="h-1 bg-k-blue-dark w-1/4 mb-10 origin-left"
                />
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  W Stężycy, wśród kaszubskich jezior, od 16 lat tworzymy lody rzemieślnicze, 
                  których receptury doskonalimy każdego dnia. To tu tradycyjne smaki 
                  Dzieciństwa spotykają się z nowoczesnymi kompozycjami.
                </p>
                <div className="grid grid-cols-2 gap-8 py-8 border-y-2 border-stone-100">
                  <div className="flex items-start gap-4">
                    <div className="text-k-green font-black text-4xl">✓</div>
                    <div>
                      <h4 className="font-bold text-stone-900">Świeże Produkty</h4>
                      <p className="text-sm text-stone-500 italic">Mleko i śmietana od sprawdzonych dostawców</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-k-red font-black text-4xl">✓</div>
                    <div>
                      <h4 className="font-bold text-stone-900">Pasja</h4>
                      <p className="text-sm text-stone-500 italic">Rodzinna receptura i wielkie serce</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Menu Section */}
      <section id="smaki" className="py-32 bg-pattern-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-k-blue-med font-black tracking-widest uppercase text-xs mb-4 block">Nasza Galeria</span>
            <h2 className="text-5xl md:text-7xl font-serif text-k-blue-dark italic">Słodkie Spektrum</h2>
            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-k-blue-med" />
                <div className="w-4 h-4 rounded-full bg-k-yellow" />
                <div className="w-4 h-4 rounded-full bg-k-green" />
                <div className="w-4 h-4 rounded-full bg-k-red" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IMAGES.slice(2, 8).map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl border-8 border-white"
              >
                <img src={img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2" />
                <div className="absolute inset-0 bg-k-blue-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-10 text-center">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-white mb-6 transform -translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                    <Heart size={30} />
                  </div>
                  <h3 className="text-2xl font-serif text-white italic">Smak Tradycji</h3>
                  <div className="w-12 h-1 bg-k-yellow mt-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cakes Section - Custom Design */}
      <section id="torty" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-5 scale-[4] text-k-blue-med pointer-events-none">
          <KashubianFlower />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-k-blue-dark rounded-[80px] p-12 md:p-24 flex flex-col lg:flex-row gap-20 items-center text-white overflow-hidden relative">
            <div className="absolute inset-0 kashubian-pattern opacity-10" />
            
            <div className="flex-1 text-center lg:text-left relative z-10">
              <div className="inline-block bg-k-red text-white text-[10px] uppercase font-black tracking-widest px-6 py-2 rounded-full mb-8">
                Wyjątkowe Zamówienia
              </div>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-none">
                Torty, które<br/> <span className="italic text-k-yellow">zachwycają</span>
              </h2>
              <p className="text-xl text-white/70 mb-12 font-serif italic max-w-md mx-auto lg:mx-0">
                Lody to nie wszystko! Tworzymy artystyczne torty na każdą okazję, 
                inspirowane kaszubską gościnnością.
              </p>
              <a 
                href="https://www.cukierniaalicja.com/torty.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-k-blue-dark px-10 py-5 rounded-full font-bold hover:bg-k-yellow transition-all hover:scale-105"
              >
                Katalog Tortów
                <ChevronRight size={20} className="text-k-red" />
              </a>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4 relative z-10">
              {TORTY_IMAGES.map((img, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: idx * 0.2 }}
                  className={`aspect-square rounded-[30px] overflow-hidden border-4 border-white/20 shadow-2xl ${idx % 2 === 1 ? "mt-12" : ""}`}
                >
                  <img src={img} className="w-full h-full object-cover transition-transform hover:scale-110" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social / Reviews Section */}
      <section className="py-32 bg-pattern-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-24">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="#ffcc00" className="text-k-yellow" />)}
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-k-blue-dark text-center italic mb-12">
              Wasze Słowa Nas<br/><span className="text-k-red not-italic font-black text-4xl uppercase tracking-widest">Inspirują</span>
            </h2>
            
            <motion.div 
              {...fadeIn}
              className="w-full max-w-3xl bg-white p-12 md:p-20 rounded-[60px] shadow-2xl relative border-b-[10px] border-k-blue-med"
            >
              <Quote size={60} className="text-k-blue-med opacity-10 absolute top-10 left-10" />
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-serif italic text-stone-700 leading-snug mb-12 text-center">
                  "Najpyszniejsze lody w okolicy! Uwielbiamy tu przychodzić całą rodziną 
                  od wielu lat. Smaki są zawsze świeże i naturalne."
                </p>
                <div className="flex items-center justify-center gap-6">
                  <div className="w-1 bg-k-red h-8" />
                  <div className="text-left">
                    <div className="font-black text-k-blue-dark uppercase tracking-widest text-sm">Ania ze Stężycy</div>
                    <div className="text-xs text-stone-400 font-bold">Wierna klientka</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="mt-20 flex gap-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61559161885623&sk=reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-k-blue-med text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3"
              >
                Wszystkie opinie
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact - Modern Folk Layout */}
      <section id="kontakt" className="relative py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div {...fadeIn}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-k-red/10 flex items-center justify-center text-k-red">
                    <MapPin size={20} />
                  </div>
                  <span className="font-black text-k-red tracking-widest text-xs uppercase">Znajdź nas w Stężycy</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif text-k-blue-dark mb-12">Zapraszamy do <br/><span className="italic">Lodziarni</span></h2>
                
                <div className="space-y-10 mb-16">
                  <div className="group">
                    <div className="text-xs font-black uppercase text-k-blue-med mb-2 tracking-widest">Adres</div>
                    <p className="text-2xl font-serif text-stone-900 group-hover:text-k-red transition-colors">
                      Jana III Sobieskiego 19a,<br/> Stężyca 83-322
                    </p>
                  </div>
                  <div className="group">
                    <div className="text-xs font-black uppercase text-k-blue-med mb-4 tracking-widest">Kontakt bezpośredni</div>
                    <a 
                      href="tel:882085002" 
                      className="inline-flex items-center gap-4 bg-k-yellow text-k-blue-dark px-10 py-6 rounded-[30px] font-serif text-4xl italic shadow-xl hover:bg-k-blue-dark hover:text-white transition-all hover:-rotate-2 transform"
                    >
                      <Phone size={32} className="text-k-red" />
                      882 085 002
                    </a>
                    <a href="mailto:aleks-magdalenakalita@wp.pl" className="text-stone-500 font-bold hover:text-k-blue-dark block mt-6">aleks-magdalenakalita@wp.pl</a>
                  </div>
                </div>

                <div className="bg-k-blue-dark/5 p-10 rounded-[40px] border-l-8 border-k-yellow">
                  <div className="flex items-center gap-4 mb-6 text-k-blue-dark">
                    <Clock size={24} />
                    <h3 className="font-black uppercase tracking-widest text-sm">Godziny Gojności</h3>
                  </div>
                  <div className="space-y-4 font-serif text-xl italic">
                    <div className="flex justify-between items-center text-stone-600">
                      <span>Poniedziałek - Sobota</span>
                      <span className="font-bold text-k-blue-dark">11:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between items-center text-k-red">
                      <span>Niedziela</span>
                      <span className="font-bold">11:00 - 19:30</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7 h-[600px] rounded-[60px] overflow-hidden shadow-2xl relative border-4 border-k-blue-dark/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.25183007337247!2d17.951085335077735!3d54.207113242859315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd8b9949275e57%3A0x3ee82ddf51ce31b0!2sLodziarnia%20-%20Magdalena%20Kalita!5e0!3m2!1spl!2spl!4v1777461673737!5m2!1spl!2spl" 
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kashubian Ribbon Divider */}
      <div className="h-6 flex">
        <div className="flex-1 bg-k-blue-dark" />
        <div className="flex-1 bg-k-blue-med" />
        <div className="flex-1 bg-k-blue-light" />
        <div className="flex-1 bg-k-yellow" />
        <div className="flex-1 bg-k-green" />
        <div className="flex-1 bg-k-red" />
      </div>

      {/* Footer */}
      <footer className="py-20 bg-pattern-bg text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 inline-block p-4 border-2 border-k-blue-dark/10 rounded-full">
            <KashubianFlower className="scale-125" />
          </div>
          <div className="font-serif text-4xl font-black text-k-blue-dark mb-4">
            M. KALITA
          </div>
          <p className="text-k-blue-med font-bold tracking-[0.3em] uppercase text-[10px] mb-12">
            Z Tradycją Przez Pokolenia
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://www.facebook.com/profile.php?id=61559161885623" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md text-k-blue-dark hover:bg-k-blue-dark hover:text-white transition-all"><Facebook size={20} /></a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md text-k-blue-dark hover:bg-k-blue-dark hover:text-white transition-all"><Instagram size={20} /></a>
          </div>
          
          <div className="text-[10px] font-black uppercase tracking-widest text-stone-400">
            © {new Date().getFullYear()} Lodziarnia Magdalena Kalita • Stężyca
          </div>
        </div>
      </footer>
    </div>
  );
}
