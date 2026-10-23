import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  Camera, 
  Laptop, 
  Monitor, 
  PhoneCall,
  Activity,
  Zap,
  Flame
} from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('rig');

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden cyber-grid">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Flashing/Pulsing Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-6 animate-pulse-glow">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-300 font-tech">
                LIMITED TIME ONLY
              </span>
              <span className="h-3 w-px bg-slate-700"></span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Festive Build Discounts Up to 25% Off
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 font-tech">
              GREAT SAVINGS ON{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 glow-text-cyan">
                NEW PC BUILDING!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Smart Solutions for a Safer & Better Tomorrow —{' '}
              <span className="text-cyan-300 font-semibold">We Take Care & Do Tech Care.</span>{' '}
              Premium custom PC builds, laptop diagnostics, and high-definition CCTV security integration tailored for homes and businesses.
            </p>

            {/* Dual Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#pc-builder"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.65)] hover:scale-105 active:scale-95 transition-all text-base group"
              >
                <Cpu className="w-5 h-5 text-slate-950 transition-transform group-hover:rotate-12" />
                <span>Build Your PC</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-white bg-slate-900/80 hover:bg-slate-800/90 border border-cyan-500/30 hover:border-cyan-400/70 transition-all text-base group backdrop-blur-md hover:scale-105 active:scale-95"
              >
                <Wrench className="w-5 h-5 text-cyan-400 transition-transform group-hover:-rotate-12" />
                <span>Book a Service</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Doorstep Service in Kolkata</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>100% Genuine Hardware</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Led by Soham Mondal</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Element / Banner Graphic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative outer glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-teal-500/20 to-blue-600/30 blur-xl opacity-75"></div>

              {/* Main Banner Tech Showcase Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#070D18] border border-cyan-500/30 p-6 shadow-2xl overflow-hidden">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="text-xs font-mono text-cyan-300 ml-2">STC_SYSTEM_HUD_v4.2</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    LIVE ONLINE
                  </div>
                </div>

                {/* Tech Showcase Graphic: RGB Rig + Monitor + Laptop + CCTV Visual Composition */}
                <div className="relative w-full h-72 sm:h-80 bg-slate-950/80 rounded-xl border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden">
                  
                  {/* Background grid scanline */}
                  <div className="absolute inset-0 cyber-grid opacity-20"></div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan opacity-60"></div>

                  {/* SVG Illustration: Gaming Rig + Laptop + Monitor + CCTV */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 500 320" className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      <defs>
                        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06B6D4" />
                          <stop offset="100%" stopColor="#14B8A6" />
                        </linearGradient>
                        <linearGradient id="rgbTowerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                        <linearGradient id="neonLight" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>

                      {/* Desk Platform Base */}
                      <rect x="20" y="270" width="460" height="8" rx="4" fill="#1E293B" />
                      <line x1="40" y1="274" x2="460" y2="274" stroke="#06B6D4" strokeWidth="2" strokeOpacity="0.4" />

                      {/* ================= 1. RGB GAMING RIG TOWER (Left) ================= */}
                      <g className="cursor-pointer hover:opacity-95 transition-opacity">
                        {/* Tower Case */}
                        <rect x="50" y="60" width="105" height="205" rx="10" fill="url(#rgbTowerGrad)" stroke="#06B6D4" strokeWidth="2" />
                        {/* Tempered Glass Window */}
                        <rect x="58" y="75" width="89" height="155" rx="6" fill="#070D18" fillOpacity="0.85" stroke="#334155" strokeWidth="1" />
                        
                        {/* Motherboard & Internal RGB Glow */}
                        <circle cx="102" cy="110" r="24" fill="none" stroke="url(#neonLight)" strokeWidth="3" className="animate-spin-slow origin-[102px_110px]" />
                        <circle cx="102" cy="110" r="14" fill="#06B6D4" fillOpacity="0.25" />
                        <path d="M102 96 L102 124 M88 110 L116 110" stroke="#06B6D4" strokeWidth="2" strokeOpacity="0.7" />
                        
                        {/* RAM RGB Sticks */}
                        <rect x="122" y="94" width="4" height="26" rx="2" fill="#00F5D4" />
                        <rect x="129" y="94" width="4" height="26" rx="2" fill="#06B6D4" />
                        
                        {/* GPU / Graphics Card with illuminated logo */}
                        <rect x="65" y="150" width="75" height="24" rx="4" fill="#1E293B" stroke="#06B6D4" strokeWidth="1.5" />
                        <text x="72" y="166" fill="#06B6D4" fontSize="9" fontWeight="bold" fontFamily="monospace">RTX 40-SERIES</text>
                        <circle cx="130" cy="162" r="5" fill="#10B981" />
                        
                        {/* Bottom PSU Shroud & Logo */}
                        <rect x="58" y="235" width="89" height="24" rx="4" fill="#111827" />
                        <text x="75" y="251" fill="#94A3B8" fontSize="10" fontWeight="bold" fontFamily="monospace">STC POWER</text>
                        
                        {/* Front Intake RGB Fans */}
                        <circle cx="50" cy="95" r="4" fill="#06B6D4" />
                        <circle cx="50" cy="150" r="4" fill="#14B8A6" />
                        <circle cx="50" cy="205" r="4" fill="#06B6D4" />
                      </g>

                      {/* ================= 2. CURVED GAMING MONITOR (Center) ================= */}
                      <g>
                        {/* Monitor Stand */}
                        <path d="M250 220 L250 268 M225 268 L275 268" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
                        {/* Monitor Bezel */}
                        <rect x="175" y="90" width="160" height="110" rx="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
                        {/* Screen Display */}
                        <rect x="180" y="95" width="150" height="100" rx="4" fill="#070D18" />
                        {/* Telemetry Dashboard on Screen */}
                        <rect x="188" y="105" width="60" height="18" rx="3" fill="#1E293B" />
                        <text x="193" y="118" fill="#06B6D4" fontSize="9" fontWeight="bold">FPS: 240+</text>
                        <rect x="255" y="105" width="65" height="18" rx="3" fill="#1E293B" />
                        <text x="260" y="118" fill="#10B981" fontSize="9" fontWeight="bold">TEMP: 42°C</text>
                        
                        {/* Waveform / Benchmark Curve */}
                        <path d="M190 165 Q215 130 240 155 T290 140 T320 150" fill="none" stroke="url(#cyanGrad)" strokeWidth="3" />
                        <text x="205" y="185" fill="#94A3B8" fontSize="8" fontFamily="monospace">SOHAM TECH CARE BENCHMARK</text>
                      </g>

                      {/* ================= 3. DIAGNOSTIC LAPTOP (Right-Mid) ================= */}
                      <g>
                        {/* Laptop Screen */}
                        <rect x="345" y="165" width="95" height="65" rx="5" fill="#0F172A" stroke="#06B6D4" strokeWidth="1.5" />
                        <rect x="350" y="170" width="85" height="55" rx="3" fill="#050C16" />
                        {/* Laptop Diagnostic Lines */}
                        <text x="355" y="184" fill="#38BDF8" fontSize="7" fontFamily="monospace">&gt; Diagnostics: OK</text>
                        <text x="355" y="196" fill="#14B8A6" fontSize="7" fontFamily="monospace">&gt; OS: Windows 11 Pro</text>
                        <text x="355" y="208" fill="#10B981" fontSize="7" fontFamily="monospace">&gt; System Health: 100%</text>
                        
                        {/* Laptop Base */}
                        <polygon points="335,232 450,232 440,242 345,242" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                        <rect x="380" y="234" width="25" height="6" rx="2" fill="#334155" />
                      </g>

                      {/* ================= 4. CCTV SECURITY CAMERA (Top Right) ================= */}
                      <g>
                        {/* Mount Arm */}
                        <path d="M440 25 L440 45 L405 55" fill="none" stroke="#64748B" strokeWidth="5" strokeLinecap="round" />
                        {/* Camera Housing */}
                        <rect x="365" y="45" width="55" height="30" rx="10" fill="#1E293B" stroke="#06B6D4" strokeWidth="2" />
                        {/* Sun Shield */}
                        <path d="M360 45 L420 45" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                        {/* Camera Lens */}
                        <circle cx="373" cy="60" r="9" fill="#070D18" stroke="#06B6D4" strokeWidth="2" />
                        <circle cx="373" cy="60" r="5" fill="#06B6D4" fillOpacity="0.4" />
                        <circle cx="373" cy="60" r="2" fill="#10B981" />
                        
                        {/* Infrared Ring LEDs */}
                        <circle cx="368" cy="55" r="1.5" fill="#EF4444" />
                        <circle cx="378" cy="55" r="1.5" fill="#EF4444" />
                        <circle cx="368" cy="65" r="1.5" fill="#EF4444" />
                        <circle cx="378" cy="65" r="1.5" fill="#EF4444" />
                        
                        {/* Surveillance Scanning Cone */}
                        <polygon points="364,60 260,110 300,190" fill="#06B6D4" fillOpacity="0.08" />
                        <line x1="364" y1="60" x2="260" y2="110" stroke="#06B6D4" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
                        <line x1="364" y1="60" x2="300" y2="190" stroke="#06B6D4" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

                        {/* CCTV Status Badge */}
                        <rect x="385" y="25" width="70" height="16" rx="4" fill="#070D18" stroke="#10B981" strokeWidth="1" />
                        <circle cx="393" cy="33" r="3" fill="#10B981" />
                        <text x="400" y="37" fill="#E2E8F0" fontSize="8" fontWeight="bold">CCTV 24/7</text>
                      </g>
                    </svg>
                  </div>

                  {/* Telemetry Footer Status */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-900/90 rounded-lg px-3 py-2 border border-slate-800">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Cpu className="w-3.5 h-3.5" /> Custom PC Building
                    </span>
                    <span className="flex items-center gap-1.5 text-teal-300">
                      <Laptop className="w-3.5 h-3.5" /> Laptop Service
                    </span>
                    <span className="flex items-center gap-1.5 text-blue-300">
                      <Camera className="w-3.5 h-3.5" /> CCTV Surveillance
                    </span>
                  </div>

                </div>

                {/* Bottom Spec Callout */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Custom Built by</p>
                    <p className="text-sm font-bold text-white flex items-center gap-1 font-tech">
                      Soham Mondal <span className="text-cyan-400 text-xs font-mono">(Lead Engineer)</span>
                    </p>
                  </div>
                  <a
                    href="tel:+916291944469"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/20 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Quick Query</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
