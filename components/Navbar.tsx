'use client';

import { Search, ShoppingBag, ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
        {/* Top Marquee Bar */}
      <div className="border-b border-white/20 overflow-hidden whitespace-nowrap py-2 flex items-center">
        <div className="animate-marquee flex whitespace-nowrap text-xs md:text-sm text-white font-medium tracking-wide">
          <span className="mx-4">🚀 20% OFF GYM MEMBERSHIPS & CUSTOM TRAINING PLANS - TODAY ONLY! 🔥 LEVEL UP YOUR TRAINING - LIMITED TIME! &nbsp;</span>
          <span className="mx-4">🚀 20% OFF GYM MEMBERSHIPS & CUSTOM TRAINING PLANS - TODAY ONLY! 🔥 LEVEL UP YOUR TRAINING - LIMITED TIME! &nbsp;</span>
          <span className="mx-4">🚀 20% OFF GYM MEMBERSHIPS & CUSTOM TRAINING PLANS - TODAY ONLY! 🔥 LEVEL UP YOUR TRAINING - LIMITED TIME! &nbsp;</span>
          <span className="mx-4">🚀 20% OFF GYM MEMBERSHIPS & CUSTOM TRAINING PLANS - TODAY ONLY! 🔥 LEVEL UP YOUR TRAINING - LIMITED TIME! &nbsp;</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between border-b border-white/10">
        <Link href="/" className="text-white text-3xl font-heading font-bold tracking-wider flex items-center">
          SIXPACK
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-white font-medium text-sm">
          <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#plan" className="hover:text-primary transition-colors">Plan</Link>
          <Link href="#transformation" className="hover:text-primary transition-colors">Transformation</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">          
          <div className="p-1 rounded-full border border-white/30 ml-2">
            <Link href="#schedule" className="bg-primary hover:bg-primary-hover text-black px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2 transition-colors">
              Schedule Session
              <span className="bg-black/10 rounded-full p-1">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 z-[60] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Mobile Drawer Panel */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-black shadow-2xl border-l border-white/10 p-6 flex flex-col transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-12">
            <Link href="/" className="text-white text-3xl font-heading font-bold tracking-wider flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              SIXPACK
            </Link>
            <button 
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-white font-medium text-lg">
            <Link href="#home" className="hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="#about" className="hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="#plan" className="hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Plan</Link>
            <Link href="#transformation" className="hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Transformation</Link>
            <Link href="#contact" className="hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <Link href="#schedule" className="bg-primary hover:bg-primary-hover text-black px-5 py-2.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-colors w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Schedule Session
                <span className="bg-black/10 rounded-full p-1">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
