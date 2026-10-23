import React, { useState } from 'react';
import { 
  Monitor, 
  ShieldCheck, 
  Award, 
  Check, 
  ArrowRight, 
  Cpu, 
  Wrench, 
  HardDrive, 
  Camera, 
  Wifi, 
  Smartphone, 
  Clock, 
  IndianRupee, 
  ThumbsUp, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function Services({ onSelectServiceForBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const pillars = [
    {
      id: 'computer-laptop',
      pillarTitle: 'Computer & Laptop Solutions',
      badge: 'Core Specialty',
      icon: Monitor,
      color: 'cyan',
      gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400',
      tagline: 'Precision hardware diagnostics, component upgrades, and software optimization.',
      items: [
        { name: 'PC Build & Upgrade Diagnostics', desc: 'Custom gaming, rendering & workstation builds tailored to your budget.' },
        { name: 'Windows Installation & Setup', desc: 'Clean, debloated Windows 10/11 Pro with all essential runtime setups.' },
        { name: 'Driver & System Support & Optimization', desc: 'Eliminate crashes, blue screens (BSOD), and driver incompatibilities.' },
        { name: 'Troubleshooting & Optimisation', desc: 'Overheating remedies, thermal paste repasting, and latency tuning.' },
        { name: 'Laptop Screen Replacement', desc: 'Original IPS, FHD, and 144Hz high refresh rate screen panels with warranty.' },
        { name: 'Battery & Keyboard Repair', desc: 'Original OEM laptop battery replacements and mechanical/chiclet keyboard fixes.' },
        { name: 'Software & OS Installation', desc: 'Genuine Office, antivirus, creative tools & firmware configuration.' },
        { name: 'Hardware Fault Diagnosis', desc: 'Component-level motherboard, chip-level checking, and RAM/GPU testing.' },
      ],
      whatsappPrefill: 'Hi Soham, I need assistance with Computer / Laptop Solutions (Repair/Upgrade).'
    },
    {
      id: 'cctv-security',
      pillarTitle: 'CCTV & Security Solutions',
      badge: 'Surveillance & Protection',
      icon: Camera,
      color: 'teal',
      gradient: 'from-teal-500/20 via-teal-500/5 to-transparent',
      borderColor: 'border-teal-500/30 hover:border-teal-400',
      tagline: 'High-definition 24/7 security surveillance with live remote view for homes and shops.',
      items: [
        { name: 'Complete CCTV Installation', desc: 'HD, IP, and Dome/Bullet security cameras neatly wired for zero blind spots.' },
        { name: 'Reliable Service & Support', desc: 'Routine preventative maintenance and swift repair response in Kolkata.' },
        { name: 'Remote Viewing (Mobile / PC)', desc: 'Watch real-time live video and playback directly on your Android, iPhone, or PC.' },
        { name: 'Network & Wi-Fi Setup', desc: 'High-speed NVR/DVR router networking, port forwarding, and secure mesh setup.' },
        { name: 'Camera Maintenance', desc: 'Lens polishing, sensor alignment, power supply upgrades, and recording backups.' },
      ],
      whatsappPrefill: 'Hi Soham, I need a consultation/quote for CCTV & Security Solutions.'
    },
    {
      id: 'trust-reliability',
      pillarTitle: 'Trust & Reliability',
      badge: 'STC Promise',
      icon: Award,
      color: 'blue',
      gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
      borderColor: 'border-blue-500/30 hover:border-blue-400',
      tagline: 'Committed to transparent pricing, prompt doorstep visits, and total peace of mind.',
      items: [
        { name: 'Quick Service Support', desc: 'Rapid response turnaround time for urgent repairs and diagnostics.' },
        { name: 'On-Time Support', desc: 'Punctual technician visits across Kolkata with prior time-slot confirmation.' },
        { name: 'Affordable Pricing', desc: 'Fair, upfront estimates with zero hidden fees or inflated hardware charges.' },
        { name: 'Customer Satisfaction', desc: 'Post-service warranty support and friendly tech advice directly from Soham.' },
      ],
      whatsappPrefill: 'Hi Soham, I would like to inquire about your services and pricing.'
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-[#070D18]">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Tech & Security Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-tech tracking-tight mb-4">
            OUR THREE CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">SERVICE PILLARS</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300">
            From custom PC assembling to high-end surveillance and chip-level laptop repairs, Soham Tech Care delivers trusted professional service.
          </p>
        </div>

        {/* 3 Interactive Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#09111E] border ${pillar.borderColor} p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 glow-card`}
              >
                {/* Background ambient corner tint */}
                <div className={`absolute top-0 right-0 w-44 h-44 rounded-full bg-gradient-to-br ${pillar.gradient} blur-2xl pointer-events-none transition-opacity group-hover:opacity-100 opacity-60`}></div>

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/80 transition-all shadow-lg">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-cyan-500/20">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-tech mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.pillarTitle}
                  </h3>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {pillar.tagline}
                  </p>

                  {/* Feature items checklist */}
                  <div className="space-y-3 mb-8">
                    {pillar.items.map((item, index) => (
                      <div
                        key={index}
                        className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex items-start gap-3 group/item"
                      >
                        <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 transition-colors">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-200 group-hover/item:text-white transition-colors">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => onSelectServiceForBooking(pillar.pillarTitle)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/916291944469?text=${encodeURIComponent(pillar.whatsappPrefill)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-semibold text-cyan-300 bg-slate-900 border border-cyan-500/30 hover:bg-cyan-950/40 hover:border-cyan-400 transition-colors"
                    title="Inquire via WhatsApp"
                  >
                    WhatsApp
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Diagnostic Banner Callout */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B1528] to-slate-900 border border-cyan-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-tech">
                Not sure what problem your PC, Laptop, or CCTV has?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Call Soham directly for a quick phone consultation or book a prompt doorstep diagnosis in Kolkata.
              </p>
            </div>
          </div>

          <a
            href="tel:+916291944469"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-300 transition-colors shrink-0"
          >
            <span>Call +91 6291944469</span>
          </a>
        </div>

      </div>
    </section>
  );
}
