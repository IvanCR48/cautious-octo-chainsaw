/**
 * COMPUTER HOUSE — DEMO LIGHT (ZERO-SQL / ZERO-BACKEND ENGINE)
 * Fully functional standalone vanilla JS engine with LocalStorage persistence.
 * English Edition.
 */

// --- 1. Initial Database Seed Data ---
const DEFAULT_CONFIG = {
  store_name: 'COMPUTER HOUSE',
  primary_color: '#FF3E00',
  secondary_color: '#2563EB',
  header_bg: '#000000',
  announcement_text: '🚀 FREE NATIONWIDE SHIPPING ON ORDERS OVER $300 • 3 & 6 INTEREST-FREE INSTALLMENTS • 15% OFF VIA BANK TRANSFER',
  whatsapp_number: '+1 (800) 555-0199',
  transfer_discount: 15,
  max_installments: 12
};

const DEFAULT_PRODUCTS = [
  {
    id: 'cpu-r7-7800x3d',
    name: 'AMD Ryzen 7 7800X3D (8C/16T, 5.0GHz, 96MB 3D V-Cache)',
    category: 'cpu',
    brand: 'AMD',
    socket: 'AM5',
    wattage: 120,
    price_usd: 449,
    price_pen: 1710,
    badge: 'TOP GAMING CPU',
    image: '../img/cpu/amd/AMD Ryzen 7 7800X3D.jpg'
  },
  {
    id: 'cpu-i7-14700k',
    name: 'Intel Core i7-14700K Raptor Lake Refresh (20 Cores)',
    category: 'cpu',
    brand: 'Intel',
    socket: 'LGA1700',
    wattage: 253,
    price_usd: 419,
    price_pen: 1590,
    badge: '20 CORES',
    image: '../img/cpu/intel/Intel Core i7-14700K.jpg'
  },
  {
    id: 'gpu-rtx-4080-super',
    name: 'ASUS ROG Strix GeForce RTX 4080 Super 16GB GDDR6X',
    category: 'gpu',
    brand: 'NVIDIA',
    socket: 'PCIe 4.0',
    wattage: 320,
    price_usd: 1199,
    price_pen: 4560,
    badge: '4K RAY TRACING',
    image: '../img/gpu/nvidia/ASUS ROG Strix GeForce RTX 4080 Super 16GB.jpg'
  },
  {
    id: 'gpu-rx-7800xt',
    name: 'Sapphire PULSE AMD Radeon RX 7800 XT 16GB GDDR6',
    category: 'gpu',
    brand: 'AMD',
    socket: 'PCIe 4.0',
    wattage: 263,
    price_usd: 549,
    price_pen: 2090,
    badge: '1440P ULTRA',
    image: '../img/gpu/amd/Sapphire PULSE AMD Radeon RX 7800 XT 16GB.png'
  },
  {
    id: 'mb-asus-b650',
    name: 'ASUS ROG Strix B650E-F Gaming WiFi Socket AM5',
    category: 'motherboard',
    brand: 'ASUS',
    socket: 'AM5',
    wattage: 45,
    price_usd: 289,
    price_pen: 1100,
    badge: 'DDR5 + PCIE 5.0',
    image: '../img/motherboard/amd/ASUS ROG Strix B650E-F Gaming WiFi.jpg'
  },
  {
    id: 'mb-msi-z790',
    name: 'MSI MPG Z790 Carbon WiFi Socket LGA1700',
    category: 'motherboard',
    brand: 'MSI',
    socket: 'LGA1700',
    wattage: 50,
    price_usd: 349,
    price_pen: 1330,
    badge: 'INTEL 14TH READY',
    image: '../img/motherboard/intel/MSI MPG Z790 Carbon WiFi.jpg'
  },
  {
    id: 'ram-corsair-32gb',
    name: 'Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz CL30',
    category: 'ram',
    brand: 'Corsair',
    socket: 'DDR5',
    wattage: 15,
    price_usd: 129,
    price_pen: 490,
    badge: 'DDR5 6000MHZ',
    image: '../img/ram/Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz.jpg'
  },
  {
    id: 'ssd-samsung-990-2tb',
    name: 'Samsung 990 PRO 2TB NVMe M.2 Gen4 PCIe 4.0 7450MB/s',
    category: 'storage',
    brand: 'Samsung',
    socket: 'M.2',
    wattage: 10,
    price_usd: 179,
    price_pen: 680,
    badge: '7450 MB/S',
    image: '../img/ssd/Samsung 990 PRO 2TB NVMe M.2 SSD.jpg'
  },
  {
    id: 'cooler-nzxt-kraken-360',
    name: 'NZXT Kraken Elite 360 RGB Liquid Cooler with LCD Display',
    category: 'cooler',
    brand: 'NZXT',
    socket: 'Universal',
    wattage: 25,
    price_usd: 279,
    price_pen: 1060,
    badge: 'LCD DISPLAY',
    image: '../img/cooler/NZXT Kraken Elite 360 RGB.jpg'
  },
  {
    id: 'case-nzxt-h5-flow',
    name: 'NZXT H5 Flow RGB Mesh Mid-Tower ATX Tempered Glass',
    category: 'case',
    brand: 'NZXT',
    socket: 'ATX',
    wattage: 0,
    price_usd: 109,
    price_pen: 415,
    badge: 'HIGH AIRFLOW',
    image: '../img/cabinet/NZXT H5 Flow RGB Mesh Mid-Tower ATX.jpg'
  },
  {
    id: 'psu-corsair-rm850x',
    name: 'Corsair RM850x 850W 80 Plus Gold Fully Modular ATX 3.0',
    category: 'psu',
    brand: 'Corsair',
    socket: 'ATX',
    wattage: 850,
    price_usd: 149,
    price_pen: 565,
    badge: '80+ GOLD',
    image: '../img/power/Corsair RM850x 850W 80 Plus Gold Modular.jpg'
  },
  {
    id: 'laptop-asus-tuf-a15',
    name: 'ASUS TUF Gaming A15 Laptop (Ryzen 7 7735HS, RTX 4060, 16GB, 512GB)',
    category: 'notebooks',
    brand: 'ASUS',
    price_usd: 999,
    price_pen: 3800,
    badge: '144HZ IPS',
    image: '../img/hero-grid/Notebook/Example.jpg'
  }
];

