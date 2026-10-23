import { REAL_MARKET_PRICES } from '../services/hardwarePriceApi';

export const USAGE_PRESETS = [
  {
    id: 'gaming',
    name: 'Gaming Rig',
    icon: 'Gamepad2',
    tagline: 'High FPS & Ray Tracing ready (1080p / 1440p)',
    recommended: {
      cpu: 'r5-7600',
      gpu: 'rtx-4060',
      ram: '16gb-ddr5',
      storage: '1tb-nvme',
      cabinet: 'rgb-mesh',
      psu: '650w-bronze',
    }
  },
  {
    id: 'editing',
    name: 'Video & 3D Workstation',
    icon: 'Video',
    tagline: '4K Premiere, DaVinci & Blender rendering',
    recommended: {
      cpu: 'i7-14700',
      gpu: 'rtx-4070s',
      ram: '32gb-ddr5',
      storage: '2tb-nvme',
      cabinet: 'high-airflow',
      psu: '750w-gold',
    }
  },
  {
    id: 'office',
    name: 'Office & Business',
    icon: 'Briefcase',
    tagline: 'Multitasking, quiet & low power consumption',
    recommended: {
      cpu: 'i5-12400f',
      gpu: 'gtx-1650',
      ram: '16gb-ddr4',
      storage: '512gb-nvme',
      cabinet: 'sleek-stealth',
      psu: '450w-standard',
    }
  },
  {
    id: 'general',
    name: 'Everyday / Student',
    icon: 'Laptop',
    tagline: 'Smooth study, browsing & casual multimedia',
    recommended: {
      cpu: 'i3-12100',
      gpu: 'integrated',
      ram: '8gb-ddr4',
      storage: '512gb-nvme',
      cabinet: 'compact-mid',
      psu: '450w-standard',
    }
  }
];

export const COMPONENT_OPTIONS = {
  cpu: Object.entries(REAL_MARKET_PRICES.cpu).map(([id, val]) => ({
    id,
    name: val.name,
    price: val.price,
    mrp: val.mrp,
    stock: val.stock
  })),
  gpu: Object.entries(REAL_MARKET_PRICES.gpu).map(([id, val]) => ({
    id,
    name: val.name,
    price: val.price,
    mrp: val.mrp,
    stock: val.stock
  })),
  ram: Object.entries(REAL_MARKET_PRICES.ram).map(([id, val]) => ({
    id,
    name: val.name,
    price: val.price,
    mrp: val.mrp,
    stock: val.stock
  })),
  storage: Object.entries(REAL_MARKET_PRICES.storage).map(([id, val]) => ({
    id,
    name: val.name,
    price: val.price,
    mrp: val.mrp,
    stock: val.stock
  })),
  cabinet: Object.entries(REAL_MARKET_PRICES.cabinet).map(([id, val]) => ({
    id,
    name: val.name,
    price: val.price,
    mrp: val.mrp,
    stock: val.stock
  })),
  psu: Object.entries(REAL_MARKET_PRICES.psu).map(([id, val]) => ({
    id,
    name: val.name,
    price: val.price,
    mrp: val.mrp,
    stock: val.stock
  }))
};

// Compatible Motherboard base (H610 / B760 / B650 according to build level)
export const ESTIMATED_MOTHERBOARD_BASE = 5900;

// Transparent Assembly & Calibration (Promotional: Free / Waived by Soham Tech Care!)
export const BASE_ASSEMBLY_FEE = 0;
