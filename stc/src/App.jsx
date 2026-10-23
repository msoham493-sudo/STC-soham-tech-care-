import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PcBuilder from './components/PcBuilder';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceName) => {
    setSelectedService(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />
        <PcBuilder />
        <About />
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Support */}
      <FloatingWhatsApp />

    </div>
  );
}
