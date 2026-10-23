import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Phone,
  HardDrive,
  Cpu
} from 'lucide-react';

export default function About() {
  const highlights = [
    { title: 'Verified Lead Technician', desc: 'Direct service overseen and executed by Soham Mondal with hands-on diagnostics.' },
    { title: '100% Genuine Components', desc: 'Sourced strictly through authorized national distributors with official brand warranties.' },
    { title: 'Doorstep Tech Support', desc: 'Fast, on-time home & office visits across Kolkata and surrounding regions.' },
    { title: 'Transparent Cost Estimates', desc: 'Zero hidden surprise charges; test, verify and approve pricing before repairs.' },
  ];

  const stats = [
    { value: '500+', label: 'Systems Built & Repaired' },
    { value: '100%', label: 'Genuine Brand Spares' },
    { value: '24-48h', label: 'Average Turnaround' },
    { value: '5-Star', label: 'Customer Trust Rating' },
  ];

  const coverageAreas = [
    'Salt Lake & Sector V',
    'New Town & Rajarhat',
    'South Kolkata (Ballygunge, Garia, Jadavpur)',
    'North Kolkata (Shyambazar, Dum Dum)',
    'Central Kolkata (Esplanade, Park Circus)',
    'Howrah & Greater Kolkata'
  ];

  return (
    <section id="about" className="py-24 relative bg-[#070D18]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile & Badges */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 opacity-30 blur-lg"></div>

              <div className="relative rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#09111E] border border-cyan-500/30 p-8 shadow-2xl overflow-hidden">
                
                {/* Tech Avatar Profile Card */}
                <div className="flex items-center gap-5 mb-6 pb-6 border-b border-slate-800">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-teal-400 p-0.5 shadow-lg">
                      <div className="w-full h-full bg-[#070D18] rounded-[14px] flex items-center justify-center text-cyan-300 font-tech text-3xl font-bold">
                        SM
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 text-slate-950 rounded-full ring-4 ring-[#0F172A]">
                      <ShieldCheck className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white font-tech">Soham Mondal</h3>
                    </div>
                    <p className="text-xs text-cyan-300 font-mono">Lead Hardware & Security Specialist</p>
                    <p className="text-xs text-slate-400 mt-1">Founder, Soham Tech Care (STC)</p>
                  </div>
                </div>

                {/* Mission Motto Box */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">Our Core Commitment</p>
                  <p className="text-sm font-semibold text-white italic">
                    "Fixing Today, Securing Tomorrow — We Take Care & Do Tech Care."
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Bridging elite gaming hardware engineering and cutting-edge CCTV security surveillance with personalized care for every customer.
                  </p>
                </div>

                {/* Service Area Highlights */}
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    Kolkata Doorstep Service Coverage
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coverageAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>About Soham Tech Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-tech tracking-tight mb-6">
              YOUR TRUSTED TECH PARTNER FOR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                COMPUTING & SECURITY
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Founded and driven by <span className="text-white font-semibold">Soham Mondal</span>, Soham Tech Care (STC) was born out of a simple conviction: technology users in Kolkata deserve honest diagnostics, skilled craftsmanship, and zero inflated pricing.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Whether you are an esports enthusiast building a ray-tracing beast, a content creator demanding render speeds, a student facing unexpected laptop failure, or a business requiring 24/7 CCTV surveillance, STC treats every system as its own.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-tech mb-0.5">{h.title}</h4>
                    <p className="text-xs text-slate-400">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Metrics Counter Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B1528] to-slate-900 border border-cyan-500/20">
              {stats.map((s, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 font-tech">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