const DEFAULT_PREBUILTS = [
  {
    id: 'prebuilt-titan',
    name: 'TITAN RYZEN 7 7800X3D + RTX 4080 SUPER',
    price_usd: 1899,
    badge: 'BUILD OF THE WEEK',
    image: '../img/gpu/nvidia/ASUS ROG Strix GeForce RTX 4080 Super 16GB.jpg',
    specs: 'AMD Ryzen 7 7800X3D • RTX 4080 Super 16GB • 32GB DDR5 • 2TB NVMe Gen4'
  },
  {
    id: 'prebuilt-flow',
    name: 'FLOW GAMER RYZEN 5 + GTX 1660 TI',
    price_usd: 1030,
    badge: 'POPULAR',
    image: '../img/cabinet/NZXT H5 Flow RGB Mesh Mid-Tower ATX.jpg',
    specs: 'AMD Ryzen 5 5600X • GTX 1660 Ti 6GB • 16GB DDR4 • 512GB SSD'
  },
  {
    id: 'prebuilt-peak',
    name: 'PEAK INTEL CORE I5 + RTX 4060',
    price_usd: 1190,
    badge: 'BEST VALUE',
    image: '../img/cabinet/Corsair 4000D Airflow Tempered Glass ATX.jpg',
    specs: 'Intel Core i5-13400F • RTX 4060 8GB DLSS 3 • 16GB DDR5 • 1TB M.2'
  }
];

