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
  hero_title: 'BUILD YOUR DREAM PC WITH TOP-TIER HARDWARE',
  hero_subtitle: '100% original components with official warranty. Live socket compatibility validation and thermal wattage calculation.',
  floating_bar_text: '🔥 New PC Builder 2.0: Instant Socket Validation & Wattage Calculation',
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
    image: './img/cpu/amd/AMD Ryzen 7 7800X3D.jpg'
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
    image: './img/cpu/intel/Intel Core i7-14700K.jpg'
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
    image: './img/gpu/nvidia/ASUS ROG Strix GeForce RTX 4080 Super 16GB.jpg'
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
    image: './img/gpu/amd/Sapphire PULSE AMD Radeon RX 7800 XT 16GB.png'
  },
  {
    id: 'mb-asus-b650',
    name: 'ASUS ROG Strix B650E-F Gaming WiFi Socket AM5',
    category: 'motherboard',
    brand: 'ASUS',
    socket: 'AM5',
    wattage: 50,
    price_usd: 289,
    price_pen: 1100,
    badge: 'PCIE 5.0 READY',
    image: './img/mother/amd/ASUS ROG Strix B650E-F Gaming WiFi.jpg'
  },
  {
    id: 'mb-msi-z790',
    name: 'MSI MPG Z790 Carbon WiFi Socket LGA1700 DDR5',
    category: 'motherboard',
    brand: 'MSI',
    socket: 'LGA1700',
    wattage: 65,
    price_usd: 349,
    price_pen: 1330,
    badge: 'OVERCLOCKING',
    image: './img/mother/intel/MSI MPG Z790 Carbon WiFi.jpg'
  },
  {
    id: 'ram-corsair-32gb',
    name: 'Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz CL30',
    category: 'ram',
    brand: 'Corsair',
    socket: 'DDR5',
    wattage: 15,
    price_usd: 129,
    price_pen: 490,
    badge: 'AMD EXPO & XMP',
    image: './img/ram/corsair/Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz.jpg'
  },
  {
    id: 'ssd-samsung-990pro',
    name: 'Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD (7450MB/s)',
    category: 'storage',
    brand: 'Samsung',
    socket: 'M.2 NVMe',
    wattage: 10,
    price_usd: 179,
    price_pen: 680,
    badge: 'ULTRA FAST',
    image: './img/storage/samsung/Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2.jpg'
  },
  {
    id: 'cooler-nzxt-kraken',
    name: 'NZXT Kraken Elite 360 RGB Liquid Cooler (Custom LCD Screen)',
    category: 'cooler',
    brand: 'NZXT',
    socket: 'AM5/LGA1700',
    wattage: 25,
    price_usd: 279,
    price_pen: 1060,
    badge: 'LCD DISPLAY',
    image: './img/cooler/nzxt/NZXT Kraken Elite 360 RGB.jpg'
  },
  {
    id: 'case-nzxt-h5',
    name: 'NZXT H5 Flow RGB Tempered Glass Mid-Tower Case',
    category: 'case',
    brand: 'NZXT',
    socket: 'ATX',
    wattage: 0,
    price_usd: 94,
    price_pen: 360,
    badge: 'HIGH AIRFLOW',
    image: './img/cabinet/NZXT H5 Flow RGB Mesh Mid-Tower ATX.jpg'
  },
  {
    id: 'psu-corsair-rm850x',
    name: 'Corsair RM850x Shift 850W 80+ Gold Fully Modular ATX 3.0',
    category: 'psu',
    brand: 'Corsair',
    socket: 'ATX 3.0 / PCIe 5.0',
    wattage: 0,
    price_usd: 159,
    price_pen: 605,
    badge: '80+ GOLD CERTIFIED',
    image: './img/psu/corsair/Corsair RM850x Shift 850W 80 Plus Gold.jpg'
  },
  {
    id: 'laptop-asus-scar',
    name: 'ASUS ROG Strix SCAR 16 (i9-14900HX, RTX 4080, 240Hz Mini-LED)',
    category: 'notebooks',
    brand: 'ASUS',
    socket: 'Mobile',
    wattage: 230,
    price_usd: 2899,
    price_pen: 11020,
    badge: 'BEAST LAPTOP',
    image: './img/hero-grid/Notebook/Example.jpg'
  }
];

const DEFAULT_PREBUILTS = [
  {
    id: 'prebuilt-titan',
    name: 'TITAN RYZEN 7 7800X3D + RTX 4080 SUPER 16GB',
    price_usd: 2899,
    badge: 'RECOMMENDED TOP PICK',
    image: './img/cabinet/NZXT H5 Flow RGB Mesh Mid-Tower ATX.jpg',
    specs: 'Ryzen 7 7800X3D • RTX 4080 Super • 32GB DDR5 • 2TB Gen4 SSD • 850W Gold'
  },
  {
    id: 'prebuilt-vortex',
    name: 'VORTEX CORE I7-14700K + RTX 4070 TI SUPER',
    price_usd: 2199,
    badge: 'PRO CREATOR & GAMING',
    image: './img/gpu/nvidia/ASUS ROG Strix GeForce RTX 4080 Super 16GB.jpg',
    specs: 'Intel Core i7-14700K • RTX 4070 Ti Super • 32GB DDR5 • 1TB SSD • 750W'
  },
  {
    id: 'prebuilt-apex',
    name: 'APEX RYZEN 5 7600 + RTX 4060 TI 8GB',
    price_usd: 1249,
    badge: '1080P/1440P SWEET SPOT',
    image: './img/hero-grid/PC GAMER/Example.jpg',
    specs: 'Ryzen 5 7600 • RTX 4060 Ti • 16GB DDR5 • 1TB NVMe SSD • 650W Bronze'
  },
  {
    id: 'prebuilt-entry',
    name: 'FURY RYZEN 5 5600 + RX 6600 8GB',
    price_usd: 749,
    badge: 'BUDGET CHAMPION',
    image: './img/hero-grid/PC GAMER/Example.jpg',
    specs: 'Ryzen 5 5600 • Radeon RX 6600 • 16GB DDR4 • 500GB SSD • 550W'
  }
];

