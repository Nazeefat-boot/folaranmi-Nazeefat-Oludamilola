import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Works', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-2xl px-6 py-4 rounded-full border border-white/20",
        isScrolled 
          ? "bg-white/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border-white/40 py-3" 
          : "bg-white/20 backdrop-blur-md border-white/10"
      )}
    >
      <div className="flex items-center justify-between">
        <motion.a 
          href="#"
          className="text-lg font-display font-black tracking-tighter text-slate-900"
        >
          NZ<span className="text-indigo-600">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Toggle (Simple) */}
        <div className="md:hidden flex items-center">
           <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
             {isOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu (Overlay-style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white/90 backdrop-blur-2xl rounded-[32px] border border-white p-8 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-medium text-slate-900 text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