const DEFAULT_TICKETS = [
  {
    code: 'CH-8492',
    customer: 'Daniel R.',
    device: 'PC Custom Gaming (i7-13700K / RTX 3080)',
    issue: 'Preventative Maintenance, Thermal Grizzly Paste Renewal & Cable Management',
    stage: 4, // 1: Intake, 2: Tech Diagnostics, 3: Cleaning & Repair, 4: Stress Testing, 5: Ready for Pickup
    date: 'Aug 04 - 10:30 AM',
    notes: 'Max temperatures reduced by 14°C in FurMark stress testing. 24h stability verification in progress.'
  },
  {
    code: 'CH-9104',
    customer: 'Sophia M.',
    device: 'ASUS TUF Gaming A15 Laptop',
    issue: 'Display ribbon cable disconnected after accidental drop. Blank screen.',
    stage: 2,
    date: 'Aug 18 - 04:45 PM',
    notes: 'Tested GPU output with external HDMI screen OK. Proceeding to display cable replacement.'
  }
];

// --- 2. Application State ---
class AppState {
  constructor() {
    this.config = this.loadLocal('ch_light_config_en', DEFAULT_CONFIG);
    this.products = this.loadLocal('ch_light_products_en', DEFAULT_PRODUCTS);
    this.prebuilts = this.loadLocal('ch_light_prebuilts_en', DEFAULT_PREBUILTS);
    this.tickets = this.loadLocal('ch_light_tickets_en', DEFAULT_TICKETS);
    this.cart = this.loadLocal('ch_light_cart_en', []);
    this.activeView = 'home';
    this.currency = 'USD';
    this.appliedCoupon = null;
    this.builderState = {
      cpu: null,
      motherboard: null,
      ram: null,
      gpu: null,
      storage: null,
      case: null,
      psu: null,
      cooler: null
    };
    this.activeBuilderStep = 'cpu';
  }

  loadLocal(key, defaultVal) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultVal;
    } catch (e) {
      return defaultVal;
    }
  }

  saveLocal(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  saveConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.saveLocal('ch_light_config_en', this.config);
    this.applyThemeVars();
  }

  applyThemeVars() {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', this.config.primary_color || '#FF3E00');
    root.style.setProperty('--primary-hover', this.config.primary_hover || '#E03700');
    root.style.setProperty('--secondary-color', this.config.secondary_color || '#2563EB');
    root.style.setProperty('--header-bg', this.config.header_bg || '#000000');
  }
}

const state = new AppState();

// --- 3. Currency & Formatting Helpers ---
const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1 },
  PEN: { symbol: 'S/', rate: 3.8 },
  EUR: { symbol: '€', rate: 0.92 },
  ARS: { symbol: '$', rate: 1250 }
};

