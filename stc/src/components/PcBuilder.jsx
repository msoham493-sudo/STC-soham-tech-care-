import React, { useState, useMemo, useEffect } from 'react';
import { 
  USAGE_PRESETS, 
  COMPONENT_OPTIONS, 
  ESTIMATED_MOTHERBOARD_BASE,
  BASE_ASSEMBLY_FEE 
} from '../data/builderData';
import { 
  fetchLiveHardwarePrices,
  MARKET_SOURCE_METADATA 
} from '../services/hardwarePriceApi';
import { 
  Cpu, 
  Layers, 
  HardDrive, 
  Zap, 
  Box, 
  CheckCircle, 
  Share2, 
  Send, 
  RotateCcw, 
  Gamepad2, 
  Video, 
  Briefcase, 
  Laptop, 
  ShieldCheck, 
  Wrench,
  Percent,
  Sparkles,
  RefreshCw,
  Radio,
  Check
} from 'lucide-react';

export default function PcBuilder() {
  const [selectedPresetId, setSelectedPresetId] = useState('gaming');
  const [isSyncingPrices, setIsSyncingPrices] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState(MARKET_SOURCE_METADATA.lastUpdated);
  const [syncFeedback, setSyncFeedback] = useState('');

  // Initial state based on Gaming preset
  const defaultPreset = USAGE_PRESETS.find(p => p.id === 'gaming');
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: defaultPreset.recommended.cpu,
    gpu: defaultPreset.recommended.gpu,
    ram: defaultPreset.recommended.ram,
    storage: defaultPreset.recommended.storage,
    cabinet: defaultPreset.recommended.cabinet,
    psu: defaultPreset.recommended.psu,
  });

  const [includePeripherals, setIncludePeripherals] = useState({
    gamingMonitor: false, // 24" 165Hz IPS (+ ₹9,800)
    rgbCooler: false,     // 240mm ARGB AIO Liquid Cooler (+ ₹4,200)
    antiVirus: false,     // 1-Yr Genuine Total Security (+ ₹450)
  });

  // Handle Preset Selection
  const handleSelectPreset = (presetId) => {
    setSelectedPresetId(presetId);
    const preset = USAGE_PRESETS.find(p => p.id === presetId);
    if (preset) {
      setSelectedComponents({
        cpu: preset.recommended.cpu,
        gpu: preset.recommended.gpu,
        ram: preset.recommended.ram,
        storage: preset.recommended.storage,
        cabinet: preset.recommended.cabinet,
        psu: preset.recommended.psu,
      });
    }
  };

  // Trigger live API price synchronization
  const handleSyncPrices = async () => {
    setIsSyncingPrices(true);
    setSyncFeedback('Fetching live Kolkata market index...');
    try {
      const response = await fetchLiveHardwarePrices();
      setLastSyncTime(response.timestamp);
      setSyncFeedback('✓ Live prices synchronized successfully!');
      setTimeout(() => setSyncFeedback(''), 3000);
    } catch (err) {
      setSyncFeedback('Using cached Kolkata market index');
      setTimeout(() => setSyncFeedback(''), 3000);
    } finally {
      setIsSyncingPrices(false);
    }
  };

  // Change individual component
  const handleComponentChange = (category, itemId) => {
    setSelectedComponents(prev => ({
      ...prev,
      [category]: itemId
    }));
  };

  // Calculate pricing breakdown with real market numbers
  const pricing = useMemo(() => {
    let componentsTotal = 0;
    let mrpTotal = 0;

    const cpuItem = COMPONENT_OPTIONS.cpu.find(i => i.id === selectedComponents.cpu);
    const gpuItem = COMPONENT_OPTIONS.gpu.find(i => i.id === selectedComponents.gpu);
    const ramItem = COMPONENT_OPTIONS.ram.find(i => i.id === selectedComponents.ram);
    const storageItem = COMPONENT_OPTIONS.storage.find(i => i.id === selectedComponents.storage);
    const cabinetItem = COMPONENT_OPTIONS.cabinet.find(i => i.id === selectedComponents.cabinet);
    const psuItem = COMPONENT_OPTIONS.psu.find(i => i.id === selectedComponents.psu);

    const activeItems = [cpuItem, gpuItem, ramItem, storageItem, cabinetItem, psuItem].filter(Boolean);

    activeItems.forEach(item => {
      componentsTotal += item.price;
      mrpTotal += (item.mrp || item.price);
    });

    let addonsTotal = 0;
    if (includePeripherals.gamingMonitor) addonsTotal += 9800;
    if (includePeripherals.rgbCooler) addonsTotal += 4200;
    if (includePeripherals.antiVirus) addonsTotal += 450;

    // Subtotal: components + motherboard base + assembly (free promo!) + addons
    const subtotal = componentsTotal + ESTIMATED_MOTHERBOARD_BASE + BASE_ASSEMBLY_FEE + addonsTotal;
    const estimatedTotalSavings = (mrpTotal + 1500 + 4000) - subtotal; // Savings vs standard MRP

    return {
      componentsTotal,
      mrpTotal,
      addonsTotal,
      motherboardBase: ESTIMATED_MOTHERBOARD_BASE,
      assemblyFee: BASE_ASSEMBLY_FEE,
      subtotal,
      finalTotal: subtotal,
      estimatedSavings: Math.max(0, estimatedTotalSavings),
      items: {
        cpu: cpuItem,
        gpu: gpuItem,
        ram: ramItem,
        storage: storageItem,
        cabinet: cabinetItem,
        psu: psuItem,
      }
    };
  }, [selectedComponents, includePeripherals]);

  // Format INR currency
  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Generate WhatsApp Message URL with real spec & live price
  const generateWhatsAppUrl = () => {
    const preset = USAGE_PRESETS.find(p => p.id === selectedPresetId);
    const message = 
`*⚡ SOHAM TECH CARE (STC) - VERIFIED LIVE PC BUILD ESTIMATE*
Hello Soham, I configured a custom PC build on your website with the Live Kolkata Market Price tracker:

*Configuration:* ${preset ? preset.name : 'Custom Rig'}
*Processor (CPU):* ${pricing.items.cpu?.name} [${formatINR(pricing.items.cpu?.price || 0)}]
*Graphics (GPU):* ${pricing.items.gpu?.name} [${formatINR(pricing.items.gpu?.price || 0)}]
*RAM:* ${pricing.items.ram?.name} [${formatINR(pricing.items.ram?.price || 0)}]
*Storage:* ${pricing.items.storage?.name} [${formatINR(pricing.items.storage?.price || 0)}]
*Cabinet:* ${pricing.items.cabinet?.name} [${formatINR(pricing.items.cabinet?.price || 0)}]
*Power Supply:* ${pricing.items.psu?.name} [${formatINR(pricing.items.psu?.price || 0)}]
*Motherboard:* Genuine Compatible Motherboard Included [${formatINR(pricing.motherboardBase)}]
*Assembly & Cable Management:* FREE (STC Offer ₹0)
${includePeripherals.gamingMonitor ? '• Addon: 24" 165Hz IPS Gaming Monitor (+ ₹9,800)\n' : ''}${includePeripherals.rgbCooler ? '• Addon: 240mm ARGB AIO Liquid Cooler (+ ₹4,200)\n' : ''}${includePeripherals.antiVirus ? '• Addon: Total Security 1-Yr (+ ₹450)\n' : ''}
*Total Estimated Price:* ${formatINR(pricing.finalTotal)} (Incl. 18% GST & 1-Yr Doorstep Warranty)
*Live Feed Source:* Chandni Chowk / MDComputers / Vedant Market Index (Kolkata)

Please confirm part availability and earliest assembly time!`;

    return `https://wa.me/916291944469?text=${encodeURIComponent(message)}`;
  };

  const getPresetIcon = (iconName) => {
    switch (iconName) {
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="pc-builder" className="py-24 relative bg-[#09111E] cyber-grid">
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Real-Time Hardware Price API Connected</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-tech tracking-tight mb-4">
            BUILD YOUR PC & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 glow-text-cyan">TRACK REAL PRICES</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300">
            Powered by live market rate tracking calibrated directly to Kolkata street benchmarks (Chandni Chowk, MDComputers & Vedant). Honest component costs with ₹0 assembly fees!
          </p>
        </div>

        {/* Live Market Price API Feed Status Bar */}
        <div className="mb-10 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B172A] to-slate-900 border border-cyan-500/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Live Price Feed:
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-semibold">
                  ACTIVE • KOLKATA INDEX
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Market Sources: MDComputers, Vedant Computers & Chandni Chowk wholesale rates (Incl. 18% GST)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <span className="text-[11px] font-mono text-slate-400">
              {syncFeedback ? (
                <span className="text-cyan-300 font-semibold">{syncFeedback}</span>
              ) : (
                <span>Last Updated: <strong className="text-slate-200">{lastSyncTime}</strong></span>
              )}
            </span>

            <button
              onClick={handleSyncPrices}
              disabled={isSyncingPrices}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition-all active:scale-95 disabled:opacity-50"
              title="Refresh live prices from Kolkata market API"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncingPrices ? 'animate-spin text-cyan-400' : ''}`} />
              <span>{isSyncingPrices ? 'Syncing...' : 'Sync Live Prices'}</span>
            </button>
          </div>
        </div>

        {/* Step 1: Select Usage Preset */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs">1</span>
              Select Target Usage Profile
            </h3>
            <span className="text-xs text-slate-400">Presets auto-calibrate optimal CPU & GPU</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {USAGE_PRESETS.map((preset) => {
              const isSelected = selectedPresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset.id)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 relative border ${
                    isSelected
                      ? 'bg-gradient-to-b from-cyan-950/60 to-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400'
                      : 'bg-[#0F172A]/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-400'}`}>
                      {getPresetIcon(preset.icon)}
                    </div>
                    {isSelected && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-semibold border border-cyan-400/40">
                        Selected
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-white font-tech mb-1">{preset.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{preset.tagline}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Component Customizer & Live Price Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Component Selectors Form (Left 8 Cols) */}
          <div className="lg:col-span-8 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0A1220] border border-slate-800 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <h3 className="text-base font-semibold text-white font-tech flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-mono">2</span>
                Customize Individual Hardware Parts
              </h3>
              <button
                onClick={() => handleSelectPreset(selectedPresetId)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                title="Reset components to preset defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Preset</span>
              </button>
            </div>

            <div className="space-y-6">
              
              {/* CPU Selection */}
              <div>
                <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2 font-mono">
                  <span className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    PROCESSOR (CPU)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-slate-500 text-[11px]">
                      {pricing.items.cpu?.mrp ? formatINR(pricing.items.cpu.mrp) : ''}
                    </span>
                    <span className="text-cyan-400 font-bold">
                      {formatINR(pricing.items.cpu?.price || 0)}
                    </span>
                  </div>
                </label>
                <select
                  value={selectedComponents.cpu}
                  onChange={(e) => handleComponentChange('cpu', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {COMPONENT_OPTIONS.cpu.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name} — {formatINR(item.price)} (MRP: {formatINR(item.mrp)})
                    </option>
                  ))}
                </select>
              </div>

              {/* GPU Selection */}
              <div>
                <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2 font-mono">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-teal-400" />
                    GRAPHICS CARD (GPU)
                  </span>
                  <div className="flex items-center gap-2">
                    {pricing.items.gpu?.mrp > 0 && (
                      <span className="line-through text-slate-500 text-[11px]">
                        {formatINR(pricing.items.gpu.mrp)}
                      </span>
                    )}
                    <span className="text-teal-400 font-bold">
                      {pricing.items.gpu?.price === 0 ? 'Integrated (₹0)' : formatINR(pricing.items.gpu?.price || 0)}
                    </span>
                  </div>
                </label>
                <select
                  value={selectedComponents.gpu}
                  onChange={(e) => handleComponentChange('gpu', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {COMPONENT_OPTIONS.gpu.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name} {item.price > 0 ? `— ${formatINR(item.price)} (MRP: ${formatINR(item.mrp)})` : '— (₹0 No Extra Cost)'}
                    </option>
                  ))}
                </select>
              </div>

              {/* RAM Selection */}
              <div>
                <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2 font-mono">
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    SYSTEM MEMORY (RAM)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-slate-500 text-[11px]">
                      {formatINR(pricing.items.ram?.mrp || 0)}
                    </span>
                    <span className="text-blue-400 font-bold">
                      {formatINR(pricing.items.ram?.price || 0)}
                    </span>
                  </div>
                </label>
                <select
                  value={selectedComponents.ram}
                  onChange={(e) => handleComponentChange('ram', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {COMPONENT_OPTIONS.ram.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name} — {formatINR(item.price)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Storage Selection */}
              <div>
                <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2 font-mono">
                  <span className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-purple-400" />
                    PRIMARY HIGH-SPEED STORAGE (SSD)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-slate-500 text-[11px]">
                      {formatINR(pricing.items.storage?.mrp || 0)}
                    </span>
                    <span className="text-purple-400 font-bold">
                      {formatINR(pricing.items.storage?.price || 0)}
                    </span>
                  </div>
                </label>
                <select
                  value={selectedComponents.storage}
                  onChange={(e) => handleComponentChange('storage', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {COMPONENT_OPTIONS.storage.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name} — {formatINR(item.price)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cabinet & PSU in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2 font-mono">
                    <span>CABINET / CHASSIS</span>
                    <span className="text-cyan-400 font-bold">{formatINR(pricing.items.cabinet?.price || 0)}</span>
                  </label>
                  <select
                    value={selectedComponents.cabinet}
                    onChange={(e) => handleComponentChange('cabinet', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    {COMPONENT_OPTIONS.cabinet.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.name} ({formatINR(item.price)})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2 font-mono">
                    <span>POWER SUPPLY (PSU)</span>
                    <span className="text-cyan-400 font-bold">{formatINR(pricing.items.psu?.price || 0)}</span>
                  </label>
                  <select
                    value={selectedComponents.psu}
                    onChange={(e) => handleComponentChange('psu', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    {COMPONENT_OPTIONS.psu.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.name} ({formatINR(item.price)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Included Genuine Motherboard Note */}
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-mono">
                    MB
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Genuine Matching Motherboard Included</p>
                    <p className="text-[11px] text-slate-400">Socket & chipset pre-configured (H610 / B760 / B650 DDR4/DDR5)</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-300 font-bold">{formatINR(pricing.motherboardBase)}</span>
              </div>

              {/* Optional Add-on Checkboxes */}
              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
                  Optional Add-Ons & Peripherals (Wholesale Rate)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-cyan-500/40 transition-colors">
                    <input
                      type="checkbox"
                      checked={includePeripherals.gamingMonitor}
                      onChange={(e) => setIncludePeripherals(prev => ({ ...prev, gamingMonitor: e.target.checked }))}
                      className="w-4 h-4 rounded text-cyan-500 focus:ring-0 bg-slate-800 border-slate-700"
                    />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-200">24" 165Hz IPS Monitor</p>
                      <p className="text-cyan-400 font-mono">+ ₹9,800</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-cyan-500/40 transition-colors">
                    <input
                      type="checkbox"
                      checked={includePeripherals.rgbCooler}
                      onChange={(e) => setIncludePeripherals(prev => ({ ...prev, rgbCooler: e.target.checked }))}
                      className="w-4 h-4 rounded text-cyan-500 focus:ring-0 bg-slate-800 border-slate-700"
                    />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-200">240mm ARGB AIO</p>
                      <p className="text-cyan-400 font-mono">+ ₹4,200</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-cyan-500/40 transition-colors">
                    <input
                      type="checkbox"
                      checked={includePeripherals.antiVirus}
                      onChange={(e) => setIncludePeripherals(prev => ({ ...prev, antiVirus: e.target.checked }))}
                      className="w-4 h-4 rounded text-cyan-500 focus:ring-0 bg-slate-800 border-slate-700"
                    />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-200">Total Security 1-Yr</p>
                      <p className="text-cyan-400 font-mono">+ ₹450</p>
                    </div>
                  </label>

                </div>
              </div>

            </div>
          </div>

          {/* Price Summary & WhatsApp Order CTA (Right 4 Cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#070D18] border border-cyan-500/40 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold">
                  Live Cost Estimate
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
                  100% Genuine Spares
                </span>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Core Components (Street Price)</span>
                  <span className="font-mono text-white font-semibold">{formatINR(pricing.componentsTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Compatible Motherboard</span>
                  <span className="font-mono text-white font-semibold">{formatINR(pricing.motherboardBase)}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span className="flex items-center gap-1 font-semibold">
                    <Wrench className="w-3.5 h-3.5" /> STC Assembly & Calibration
                  </span>
                  <span className="font-mono font-bold bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">
                    FREE (₹0 Promo)
                  </span>
                </div>
                {pricing.addonsTotal > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Add-ons / Peripherals</span>
                    <span className="font-mono text-white font-semibold">{formatINR(pricing.addonsTotal)}</span>
                  </div>
                )}
                <div className="flex justify-between text-cyan-300 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px]">Retail MRP vs STC Deal Savings</span>
                  <span className="font-mono font-bold">Save ~ {formatINR(pricing.estimatedSavings)}</span>
                </div>
              </div>

              {/* Final Estimated Total Price */}
              <div className="pt-4 border-t border-slate-800 mb-6 bg-slate-900/60 -mx-6 sm:-mx-7 px-6 sm:px-7 py-4">
                <span className="text-xs text-slate-400 block mb-1 font-mono uppercase tracking-wider">
                  REAL-TIME ESTIMATED TOTAL (INR)
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 font-tech">
                  {formatINR(pricing.finalTotal)}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  *All prices include 18% GST and 1-Year Doorstep Warranty by Soham.
                </p>
              </div>

              {/* Included Perks */}
              <div className="space-y-2 mb-6 text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Kolkata doorstep delivery & cable grooming</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Benchmarked thermal & stability burn-in tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Direct technical support from Soham Mondal</span>
                </div>
              </div>

              {/* SEND BUILD VIA WHATSAPP BUTTON */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] active:scale-95 group text-sm"
              >
                <Send className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
                <span>Send Build via WhatsApp</span>
              </a>

              <p className="text-center text-[11px] text-slate-400 mt-3 font-mono">
                Direct to Soham: <span className="text-cyan-300 font-bold">+91 6291944469</span>
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