const DEFAULT_TICKETS = [
  {
    code: 'CH-8492',
    customer: 'Alex Turner',
    device: 'Custom Rig (i9-13900K / RTX 4090 Liquid)',
    issue: 'Preventive thermal paste replacement & Arctic MX-6 upgrade',
    current_stage: 4,
    tech_notes: 'Thermal paste reapplied. Running 24h Cinebench R23 and FurMark stability loop. Max temp: 72°C.'
  },
  {
    code: 'CH-7731',
    customer: 'Sarah Jenkins',
    device: 'ASUS ROG Gaming Laptop',
    issue: 'Random bluescreens and overheating',
    current_stage: 3,
    tech_notes: 'Fan dust cleaned out, liquid metal reapplied on CPU/GPU dice.'
  }
];

// --- 2. State Controller ---
const state = {
  config: JSON.parse(localStorage.getItem('ch_light_config')) || DEFAULT_CONFIG,
  products: JSON.parse(localStorage.getItem('ch_light_products')) || DEFAULT_PRODUCTS,
  prebuilts: JSON.parse(localStorage.getItem('ch_light_prebuilts')) || DEFAULT_PREBUILTS,
  tickets: JSON.parse(localStorage.getItem('ch_light_tickets')) || DEFAULT_TICKETS,
  cart: JSON.parse(localStorage.getItem('ch_light_cart')) || [],
  currency: 'USD',
  activeView: 'home',
  activeCategoryPill: 'all',
  catalogPage: 0,
  itemsPerPage: 8,
  appliedCoupon: null,

  // PC Builder State
  builderState: {
    cpu: null,
    motherboard: null,
    ram: null,
    gpu: null,
    storage: null,
    cooler: null,
    case: null,
    psu: null
  },
  activeBuilderStep: 'cpu',

  applyThemeVars() {
    document.documentElement.style.setProperty('--primary-color', this.config.primary_color);
    document.documentElement.style.setProperty('--secondary-color', this.config.secondary_color);
  }
};

// --- 3. Currency Helpers ---
function formatMoney(amountUSD) {
  const num = Number(amountUSD) || 0;
  if (state.currency === 'PEN') {
    const penVal = Math.round(num * 3.8);
    return `S/. ${penVal.toLocaleString()}`;
  }
  return `$ ${num.toLocaleString()}`;
}

// --- 4. Navigation Router ---
function navigateTo(viewName, catKey = 'all') {
  state.activeView = viewName;
  const views = ['view-home', 'view-catalog', 'view-prebuilts', 'view-builder', 'view-services', 'view-admin'];
  views.forEach(v => {
    const el = document.getElementById(v);
    if (el) el.style.display = (v === `view-${viewName}`) ? 'block' : 'none';
  });

  // Update primary navigation active state
  document.querySelectorAll('.nav-link-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewName === 'home') {
    renderHome();
  } else if (viewName === 'catalog') {
    renderCatalog(catKey);
  } else if (viewName === 'prebuilts') {
    renderPrebuiltsView();
  } else if (viewName === 'builder') {
    renderPCBuilder();
  } else if (viewName === 'services') {
    renderRepairTracker();
  } else if (viewName === 'admin') {
    renderAdminCMS();
  }
}

// --- 5. Render Functions ---

// A. Home View & Featured Catalog
function renderHome() {
  renderHomeFeaturedCatalog(state.activeCategoryPill, state.catalogPage);
}

function filterCatalogPill(catKey, btnElement) {
  state.activeCategoryPill = catKey;
  state.catalogPage = 0;

  document.querySelectorAll('#home-category-pills .category-pill-tab').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  renderHomeFeaturedCatalog(catKey, 0);
}

function prevCatalogPage() {
  state.catalogPage = Math.max(0, state.catalogPage - 1);
  renderHomeFeaturedCatalog(state.activeCategoryPill, state.catalogPage);
}

function nextCatalogPage() {
  const filtered = state.activeCategoryPill === 'all'
    ? state.products
    : state.products.filter(p => p.category === state.activeCategoryPill);
  const totalPages = Math.ceil(filtered.length / state.itemsPerPage) || 1;
  state.catalogPage = Math.min(totalPages - 1, state.catalogPage + 1);
  renderHomeFeaturedCatalog(state.activeCategoryPill, state.catalogPage);
}