function formatMoney(amountUSD) {
  const c = CURRENCY_RATES[state.currency] || CURRENCY_RATES.USD;
  const converted = amountUSD * c.rate;
  return `${c.symbol} ${converted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// --- 4. Navigation & Views Router ---
function navigateTo(view, categoryKey = 'all') {
  state.activeView = view;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hide all sections
  document.getElementById('view-home').style.display = view === 'home' ? 'block' : 'none';
  document.getElementById('view-catalog').style.display = view === 'catalog' ? 'block' : 'none';
  document.getElementById('view-builder').style.display = view === 'builder' ? 'block' : 'none';
  document.getElementById('view-prebuilts').style.display = view === 'prebuilts' ? 'block' : 'none';
  document.getElementById('view-services').style.display = view === 'services' ? 'block' : 'none';

  if (view === 'catalog') {
    renderCatalog(categoryKey);
  } else if (view === 'builder') {
    renderPCBuilder();
  } else if (view === 'prebuilts') {
    renderPrebuiltsView();
  } else if (view === 'services') {
    renderRepairTracker();
  }
}

// --- 5. Render Functions ---

// A. Home View
function renderHome() {
  // 1. Bento Featured Rig
  const bentoContainer = document.getElementById('bento-featured-item');
  const titan = state.prebuilts[0];
  if (bentoContainer && titan) {
    bentoContainer.innerHTML = `
      <div style="flex: 1;">
        <span class="category-tile-badge">${titan.badge}</span>
        <h3 style="font-size: 20px; font-weight: 800; margin: 8px 0;">${titan.name}</h3>
        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;">${titan.specs}</p>
        <div class="product-price" style="margin-bottom: 14px;">${formatMoney(titan.price_usd)}</div>
        <button class="btn-primary" onclick="addToCart({ name: '${titan.name}', price: ${titan.price_usd}, image: '${titan.image}' })">
          🛒 Buy Gaming PC
        </button>
      </div>
      <img src="${titan.image}" alt="${titan.name}" style="width: 180px; height: 180px; object-fit: contain;">
    `;
  }

  // 2. Home Prebuilts
  const homePrebuiltsGrid = document.getElementById('home-prebuilts-grid');
  if (homePrebuiltsGrid) {
    homePrebuiltsGrid.innerHTML = state.prebuilts.map(pb => `
      <div class="product-card">
        <span class="product-badge">${pb.badge}</span>
        <div class="product-img-wrapper">
          <img src="${pb.image}" class="product-img" alt="${pb.name}">
        </div>
        <div>
          <h4 class="product-title">${pb.name}</h4>
          <p style="font-size: 11px; color: var(--text-secondary); margin-bottom: 8px;">${pb.specs}</p>
          <div class="product-price">${formatMoney(pb.price_usd)}</div>
          <div class="product-installments">💳 12 monthly installments of ${formatMoney(pb.price_usd / 12)}</div>
        </div>
        <button class="btn-primary" style="width: 100%; margin-top: 14px;" onclick="addToCart({ name: '${pb.name}', price: ${pb.price_usd}, image: '${pb.image}' })">
          Add to Cart
        </button>
      </div>
    `).join('');
  }
}

// B. Catalog View
function renderCatalog(selectedCat = 'all') {
  const container = document.getElementById('catalog-products-grid');
  const catTitle = document.getElementById('catalog-current-category-title');
  if (!container) return;

  const filtered = selectedCat === 'all'
    ? state.products
    : state.products.filter(p => p.category === selectedCat);

  if (catTitle) {
    catTitle.innerText = selectedCat === 'all' ? 'All Hardware Components' : `Category: ${selectedCat.toUpperCase()}`;
  }

  container.innerHTML = filtered.map(p => `
    <div class="product-card">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <div class="product-img-wrapper">
        <img src="${p.image}" class="product-img" alt="${p.name}">
      </div>
      <div>
        <span style="font-size: 11px; font-weight: 700; color: var(--secondary-color);">${p.brand || ''} ${p.socket ? `• ${p.socket}` : ''}</span>
        <h4 class="product-title">${p.name}</h4>
        <div class="product-price">${formatMoney(p.price_usd)}</div>
        <div class="product-installments">💳 12 monthly installments of ${formatMoney(p.price_usd / 12)}</div>
      </div>
      <div style="display: flex; gap: 8px; margin-top: 14px;">
        <button class="btn-primary" style="flex: 1;" onclick="addToCart({ name: '${p.name}', price: ${p.price_usd}, image: '${p.image}' })">
          🛒 Buy Now
        </button>
      </div>
    </div>
  `).join('');
}

// C. Prebuilts View
function renderPrebuiltsView() {
  const container = document.getElementById('prebuilts-view-grid');
  if (!container) return;
  container.innerHTML = state.prebuilts.map(pb => `
    <div class="product-card">
      <span class="product-badge">${pb.badge}</span>
      <div class="product-img-wrapper">
        <img src="${pb.image}" class="product-img" alt="${pb.name}">
      </div>
      <div>
        <h4 class="product-title">${pb.name}</h4>
        <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">${pb.specs}</p>
        <div class="product-price">${formatMoney(pb.price_usd)}</div>
        <div class="product-installments">💳 12 monthly installments of ${formatMoney(pb.price_usd / 12)}</div>
      </div>
      <button class="btn-primary" style="width: 100%; margin-top: 14px;" onclick="addToCart({ name: '${pb.name}', price: ${pb.price_usd}, image: '${pb.image}' })">
        Add to Cart
      </button>
    </div>
  `).join('');
}

// D. PC Builder View (Socket Validation & Thermal Wattage Engine)
const BUILDER_STEPS = [
  { key: 'cpu', label: '1. Processor (CPU)' },
  { key: 'motherboard', label: '2. Motherboard' },
  { key: 'ram', label: '3. RAM Memory' },
  { key: 'gpu', label: '4. Graphics Card (GPU)' },
  { key: 'storage', label: '5. Storage (SSD)' },
  { key: 'cooler', label: '6. CPU Liquid Cooler' },
  { key: 'case', label: '7. PC Case' },
  { key: 'psu', label: '8. Power Supply (PSU)' }
];

function selectBuilderStep(stepKey) {
  state.activeBuilderStep = stepKey;
  renderPCBuilder();
}

function selectBuilderComponent(stepKey, product) {
  state.builderState[stepKey] = product;
  
  // If CPU changed and Motherboard is incompatible, reset motherboard
  if (stepKey === 'cpu' && state.builderState.motherboard) {
    if (state.builderState.motherboard.socket !== product.socket) {
      state.builderState.motherboard = null;
      alert(`⚠️ CPU Socket changed to ${product.socket}. Motherboard selection was reset to guarantee 100% hardware compatibility.`);
    }
  }

  // Move to next step automatically
  const currentIndex = BUILDER_STEPS.findIndex(s => s.key === stepKey);
  if (currentIndex < BUILDER_STEPS.length - 1) {
    state.activeBuilderStep = BUILDER_STEPS[currentIndex + 1].key;
  }
  renderPCBuilder();
}

function renderPCBuilder() {
  const stepper = document.getElementById('builder-stepper');
  const itemsContainer = document.getElementById('builder-items-list');
  const summaryContainer = document.getElementById('builder-summary-card');

  // 1. Render Stepper
  if (stepper) {
    stepper.innerHTML = BUILDER_STEPS.map(s => {
      const isSelected = !!state.builderState[s.key];
      const isActive = state.activeBuilderStep === s.key;
      return `
        <button class="step-tab ${isActive ? 'active' : ''} ${isSelected ? 'completed' : ''}" onclick="selectBuilderStep('${s.key}')">
          ${isSelected ? '✓ ' : ''}${s.label}
        </button>
      `;
    }).join('');
  }

  // 2. Filter available components based on selected CPU socket
  let availableProducts = state.products.filter(p => p.category === state.activeBuilderStep);
  if (state.activeBuilderStep === 'motherboard' && state.builderState.cpu) {
    availableProducts = availableProducts.filter(p => p.socket === state.builderState.cpu.socket);
  }

  if (itemsContainer) {
    if (availableProducts.length === 0) {
      itemsContainer.innerHTML = `
        <div style="padding: 40px; text-align: center; color: var(--text-secondary); background: var(--bg-surface); border-radius: 12px; border: 1px solid var(--border-color);">
          <p style="font-size: 16px; font-weight: 700;">No compatible components available for socket ${state.builderState.cpu?.socket || ''}</p>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = availableProducts.map(p => {
        const isCurrentSelected = state.builderState[state.activeBuilderStep]?.id === p.id;
        return `
          <div class="card" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 12px; ${isCurrentSelected ? 'border-color: var(--primary-color); background: rgba(255, 62, 0, 0.04);' : ''}">
            <div style="display: flex; align-items: center; gap: 16px;">
              <img src="${p.image}" style="width: 60px; height: 60px; object-fit: contain;">
              <div>
                <span style="font-size: 11px; font-weight: 700; color: var(--secondary-color);">${p.brand} • ${p.socket || ''} • Power Draw: ${p.wattage}W</span>
                <h4 style="font-size: 14px; font-weight: 700; color: var(--text-primary); margin: 2px 0;">${p.name}</h4>
                <div class="product-price" style="font-size: 16px;">${formatMoney(p.price_usd)}</div>
              </div>
            </div>
            <button class="${isCurrentSelected ? 'btn-secondary' : 'btn-primary'}" onclick='selectBuilderComponent("${state.activeBuilderStep}", ${JSON.stringify(p)})'>
              ${isCurrentSelected ? '✓ Selected' : 'Choose'}
            </button>
          </div>
        `;
      }).join('');
    }
  }

  // 3. Render Summary & Wattage Check
  let totalBuildUSD = 0;
  let totalWattage = 50; // base system wattage
  Object.values(state.builderState).forEach(item => {
    if (item) {
      totalBuildUSD += item.price_usd;
      totalWattage += (item.wattage || 0);
    }
  });

  const recommendedPSU = Math.ceil((totalWattage * 1.3) / 50) * 50;

  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 16px; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
        BUILD SUMMARY
      </h3>
      
      <div style="background: var(--bg-base); padding: 12px; border-radius: 8px; margin-bottom: 16px; border: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
          <span>Estimated Power Draw:</span>
          <strong>${totalWattage} W</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--accent-green);">
          <span>Recommended PSU:</span>
          <strong>${recommendedPSU} W or higher</strong>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px; margin-bottom: 16px;">
        ${BUILDER_STEPS.map(s => {
          const item = state.builderState[s.key];
          return `
            <div style="display: flex; justify-content: space-between; color: ${item ? 'var(--text-primary)' : 'var(--text-muted)'};">
              <span style="max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${s.label.split('.')[1]}: ${item ? item.name : 'Not selected'}</span>
              <span>${item ? formatMoney(item.price_usd) : '-'}</span>
            </div>
          `;
        }).join('')}
      </div>

      <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: 800;">
          <span>Total:</span>
          <span class="product-price">${formatMoney(totalBuildUSD)}</span>
        </div>
      </div>

      <button class="btn-primary" style="width: 100%;" onclick="addCustomPCToCart(${totalBuildUSD})">
        🛒 Buy Complete Custom PC
      </button>
    `;
  }
}

function addCustomPCToCart(totalUSD) {
  if (totalUSD === 0) {
    alert('Please select at least the processor (CPU) to build your custom PC.');
    return;
  }
  const customPC = {
    name: 'Custom PC Rig (' + (state.builderState.cpu?.name || 'Custom Build') + ')',
    price: totalUSD,
    image: '../img/cabinet/NZXT H5 Flow RGB Mesh Mid-Tower ATX.jpg'
  };
  addToCart(customPC);
}

// E. Repair & RMA Tracker View
function renderRepairTracker() {
  const searchInput = document.getElementById('rma-search-input');
  const query = (searchInput?.value || 'CH-8492').trim().toUpperCase();
  const ticket = state.tickets.find(t => t.code.toUpperCase() === query) || state.tickets[0];
  const resultCard = document.getElementById('rma-ticket-details');

  if (resultCard && ticket) {
    const stages = [
      '1. Intake',
      '2. Tech Diagnostics',
      '3. Cleaning & Repair',
      '4. Stress Testing',
      '5. Ready for Pickup'
    ];

    resultCard.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <span class="category-tile-badge">ACTIVE REPAIR ORDER</span>
          <h3 style="font-size: 20px; font-weight: 800; margin-top: 4px;">Ticket #${ticket.code} — ${ticket.device}</h3>
          <p style="font-size: 13px; color: var(--text-secondary);">Customer: ${ticket.customer} • Intake: ${ticket.date}</p>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 12px; font-weight: 700; color: var(--accent-green);">● LIVE WORKSHOP STATUS</span>
        </div>
      </div>

      <!-- Stage Progress Stepper -->
      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin: 20px 0;">
        ${stages.map((stg, idx) => {
          const isDone = (idx + 1) <= ticket.stage;
          const isCurrent = (idx + 1) === ticket.stage;
          return `
            <div style="background: ${isDone ? 'var(--primary-color)' : 'var(--bg-base)'}; color: ${isDone ? '#FFFFFF' : 'var(--text-muted)'}; padding: 10px 8px; border-radius: 8px; text-align: center; font-size: 11px; font-weight: 700; border: 1px solid var(--border-color);">
              ${isDone ? '✓ ' : ''}${stg}
            </div>
          `;
        }).join('')}
      </div>

      <div style="background: var(--bg-base); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
        <h4 style="font-size: 13px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">Reported Issue / Fault:</h4>
        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 10px;">${ticket.issue}</p>
        <h4 style="font-size: 13px; font-weight: 700; color: var(--primary-color); margin-bottom: 4px;">Lab Specialist Note:</h4>
        <p style="font-size: 13px; color: var(--text-primary); font-family: var(--font-mono);">${ticket.notes}</p>
      </div>
    `;
  }
}

