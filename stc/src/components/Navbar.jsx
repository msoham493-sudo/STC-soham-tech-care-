import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'PC Builder / Offers', href: '#pc-builder', highlight: true },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#070D18]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-600 p-[2px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#070D18] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-tech text-2xl font-bold tracking-wider text-cyan-400">STC</span>
                </div>
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-tech group-hover:text-cyan-400 transition-colors">
                  Soham Tech Care
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-mono hidden sm:inline-block">
                  STC
                </span>
              </div>
              <p className="text-[11px] text-cyan-300/80 tracking-wide font-medium">
                Fixing Today, Securing Tomorrow
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 relative py-1 ${
                  link.highlight 
                    ? 'text-cyan-300 hover:text-cyan-200 font-semibold' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {link.highlight && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-gradient-to-r from-cyan-500 to-teal-500 text-[#070D18] rounded-full">
                    Hot
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Quick Action: Glowing Call Button (Previous Styling) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+916291944469"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#070D18] animate-bounce" />
              <span className="text-[#070D18] font-bold">Call Now</span>
              <span className="text-[12px] bg-slate-900/40 text-cyan-200 px-2 py-0.5 rounded-full font-mono">
                +91 6291944469
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:+916291944469"
              className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors"
              title="Call STC"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B1120]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  link.highlight
                    ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-bold">
                    Special Offer
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="tel:+916291944469"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 6291944469</span>
              </a>

              <p className="text-center text-xs text-slate-400 mt-1">
                Your Trusted Tech Partner • Kolkata, West Bengal
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
