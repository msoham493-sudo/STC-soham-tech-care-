import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Cpu, 
  Heart, 
  ArrowUp, 
  CheckCircle2,
  Camera,
  Laptop
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050912] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Motto (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 p-[2px]">
                <div className="w-full h-full bg-[#070D18] rounded-[10px] flex items-center justify-center">
                  <span className="font-tech text-xl font-bold text-cyan-400">STC</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-tech">Soham Tech Care</h3>
                <p className="text-xs text-cyan-400/90 font-medium">Fixing Today, Securing Tomorrow</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner for custom high-performance PC building, chip-level laptop & computer repairs, and 24/7 smart CCTV security installations in Kolkata.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="text-slate-300 font-semibold">Led by Soham Mondal</p>
              <p>Hardware Engineer & Security Specialist</p>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-cyan-300 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Services</a></li>
              <li><a href="#pc-builder" className="hover:text-cyan-300 transition-colors text-cyan-400 font-medium">PC Builder Widget</a></li>
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">About STC</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact & Booking</a></li>
            </ul>
          </div>

          {/* Core Services (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Gaming PC Builds</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Laptop Repair & Screens</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">CCTV Camera Setup</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Windows & OS Tuning</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Network & Wi-Fi</a></li>
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+916291944469" className="hover:text-cyan-300 transition-colors font-mono">
                    +91 6291944469
                  </a>
                  <p className="text-[11px] text-slate-500">Call / WhatsApp available</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:msoham493@gmail.com" className="hover:text-teal-300 transition-colors font-mono break-all">
                    msoham493@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-500">Service inquiries & orders</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span>Kolkata, West Bengal</span>
                  <p className="text-[11px] text-slate-500">Doorstep visits across city</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              © 2026 <span className="text-white font-semibold">Soham Tech Care (STC)</span>. All rights reserved.
            </p>
            <p className="text-cyan-400/80 mt-0.5 font-medium">
              Tagline: "Fixing Today, Securing Tomorrow"
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Designed for Soham Mondal</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 text-slate-400 transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