// --- 6. Shopping Cart & Checkout ---
function addToCart(item) {
  state.cart.push(item);
  state.saveLocal('ch_light_cart_en', state.cart);
  updateCartBadge();
  openCartDrawer();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  state.saveLocal('ch_light_cart_en', state.cart);
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const badge = document.getElementById('header-cart-count');
  if (badge) badge.innerText = state.cart.length;
}

function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  renderCartDrawer();
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
}

function applyCouponCode() {
  const code = document.getElementById('coupon-input')?.value.trim().toUpperCase();
  if (code === 'GAMER10') {
    state.appliedCoupon = { code: 'GAMER10', discount: 10, type: 'percent' };
    alert('🎉 Promo coupon GAMER10 applied! 10% discount.');
  } else if (code === 'WELCOME50') {
    state.appliedCoupon = { code: 'WELCOME50', discount: 50, type: 'fixed' };
    alert('🎉 Promo coupon WELCOME50 applied! $50 USD discount.');
  } else {
    alert('❌ Invalid coupon code. Try GAMER10 or WELCOME50.');
  }
  renderCartDrawer();
}

function renderCartDrawer() {
  const list = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const discountEl = document.getElementById('cart-discount-val');
  const totalEl = document.getElementById('cart-total-val');

  if (!list) return;

  if (state.cart.length === 0) {
    list.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 40px;">Your shopping cart is empty.</p>`;
    if (subtotalEl) subtotalEl.innerText = formatMoney(0);
    if (discountEl) discountEl.innerText = formatMoney(0);
    if (totalEl) totalEl.innerText = formatMoney(0);
    return;
  }

  let subtotal = 0;
  list.innerHTML = state.cart.map((item, idx) => {
    subtotal += item.price;
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${item.image}" style="width: 40px; height: 40px; object-fit: contain;">
          <div>
            <div style="font-weight: 700; font-size: 12px; max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.name}</div>
            <div style="font-size: 12px; font-weight: 800; color: var(--primary-color);">${formatMoney(item.price)}</div>
          </div>
        </div>
        <button style="background: none; border: none; color: var(--accent-red); cursor: pointer; font-size: 14px;" onclick="removeFromCart(${idx})">✕</button>
      </div>
    `;
  }).join('');

  let discount = 0;
  if (state.appliedCoupon) {
    if (state.appliedCoupon.type === 'percent') {
      discount = subtotal * (state.appliedCoupon.discount / 100);
    } else {
      discount = state.appliedCoupon.discount;
    }
  }

  const total = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.innerText = formatMoney(subtotal);
  if (discountEl) discountEl.innerText = `-${formatMoney(discount)}`;
  if (totalEl) totalEl.innerText = formatMoney(total);
}

// --- 7. Quick Customizer Drawer (Live Theme & Color Editor) ---
function toggleCustomizer() {
  const el = document.getElementById('customizer-drawer');
  el.classList.toggle('open');
}

function applyCustomPreset(prim, sec, headBg) {
  document.getElementById('cust-primary-color').value = prim;
  document.getElementById('cust-secondary-color').value = sec;
  document.getElementById('cust-header-bg').value = headBg;
  saveCustomizerSettings();
}

function saveCustomizerSettings() {
  const storeName = document.getElementById('cust-store-name').value || 'COMPUTER HOUSE';
  const primaryColor = document.getElementById('cust-primary-color').value || '#FF3E00';
  const secondaryColor = document.getElementById('cust-secondary-color').value || '#2563EB';
  const headerBg = document.getElementById('cust-header-bg').value || '#000000';
  const announcement = document.getElementById('cust-announcement-text').value;
  const whatsapp = document.getElementById('cust-whatsapp').value;

  state.saveConfig({
    store_name: storeName,
    primary_color: primaryColor,
    secondary_color: secondaryColor,
    header_bg: headerBg,
    announcement_text: announcement,
    whatsapp_number: whatsapp
  });

  // Apply instantly
  document.getElementById('header-store-title').innerText = storeName;
  document.getElementById('announcement-banner-text').innerText = announcement;
  renderHome();
}

// --- 8. Theme & Language Controls ---
function toggleDarkLight() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('ch_light_theme', next);
}

function changeCurrency(curr) {
  state.currency = curr;
  document.getElementById('header-currency-label').innerText = curr;
  renderHome();
  if (state.activeView === 'catalog') renderCatalog();
  if (state.activeView === 'builder') renderPCBuilder();
  if (state.activeView === 'prebuilts') renderPrebuiltsView();
  renderCartDrawer();
}

function toggleWhatsAppModal() {
  document.getElementById('whatsapp-popup-card').classList.toggle('open');
}

// --- 9. Initialization on Page Load ---
window.addEventListener('DOMContentLoaded', () => {
  // Restore saved theme
  const savedTheme = localStorage.getItem('ch_light_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Apply saved config
  state.applyThemeVars();
  document.getElementById('header-store-title').innerText = state.config.store_name;
  document.getElementById('announcement-banner-text').innerText = state.config.announcement_text;
  document.getElementById('cust-store-name').value = state.config.store_name;
  document.getElementById('cust-primary-color').value = state.config.primary_color;
  document.getElementById('cust-secondary-color').value = state.config.secondary_color;
  document.getElementById('cust-header-bg').value = state.config.header_bg;
  document.getElementById('cust-announcement-text').value = state.config.announcement_text;
  document.getElementById('cust-whatsapp').value = state.config.whatsapp_number;

  updateCartBadge();
  renderHome();

  // Search input live listener
  const searchInput = document.getElementById('main-search-input');
  const searchDropdown = document.getElementById('search-dropdown-results');
  if (searchInput && searchDropdown) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchDropdown.classList.remove('active');
        return;
      }
      const matches = state.products.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
      if (matches.length > 0) {
        searchDropdown.classList.add('active');
        searchDropdown.innerHTML = matches.map(m => `
          <div class="search-result-item" onclick="addToCart({ name: '${m.name}', price: ${m.price_usd}, image: '${m.image}' }); document.getElementById('search-dropdown-results').classList.remove('active');">
            <img src="${m.image}" style="width: 32px; height: 32px; object-fit: contain;">
            <div>
              <div style="font-weight: 700; font-size: 12px;">${m.name}</div>
              <div style="font-size: 11px; color: var(--primary-color); font-weight: 800;">${formatMoney(m.price_usd)}</div>
            </div>
          </div>
        `).join('');
      } else {
        searchDropdown.classList.remove('active');
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target)) {
        searchDropdown.classList.remove('active');
      }
    });
  }
});