function renderHomeFeaturedCatalog(category = 'all', page = 0) {
  const container = document.getElementById('home-featured-products-grid');
  const pageIndicator = document.getElementById('demo-catalog-page-indicator');
  if (!container) return;

  const filtered = category === 'all'
    ? state.products
    : state.products.filter(p => p.category === category);

  const totalPages = Math.ceil(filtered.length / state.itemsPerPage) || 1;
  const displayed = filtered.slice(page * state.itemsPerPage, (page + 1) * state.itemsPerPage);

  if (pageIndicator) {
    pageIndicator.innerText = `${page + 1} / ${totalPages}`;
  }

  container.innerHTML = displayed.map(p => {
    const regularPrice = Math.round(p.price_usd * 1.18);
    const savings = regularPrice - p.price_usd;

    return `
      <div class="product-card">
        ${p.badge ? `<span class="product-card-badge">✨ ${p.badge}</span>` : ''}
        <div class="product-img-wrapper" onclick="addToCart({ name: '${p.name}', price: ${p.price_usd}, image: '${p.image}' })">
          <img src="${p.image}" alt="${p.name}">
        </div>
        <div>
          <div class="product-brand-tag">${p.brand || 'ORIGINAL'} ${p.socket ? `• ${p.socket}` : ''}</div>
          <h4 class="product-title" title="${p.name}">${p.name}</h4>
          <div class="product-price-strikethrough">${formatMoney(regularPrice)}</div>
          <div class="product-price-current">${formatMoney(p.price_usd)}</div>
          ${savings > 0 ? `<div class="product-savings-badge">Save ${formatMoney(savings)}</div>` : ''}
        </div>
        <div style="display: flex; gap: 8px; margin-top: 14px;">
          <button class="btn-primary" style="flex: 1;" onclick="addToCart({ name: '${p.name}', price: ${p.price_usd}, image: '${p.image}' })">
            🛒 Buy Now
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// B. Dedicated Catalog View
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

  container.innerHTML = filtered.map(p => {
    const regularPrice = Math.round(p.price_usd * 1.18);
    const savings = regularPrice - p.price_usd;
    return `
      <div class="product-card">
        ${p.badge ? `<span class="product-card-badge">✨ ${p.badge}</span>` : ''}
        <div class="product-img-wrapper">
          <img src="${p.image}" alt="${p.name}">
        </div>
        <div>
          <div class="product-brand-tag">${p.brand || 'ORIGINAL'} ${p.socket ? `• ${p.socket}` : ''}</div>
          <h4 class="product-title">${p.name}</h4>
          <div class="product-price-strikethrough">${formatMoney(regularPrice)}</div>
          <div class="product-price-current">${formatMoney(p.price_usd)}</div>
          ${savings > 0 ? `<div class="product-savings-badge">Save ${formatMoney(savings)}</div>` : ''}
        </div>
        <div style="display: flex; gap: 8px; margin-top: 14px;">
          <button class="btn-primary" style="flex: 1;" onclick="addToCart({ name: '${p.name}', price: ${p.price_usd}, image: '${p.image}' })">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// C. Prebuilts View
function renderPrebuiltsView() {
  const container = document.getElementById('prebuilts-products-grid');
  if (!container) return;

  container.innerHTML = state.prebuilts.map(pb => {
    const regularPrice = Math.round(pb.price_usd * 1.15);
    const savings = regularPrice - pb.price_usd;

    return `
      <div class="product-card">
        <span class="product-card-badge">⚡ ${pb.badge}</span>
        <div class="product-img-wrapper">
          <img src="${pb.image}" alt="${pb.name}">
        </div>
        <div>
          <div class="product-brand-tag">OFFICIAL BATTLE-RIG</div>
          <h4 class="product-title">${pb.name}</h4>
          <p style="font-size: 11px; color: var(--text-secondary); margin-bottom: 8px;">${pb.specs}</p>
          <div class="product-price-strikethrough">${formatMoney(regularPrice)}</div>
          <div class="product-price-current">${formatMoney(pb.price_usd)}</div>
          ${savings > 0 ? `<div class="product-savings-badge">Save ${formatMoney(savings)}</div>` : ''}
        </div>
        <button class="btn-primary" style="width: 100%; margin-top: 14px;" onclick="addToCart({ name: '${pb.name}', price: ${pb.price_usd}, image: '${pb.image}' })">
          🛒 Buy Gaming PC
        </button>
      </div>
    `;
  }).join('');
}

// D. PC Builder Step Wizard (3-Column Layout Architecture)
const BUILDER_STEPS = [
  { key: 'cpu', label: 'Processor (CPU)', icon: '🧠', desc: 'Select your CPU first. The system will automatically filter motherboards by socket (AM5 / LGA1700) to ensure zero incompatibility.' },
  { key: 'motherboard', label: 'Motherboard', icon: '🔌', desc: 'Motherboard selection is automatically filtered to your CPU socket for 100% pin and chipset compatibility.' },
  { key: 'ram', label: 'RAM Memory', icon: '💾', desc: 'High-speed dual-channel DDR5 modules optimized for gaming and extreme productivity workloads.' },
  { key: 'gpu', label: 'Graphics Card (GPU)', icon: '🎮', desc: 'Dedicated graphics card for high-refresh 1080p, 1440p, or 4K ray-traced gaming performance.' },
  { key: 'storage', label: 'Storage (SSD)', icon: '💽', desc: 'Ultra-fast NVMe M.2 solid state drives for near-instant boot times and lightning game load speeds.' },
  { key: 'cooler', label: 'CPU Cooler', icon: '🧊', desc: 'High-efficiency liquid or tower air cooling solution to maintain peak turbo boost clocks.' },
  { key: 'case', label: 'PC Case', icon: '🖥️', desc: 'Chassis with optimized mesh airflow, tempered glass side panel, and cable management channels.' },
  { key: 'psu', label: 'Power Supply (PSU)', icon: '⚡', desc: 'Reliable 80 Plus certified power delivery with active PFC protection for continuous stability.' }
];

function switchBuilderStep(stepKey) {
  state.activeBuilderStep = stepKey;
  renderPCBuilder();
}

function selectBuilderComponent(stepKey, product) {
  state.builderState[stepKey] = product;

  // Socket Compatibility Check
  if (stepKey === 'cpu' && state.builderState.motherboard) {
    if (state.builderState.motherboard.socket !== product.socket) {
      state.builderState.motherboard = null;
      alert(`⚠️ Socket mismatch! Motherboard reset to match new CPU socket: ${product.socket}`);
    }
  }

  // Auto-advance to next empty step
  const currentIndex = BUILDER_STEPS.findIndex(s => s.key === stepKey);
  const nextPending = BUILDER_STEPS.find((s, idx) => idx > currentIndex && !state.builderState[s.key]);
  if (nextPending) {
    state.activeBuilderStep = nextPending.key;
  } else if (currentIndex < BUILDER_STEPS.length - 1) {
    state.activeBuilderStep = BUILDER_STEPS[currentIndex + 1].key;
  }
  renderPCBuilder();
}

function renderPCBuilder() {
  const currentStepObj = BUILDER_STEPS.find(s => s.key === state.activeBuilderStep) || BUILDER_STEPS[0];
  const stepIdx = BUILDER_STEPS.findIndex(s => s.key === state.activeBuilderStep);

  // 1. Update Stepper List (Col 1)
  const stepperListEl = document.getElementById('builder-stepper-list');
  if (stepperListEl) {
    stepperListEl.innerHTML = BUILDER_STEPS.map((s, idx) => {
      const isCurrent = state.activeBuilderStep === s.key;
      const comp = state.builderState[s.key];
      const isDone = !!comp;
      const statusText = isDone ? `Selected: ${comp.name.substring(0, 20)}...` : 'Pending selection';

      return `
        <div class="stepper-item ${isCurrent ? 'active' : ''} ${isDone ? 'completed' : ''}" onclick="switchBuilderStep('${s.key}')">
          <div class="stepper-num">${isDone ? '✓' : (idx + 1)}</div>
          <div class="stepper-meta">
            <div class="stepper-title">${s.icon} ${s.label}</div>
            <div class="stepper-status">${statusText}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Update Instructions Header (Col 2)
  const stepNameEl = document.getElementById('builder-step-current-name');
  const stepDescEl = document.getElementById('builder-step-desc');
  const socketBadgeEl = document.getElementById('builder-socket-rule-badge');

  if (stepNameEl) stepNameEl.innerText = `Step ${stepIdx + 1}: ${currentStepObj.label}`;
  if (stepDescEl) stepDescEl.innerText = currentStepObj.desc;

  const activeSocket = state.builderState.cpu ? state.builderState.cpu.socket : null;
  if (socketBadgeEl) {
    if (state.activeBuilderStep === 'motherboard' && activeSocket) {
      socketBadgeEl.innerText = `Socket Rule: LOCKED TO ${activeSocket}`;
      socketBadgeEl.style.background = 'rgba(16, 185, 129, 0.15)';
      socketBadgeEl.style.color = 'var(--accent-green)';
    } else if (state.activeBuilderStep === 'cpu') {
      socketBadgeEl.innerText = 'Socket Rule: SETS RIG PLATFORM';
      socketBadgeEl.style.background = 'rgba(255, 62, 0, 0.1)';
      socketBadgeEl.style.color = 'var(--primary-color)';
    } else {
      socketBadgeEl.innerText = activeSocket ? `Active Rig Socket: ${activeSocket}` : 'Socket Rule: ALL AVAILABLE';
      socketBadgeEl.style.background = 'rgba(37, 99, 235, 0.1)';
      socketBadgeEl.style.color = 'var(--secondary-color)';
    }
  }

  // 3. Filter and Render Components (Col 2)
  let available = state.products.filter(p => p.category === state.activeBuilderStep);
  if (state.activeBuilderStep === 'motherboard' && activeSocket) {
    available = available.filter(p => p.socket === activeSocket);
  }

  const gridEl = document.getElementById('builder-components-selection-grid');
  if (gridEl) {
    if (available.length === 0) {
      gridEl.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 32px; text-align: center; background: var(--bg-surface); border-radius: var(--radius-card); border: 1px dashed var(--border-color);">
          <div style="font-size: 28px; margin-bottom: 8px;">🔍</div>
          <h4 style="font-size: 15px; font-weight: 700;">No components found for this socket criteria</h4>
          <p style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">Try selecting a different CPU or reset your configuration.</p>
        </div>
      `;
    } else {
      gridEl.innerHTML = available.map(p => {
        const isSelected = state.builderState[state.activeBuilderStep]?.id === p.id;
        return `
          <div class="builder-component-card ${isSelected ? 'selected' : ''}">
            ${isSelected ? '<div class="builder-green-status-bar"></div>' : ''}
            <div style="height: 130px; display: flex; align-items: center; justify-content: center; background: var(--bg-base); border-radius: 10px; margin-bottom: 12px; padding: 10px;">
              <img src="${p.image}" alt="${p.name}" style="max-height: 110px; max-width: 100%; object-fit: contain;">
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span class="product-brand-tag">${p.brand}</span>
                  ${p.socket ? `<span style="font-family: var(--font-mono); font-size: 10px; font-weight: 800; background: var(--bg-base); border: 1px solid var(--border-color); padding: 1px 6px; border-radius: 4px;">${p.socket}</span>` : ''}
                </div>
                <h4 style="font-size: 13px; font-weight: 700; line-height: 1.35; margin-bottom: 8px;">${p.name}</h4>
              </div>
              <div>
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 10px;">
                  <div class="product-price-current" style="font-size: 17px;">${formatMoney(p.price_usd)}</div>
                  <span style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">⚡ ${p.wattage || 0}W</span>
                </div>
                <button class="btn-primary" style="width: 100%; margin-top: 12px; background: ${isSelected ? 'var(--accent-green)' : 'var(--primary-color)'}; border-color: ${isSelected ? 'var(--accent-green)' : 'var(--primary-color)'};" onclick="selectBuilderComponent('${state.activeBuilderStep}', ${JSON.stringify(p).replace(/"/g, '&quot;')})">
                  ${isSelected ? '✓ Selected' : '+ Select Component'}
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 4. Update Sticky Rig Compatibility HUD (Col 3)
  const socketEl = document.getElementById('builder-active-socket');
  const socketStatusEl = document.getElementById('builder-socket-status-text');
  if (socketEl) {
    socketEl.innerText = activeSocket ? `${activeSocket} PLATFORM` : 'NONE (SELECT CPU)';
    socketEl.style.color = activeSocket ? 'var(--accent-green)' : 'var(--text-muted)';
  }
  if (socketStatusEl) {
    socketStatusEl.innerText = activeSocket ? `✓ Chipset & Motherboards filtered to ${activeSocket}` : 'Select CPU to lock motherboard socket';
  }

  // Calculate Watts & Load Bar
  const baseWatts = 50;
  let totalWatts = baseWatts;
  let totalPrice = 0;
  let selectedCount = 0;

  Object.values(state.builderState).forEach(p => {
    if (p) {
      totalWatts += (p.wattage || 0);
      totalPrice += (p.price_usd || 0);
      selectedCount++;
    }
  });

  const psuRef = 850;
  const powerPercent = Math.min(100, Math.round((totalWatts / psuRef) * 100));

  const wattsHeaderEl = document.getElementById('builder-total-watts');
  const powerPercentEl = document.getElementById('builder-power-percent');
  const powerBarEl = document.getElementById('builder-power-bar');

  if (wattsHeaderEl) wattsHeaderEl.innerText = `${totalWatts} W`;
  if (powerPercentEl) powerPercentEl.innerText = `${powerPercent}% (${totalWatts}W / ${psuRef}W)`;
  if (powerBarEl) powerBarEl.style.width = `${powerPercent}%`;

  // Render HUD 8-Slot summary list
  const hudSummaryEl = document.getElementById('builder-hud-summary-list');
  if (hudSummaryEl) {
    hudSummaryEl.innerHTML = BUILDER_STEPS.map(s => {
      const comp = state.builderState[s.key];
      return `
        <div class="hud-slot-item" style="cursor: pointer;" onclick="switchBuilderStep('${s.key}')">
          <span class="hud-slot-key">${s.label.split(' ')[0]}</span>
          <span class="hud-slot-name" style="color: ${comp ? 'var(--text-primary)' : 'var(--text-muted)'};">
            ${comp ? comp.name : '— Empty slot'}
          </span>
          <span class="hud-slot-price">${comp ? formatMoney(comp.price_usd) : '—'}</span>
        </div>
      `;
    }).join('');
  }

  // Prices
  const transferPrice = Math.round(totalPrice * (1 - (state.config.transfer_discount / 100)));
  const priceEl = document.getElementById('builder-total-price');
  const transferPriceEl = document.getElementById('builder-transfer-price');

  if (priceEl) priceEl.innerText = formatMoney(totalPrice);
  if (transferPriceEl) transferPriceEl.innerText = formatMoney(transferPrice);
}

function finishPCBuild() {
  const selected = Object.values(state.builderState).filter(Boolean);
  if (selected.length === 0) {
    alert('Please select at least one component to build your PC.');
    return;
  }
  const total = selected.reduce((sum, item) => sum + item.price_usd, 0);
  addToCart({
    name: `Custom PC Rig (${selected.length} Components: ${state.builderState.cpu ? state.builderState.cpu.name : 'Custom'})`,
    price: total,
    image: './img/cabinet/NZXT H5 Flow RGB Mesh Mid-Tower ATX.jpg'
  });
  openCartDrawer();
}

// F. Admin CMS Dashboard Engine (Right Tablet Alignment)
const DEFAULT_ADMIN_NOTIFICATIONS = [
  { id: 1, title: 'New Order #1042 received', detail: '$1,101.00 via Bank Transfer (Alex T.)', time: '12m ago', icon: '📦' },
  { id: 2, title: 'Low Stock Alert', detail: 'AMD Ryzen 7 7800X3D (2 units remaining)', time: '1h ago', icon: '⚠️' },
  { id: 3, title: 'RMA Ticket CH-8492 updated', detail: 'Burn-in Loop 24h Passed with 0 errors', time: '2h ago', icon: '🔧' },
  { id: 4, title: 'Storefront Config Saved', detail: 'Primary accent color synced to LocalStorage', time: '5h ago', icon: '⚡' }
];

let adminNotifications = [...DEFAULT_ADMIN_NOTIFICATIONS];

function renderAdminCMS() {
  // 1. KPI Cards
  const kpiSalesEl = document.getElementById('admin-kpi-sales');
  const kpiOrdersEl = document.getElementById('admin-kpi-orders');
  const kpiRmaEl = document.getElementById('admin-kpi-rma');

  if (kpiSalesEl) kpiSalesEl.innerText = formatMoney(2303);
  if (kpiOrdersEl) kpiOrdersEl.innerText = formatMoney(1101);
  if (kpiRmaEl) kpiRmaEl.innerText = formatMoney(900);

  // 2. Notifications Tray
  renderAdminNotifications();

  // 3. Catalog Count & Metrics
  const countEl = document.getElementById('admin-total-catalog-count');
  if (countEl) countEl.innerText = `${state.products.length} Products Active`;

  // 4. Live Inventory Table
  renderAdminTable();
}

function renderAdminNotifications() {
  const badgeEl = document.getElementById('admin-notif-badge-count');
  const listEl = document.getElementById('admin-notif-items-list');

  if (badgeEl) badgeEl.innerText = adminNotifications.length;

  if (listEl) {
    if (adminNotifications.length === 0) {
      listEl.innerHTML = `
        <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 12px;">
          No unread notifications
        </div>
      `;
    } else {
      listEl.innerHTML = adminNotifications.map(n => `
        <div class="notif-tray-item">
          <span style="font-size: 16px;">${n.icon}</span>
          <div style="flex: 1;">
            <div style="font-weight: 700; color: var(--text-primary);">${n.title}</div>
            <div style="font-size: 11px; color: var(--text-secondary); margin-top: 1px;">${n.detail}</div>
            <div style="font-size: 9px; color: var(--text-muted); font-family: var(--font-mono); margin-top: 2px;">${n.time}</div>
          </div>
          <span class="notif-tray-dot"></span>
        </div>
      `).join('');
    }
  }
}

function toggleAdminNotifTray() {
  const tray = document.getElementById('admin-notif-tray-dropdown');
  if (tray) tray.classList.toggle('open');
}

function clearAdminNotifs() {
  adminNotifications = [];
  renderAdminNotifications();
}

function renderAdminTable(filterText = '') {
  const tbody = document.getElementById('admin-inventory-table-body');
  if (!tbody) return;

  const q = filterText.toLowerCase().trim();
  const filtered = q
    ? state.products.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    : state.products;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 24px; color: var(--text-muted);">
          No products match your search query.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map((p, idx) => {
    const stockCount = p.stock !== undefined ? p.stock : (idx % 2 === 0 ? 12 : (idx === 1 ? 2 : 7));
    const stockClass = stockCount <= 2 ? 'low-stock' : 'in-stock';
    const stockLabel = stockCount <= 2 ? `Low Stock (${stockCount})` : `In Stock (${stockCount})`;

    return `
      <tr>
        <td><input type="checkbox" class="admin-row-chk" value="${p.id}"></td>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${p.image}" alt="${p.name}" style="width: 36px; height: 36px; object-fit: contain; border-radius: 6px; background: var(--bg-base); padding: 2px; border: 1px solid var(--border-color);">
            <div>
              <div style="font-weight: 700; font-size: 13px; color: var(--text-primary);">${p.name}</div>
              <div style="font-size: 11px; color: var(--text-muted);">${p.brand} • SKU: ${p.id.toUpperCase()}</div>
            </div>
          </div>
        </td>
        <td><span style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-secondary);">${p.category}</span></td>
        <td><span style="font-family: var(--font-mono); font-size: 11px; font-weight: 600;">${p.socket || 'N/A'}</span></td>
        <td><span style="font-family: var(--font-mono); font-size: 11px;">${p.wattage || 0}W</span></td>
        <td><span class="font-mono" style="font-weight: 800; color: var(--primary-color);">${formatMoney(p.price_usd)}</span></td>
        <td>
          <span class="table-stock-badge ${stockClass}">${stockLabel}</span>
        </td>
        <td style="text-align: right; white-space: nowrap;">
          <button class="table-action-btn" onclick="editProductPrice('${p.id}')">✏️ Edit</button>
          <button class="table-action-btn" style="color: var(--accent-red);" onclick="deleteAdminProduct('${p.id}')">🗑️</button>
        </td>
      </tr>
    `;
  }).join('');
}

function filterAdminTable(query) {
  renderAdminTable(query);
}

function toggleSelectAllTable(masterChk) {
  document.querySelectorAll('.admin-row-chk').forEach(chk => {
    chk.checked = masterChk.checked;
  });
}

function editProductPrice(productId) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;
  const newPrice = prompt(`Enter new USD price for ${prod.name}:`, prod.price_usd);
  if (newPrice !== null && !isNaN(newPrice) && Number(newPrice) > 0) {
    prod.price_usd = Number(newPrice);
    localStorage.setItem('ch_light_products', JSON.stringify(state.products));
    renderAdminTable();
    renderHome();
    alert(`✓ Updated price for ${prod.name} to $${prod.price_usd}`);
  }
}

function deleteAdminProduct(productId) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;
  if (confirm(`Are you sure you want to delete ${prod.name} from inventory?`)) {
    state.products = state.products.filter(p => p.id !== productId);
    localStorage.setItem('ch_light_products', JSON.stringify(state.products));
    renderAdminTable();
    renderHome();
  }
}

function promptAddProduct() {
  const name = prompt('Product Name:');
  if (!name) return;
  const category = prompt('Category (cpu, gpu, motherboard, ram, storage, cooler, case, psu, notebooks, perifericos):', 'gpu');
  const price = Number(prompt('Price USD:', '299')) || 299;
  const brand = prompt('Brand:', 'ASUS') || 'ASUS';
  const socket = prompt('Socket / Interface (e.g. AM5, LGA1700, PCIe 4.0, DDR5, M.2):', 'PCIe 4.0');
  const wattage = Number(prompt('Wattage (W):', '150')) || 100;

  const newProd = {
    id: `custom-${Date.now()}`,
    name,
    category: category || 'gpu',
    brand,
    socket: socket || '',
    wattage,
    price_usd: price,
    price_pen: Math.round(price * 3.8),
    badge: 'NEW ARRIVAL',
    image: './img/hero-grid/GPU/Example.jpg',
    stock: 10
  };

  state.products.unshift(newProd);
  localStorage.setItem('ch_light_products', JSON.stringify(state.products));
  renderAdminTable();
  renderHome();
  alert(`✓ Product "${name}" added to inventory successfully!`);
}

function resetInventoryDefaults() {
  if (confirm('Reset inventory and products to original demo defaults?')) {
    state.products = [...DEFAULT_PRODUCTS];
    localStorage.removeItem('ch_light_products');
    renderAdminTable();
    renderHome();
    alert('✓ Catalog reset to factory defaults.');
  }
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-nav-item').forEach(btn => btn.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
  if (tabName === 'inventory') {
    document.querySelector('.admin-table-wrapper')?.scrollIntoView({ behavior: 'smooth' });
  } else if (tabName === 'overview') {
    document.querySelector('.admin-kpi-grid')?.scrollIntoView({ behavior: 'smooth' });
  } else if (tabName === 'rma') {
    navigateTo('services');
  } else if (tabName === 'orders') {
    alert('Listing 14 completed store orders (Gross Sales: $2,303.00 USD). Real-time checkout integrations active.');
  }
}

// E. Repair RMA Tracker View
function searchRepairTicket(e) {
  if (e) e.preventDefault();
  const code = document.getElementById('rma-search-code-input').value.trim().toUpperCase();
  const resultBox = document.getElementById('rma-ticket-result-box');
  if (!resultBox) return;

  const ticket = state.tickets.find(t => t.code === code) || state.tickets[0];

  const stages = [
    '1. Check-in & Intake',
    '2. Hardware Diagnostics',
    '3. Repair & Cleaning',
    '4. 24h Stress Testing',
    '5. Ready for Pickup'
  ];

  resultBox.innerHTML = `
    <div class="card" style="padding: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 14px; margin-bottom: 20px;">
        <div>
          <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 800; color: var(--primary-color);">TICKET: ${ticket.code}</span>
          <h3 style="font-size: 18px; font-weight: 800; margin-top: 4px;">${ticket.device}</h3>
          <span style="font-size: 12px; color: var(--text-secondary);">Client: ${ticket.customer}</span>
        </div>
        <span style="background: rgba(16, 185, 129, 0.1); color: var(--accent-green); padding: 6px 12px; border-radius: var(--radius-pill); font-weight: 800; font-size: 12px;">
          IN LABORATORY
        </span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin-bottom: 24px;">
        ${stages.map((st, i) => {
          const isDone = (i + 1) <= ticket.current_stage;
          const isCurrent = (i + 1) === ticket.current_stage;
          return `
            <div style="text-align: center;">
              <div style="width: 32px; height: 32px; border-radius: 50%; margin: 0 auto 6px auto; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 12px; background: ${isDone ? 'var(--primary-color)' : 'var(--border-color)'}; color: #FFFFFF;">
                ${isDone ? '✓' : i + 1}
              </div>
              <div style="font-size: 10px; font-weight: 700; color: ${isCurrent ? 'var(--primary-color)' : 'var(--text-secondary)'};">${st}</div>
            </div>
          `;
        }).join('')}
      </div>

      <div style="background: var(--bg-base); border: 1px solid var(--border-color); padding: 14px; border-radius: 8px;">
        <div style="font-size: 11px; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Technical Laboratory Report:</div>
        <p style="font-size: 13px; font-weight: 600; color: var(--text-primary); margin-top: 4px;">"${ticket.tech_notes}"</p>
      </div>
    </div>
  `;
}

function renderRepairTracker() {
  searchRepairTicket();
}

// --- 6. Cart Engine ---
function addToCart(item) {
  state.cart.push(item);
  localStorage.setItem('ch_light_cart', JSON.stringify(state.cart));
  updateCartBadge();
  renderCartDrawer();
  openCartDrawer();
}

function removeFromCart(idx) {
  state.cart.splice(idx, 1);
  localStorage.setItem('ch_light_cart', JSON.stringify(state.cart));
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const countEl = document.getElementById('header-cart-count');
  const totalEl = document.getElementById('header-cart-total');
  const total = state.cart.reduce((sum, item) => sum + (item.price || item.price_usd || 0), 0);

  if (countEl) countEl.innerText = state.cart.length;
  if (totalEl) totalEl.innerText = formatMoney(total);
}

function openCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.add('open');
  renderCartDrawer();
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.remove('open');
}

function applyCouponCode() {
  const input = document.getElementById('cart-coupon-input').value.trim().toUpperCase();
  const feedback = document.getElementById('coupon-feedback-msg');

  if (input === 'GAMER10') {
    state.appliedCoupon = { code: 'GAMER10', discount: 0.10 };
    feedback.style.color = 'var(--accent-green)';
    feedback.innerText = '✓ Coupon GAMER10 applied: 10% OFF!';
  } else if (input === 'WELCOME50') {
    state.appliedCoupon = { code: 'WELCOME50', fixed: 50 };
    feedback.style.color = 'var(--accent-green)';
    feedback.innerText = '✓ Coupon WELCOME50 applied: $50 OFF!';
  } else {
    feedback.style.color = 'var(--accent-red)';
    feedback.innerText = '✕ Invalid coupon code.';
  }
  renderCartDrawer();
}

function renderCartDrawer() {
  const listEl = document.getElementById('cart-items-list');
  const regTotalEl = document.getElementById('cart-regular-total');
  const transferTotalEl = document.getElementById('cart-transfer-total');
  if (!listEl) return;

  if (state.cart.length === 0) {
    listEl.innerHTML = '<div style="text-align: center; color: var(--text-muted); margin: auto;">Your cart is empty. Add components or prebuilts!</div>';
    if (regTotalEl) regTotalEl.innerText = formatMoney(0);
    if (transferTotalEl) transferTotalEl.innerText = formatMoney(0);
    return;
  }

  let subtotal = state.cart.reduce((sum, item) => sum + (item.price || item.price_usd || 0), 0);
  let discount = 0;

  if (state.appliedCoupon) {
    if (state.appliedCoupon.discount) discount = subtotal * state.appliedCoupon.discount;
    if (state.appliedCoupon.fixed) discount = state.appliedCoupon.fixed;
  }

  const finalTotal = Math.max(0, subtotal - discount);
  const transferTotal = finalTotal * (1 - (state.config.transfer_discount / 100));

  listEl.innerHTML = state.cart.map((item, idx) => `
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: var(--bg-base); border-radius: 8px; border: 1px solid var(--border-color);">
      <div>
        <div style="font-weight: 700; font-size: 12px;">${item.name}</div>
        <div class="font-mono" style="font-weight: 800; font-size: 13px; color: var(--primary-color);">${formatMoney(item.price || item.price_usd)}</div>
      </div>
      <button onclick="removeFromCart(${idx})" style="background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); border-radius: 6px; color: var(--accent-red); padding: 4px 8px; cursor: pointer;">
        ✕
      </button>
    </div>
  `).join('');

  if (regTotalEl) regTotalEl.innerText = formatMoney(finalTotal);
  if (transferTotalEl) transferTotalEl.innerText = formatMoney(transferTotal);
}

function checkoutWhatsApp() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price || item.price_usd || 0), 0);
  const msg = `Hello ${state.config.store_name}, I want to place an order for ${state.cart.length} items totaling ${formatMoney(subtotal)}.`;
  window.open(`https://wa.me/18005550199?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- 7. Live Customizer Drawer ---
function openCustomizerDrawer() {
  document.getElementById('live-customizer-drawer').classList.add('open');
}

function closeCustomizerDrawer() {
  document.getElementById('live-customizer-drawer').classList.remove('open');
}

function updateStoreName(val) {
  state.config.store_name = val;
  document.getElementById('header-store-title').innerText = val;
}

function updatePrimaryColor(color) {
  state.config.primary_color = color;
  state.applyThemeVars();
}

function updateAnnouncementText(val) {
  state.config.announcement_text = val;
  document.getElementById('announcement-banner-text').innerText = val;
}

function updateHeroTitle(val) {
  state.config.hero_title = val;
  const el = document.getElementById('hero-title-text');
  if (el) el.innerText = val;
}

function updateFloatingText(val) {
  state.config.floating_bar_text = val;
  const el = document.getElementById('floating-bar-text-span');
  if (el) el.innerText = val;
}

function saveCustomizerToStorage() {
  localStorage.setItem('ch_light_config', JSON.stringify(state.config));
  alert('✓ Store customizer settings saved successfully to browser storage!');
  closeCustomizerDrawer();
}

// --- 8. Theme & Currency Controls ---
function toggleDarkLight() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('ch_light_theme', next);
}

function changeCurrency(curr) {
  state.currency = curr;
  renderHome();
  if (state.activeView === 'catalog') renderCatalog();
  if (state.activeView === 'builder') renderPCBuilder();
  if (state.activeView === 'prebuilts') renderPrebuiltsView();
  if (state.activeView === 'admin') renderAdminCMS();
  renderCartDrawer();
  updateCartBadge();
}

// --- 9. Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('ch_light_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  state.applyThemeVars();
  document.getElementById('header-store-title').innerText = state.config.store_name;
  document.getElementById('announcement-banner-text').innerText = state.config.announcement_text;

  updateCartBadge();
  renderHome();

  // Search input listener
  const searchInput = document.getElementById('main-search-input');
  const searchDropdown = document.getElementById('search-dropdown-results');
  if (searchInput && searchDropdown) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchDropdown.style.display = 'none';
        return;
      }
      const matches = state.products.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
      if (matches.length > 0) {
        searchDropdown.style.display = 'block';
        searchDropdown.innerHTML = matches.map(m => `
          <div class="search-result-item" onclick="addToCart({ name: '${m.name}', price: ${m.price_usd}, image: '${m.image}' }); document.getElementById('search-dropdown-results').style.display='none';">
            <img src="${m.image}" style="width: 32px; height: 32px; object-fit: contain;">
            <div>
              <div style="font-weight: 700; font-size: 12px;">${m.name}</div>
              <div style="font-size: 11px; color: var(--primary-color); font-weight: 800;">${formatMoney(m.price_usd)}</div>
            </div>
          </div>
        `).join('');
      } else {
        searchDropdown.style.display = 'none';
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target)) {
        searchDropdown.style.display = 'none';
      }
    });
  }
});
