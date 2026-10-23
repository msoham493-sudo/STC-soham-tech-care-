import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Wrench,
  Sparkles,
  ShieldAlert
} from 'lucide-react';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: preselectedService || 'Computer / PC Repair & Diagnostics',
    deviceDetails: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Computer / PC Repair & Diagnostics',
    'Custom PC Building & Consultation',
    'Laptop Screen / Battery / Keyboard Repair',
    'CCTV Security Camera Installation',
    'Windows OS & Software Optimization',
    'Networking & Wi-Fi Setup',
    'Annual Maintenance / Other Query',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number so we can reach you.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  // Pre-fill WhatsApp message from contact form
  const handleSendToWhatsApp = () => {
    const text = 
`*⚡ NEW SERVICE BOOKING REQUEST - SOHAM TECH CARE*
*Name:* ${formData.name || 'Customer'}
*Phone:* ${formData.phone || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Service Required:* ${formData.serviceType}
*Device / Specs:* ${formData.deviceDetails || 'Standard'}
*Problem / Details:* ${formData.notes || 'Need technician consultation'}
*City:* Kolkata, West Bengal`;

    window.open(`https://wa.me/916291944469?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#09111E] cyber-grid">
      {/* Background radial blurs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Technician Access</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-tech tracking-tight mb-4">
            REQUEST A QUOTE OR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 glow-text-cyan">BOOK A TECHNICIAN</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300">
            Have an urgent computer emergency, building a new rig, or securing your premises? Get in touch directly with Soham Mondal today.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <a
              href="tel:+916291944469"
              className="group block p-6 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0A1220] border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shrink-0 shadow-lg">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs uppercase font-mono tracking-wider text-slate-400">Direct Phone / Urgent Call</p>
                  <p className="text-xl font-bold text-white font-tech group-hover:text-cyan-300 transition-colors mt-0.5">
                    +91 6291944469
                  </p>
                  <p className="text-xs text-cyan-400/80 mt-1">Tap to call directly • Quick response</p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:msoham493@gmail.com"
              className="group block p-6 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0A1220] border border-slate-800 hover:border-teal-400 transition-all shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors shrink-0 shadow-lg">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs uppercase font-mono tracking-wider text-slate-400">Email Address</p>
                  <p className="text-base sm:text-lg font-bold text-white font-tech group-hover:text-teal-300 transition-colors mt-0.5 break-all">
                    msoham493@gmail.com
                  </p>
                  <p className="text-xs text-teal-400/80 mt-1">Official quotations & business inquiries</p>
                </div>
              </div>
            </a>

            {/* Location & Service Area */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0A1220] border border-slate-800 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs uppercase font-mono tracking-wider text-slate-400">Operational Hub</p>
                  <p className="text-lg font-bold text-white font-tech mt-0.5">
                    Kolkata, West Bengal
                  </p>
                  <p className="text-xs text-blue-300/80 mt-0.5">Doorstep pickup & on-site visits</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Working Hours: Mon – Sun: 9:00 AM – 9:30 PM (IST)</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Instant WhatsApp Chat
                </span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Send photos or videos of your PC error, laptop damage, or site blueprint directly to Soham on WhatsApp for an instant appraisal.
              </p>
              <a
                href="https://wa.me/916291944469?text=Hi%20Soham,%20I%20have%20an%20inquiry%20regarding%20Soham%20Tech%20Care%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat On WhatsApp Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#070D18] border border-cyan-500/30 p-7 sm:p-9 shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white font-tech">
                  Technician Booking & Quote Form
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Fill in your details — Soham will contact you within 30 minutes.
                </p>
              </div>
              <Wrench className="w-6 h-6 text-cyan-400 shrink-0" />
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-2xl font-bold text-white font-tech">
                  Booking Request Received!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Soham Mondal will review your details and reach out to you at <span className="text-cyan-300 font-semibold">{formData.phone}</span> shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Copy to WhatsApp for Faster Reply</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        serviceType: 'Computer / PC Repair & Diagnostics',
                        deviceDetails: '',
                        notes: '',
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline py-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {serviceOptions.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Device Details */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Device Brand / Model / Spec
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dell Inspiron 15, Custom Ryzen PC, or 4-Channel CP PLUS CCTV"
                    value={formData.deviceDetails}
                    onChange={(e) => setFormData({ ...formData, deviceDetails: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Problem Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Problem Details or Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe what's wrong (e.g., PC not turning on, screen flickering, need 4 cameras installed with mobile view, etc.)"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-95 transition-all text-sm uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Booking Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-emerald-300 bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/50 transition-all text-sm"
                    title="Send via WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>

                <p className="text-center text-[11px] text-slate-500">
                  🔒 We respect your privacy. Your contact details are strictly used to schedule your service.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
