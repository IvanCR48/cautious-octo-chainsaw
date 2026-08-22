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
    wattage: 50,
    price_usd: 289,
    price_pen: 1100,
    badge: 'PCIE 5.0 READY',
    image: '../img/mother/amd/ASUS ROG Strix B650E-F Gaming WiFi.jpg'
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
    image: '../img/mother/intel/MSI MPG Z790 Carbon WiFi.jpg'
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
    image: '../img/ram/corsair/Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz.jpg'
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
    image: '../img/storage/samsung/Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2.jpg'
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
    image: '../img/cooler/nzxt/NZXT Kraken Elite 360 RGB.jpg'
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
    image: '../img/cabinet/NZXT H5 Flow RGB Mesh Mid-Tower ATX.jpg'
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
    image: '../img/psu/corsair/Corsair RM850x Shift 850W 80 Plus Gold.jpg'
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
    image: '../img/hero-grid/Notebook/Example.jpg'
  }
];

const DEFAULT_PREBUILTS = [
  {
    id: 'prebuilt-titan',
    name: 'TITAN RYZEN 7 7800X3D + RTX 4080 SUPER 16GB',
    price_usd: 2899,
    badge: 'RECOMMENDED TOP PICK',
    image: '../img/cabinet/NZXT H5 Flow RGB Mesh Mid-Tower ATX.jpg',
    specs: 'Ryzen 7 7800X3D • RTX 4080 Super • 32GB DDR5 • 2TB Gen4 SSD • 850W Gold'
  },
  {
    id: 'prebuilt-vortex',
    name: 'VORTEX CORE I7-14700K + RTX 4070 TI SUPER',
    price_usd: 2199,
    badge: 'PRO CREATOR & GAMING',
    image: '../img/gpu/nvidia/ASUS ROG Strix GeForce RTX 4080 Super 16GB.jpg',
    specs: 'Intel Core i7-14700K • RTX 4070 Ti Super • 32GB DDR5 • 1TB SSD • 750W'
  },
  {
    id: 'prebuilt-apex',
    name: 'APEX RYZEN 5 7600 + RTX 4060 TI 8GB',
    price_usd: 1249,
    badge: '1080P/1440P SWEET SPOT',
    image: '../img/hero-grid/PC GAMER/Example.jpg',
    specs: 'Ryzen 5 7600 • RTX 4060 Ti • 16GB DDR5 • 1TB NVMe SSD • 650W Bronze'
  },
  {
    id: 'prebuilt-entry',
    name: 'FURY RYZEN 5 5600 + RX 6600 8GB',
    price_usd: 749,
    badge: 'BUDGET CHAMPION',
    image: '../img/hero-grid/PC GAMER/Example.jpg',
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
  const views = ['view-home', 'view-catalog', 'view-prebuilts', 'view-builder', 'view-services'];
  views.forEach(v => {
    const el = document.getElementById(v);
    if (el) el.style.display = (v === `view-${viewName}`) ? 'block' : 'none';
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

// D. PC Builder Step Wizard
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

function selectBuilderComponent(stepKey, product) {
  state.builderState[stepKey] = product;

  // Socket Compatibility Check
  if (stepKey === 'cpu' && state.builderState.motherboard) {
    if (state.builderState.motherboard.socket !== product.socket) {
      state.builderState.motherboard = null;
      alert(`⚠️ Socket mismatch! Motherboard reset to match new CPU socket: ${product.socket}`);
    }
  }

  // Advance step
  const currentIndex = BUILDER_STEPS.findIndex(s => s.key === stepKey);
  if (currentIndex < BUILDER_STEPS.length - 1) {
    state.activeBuilderStep = BUILDER_STEPS[currentIndex + 1].key;
  }
  renderPCBuilder();
}

function renderPCBuilder() {
  const titleEl = document.getElementById('builder-step-title');
  const wattsEl = document.getElementById('builder-total-watts');
  const socketEl = document.getElementById('builder-active-socket');
  const countEl = document.getElementById('builder-components-count');
  const priceEl = document.getElementById('builder-total-price');
  const gridEl = document.getElementById('builder-components-selection-grid');

  const currentStepObj = BUILDER_STEPS.find(s => s.key === state.activeBuilderStep) || BUILDER_STEPS[0];
  if (titleEl) titleEl.innerText = `Step: ${currentStepObj.label}`;

  // Calculate totals
  let totalWatts = 50; // base system wattage
  let totalPrice = 0;
  let selectedCount = 0;

  Object.values(state.builderState).forEach(p => {
    if (p) {
      totalWatts += (p.wattage || 0);
      totalPrice += (p.price_usd || 0);
      selectedCount++;
    }
  });

  if (wattsEl) wattsEl.innerText = `${totalWatts} W`;
  if (priceEl) priceEl.innerText = formatMoney(totalPrice);
  if (countEl) countEl.innerText = `${selectedCount} / 8`;

  if (socketEl) {
    socketEl.innerText = state.builderState.cpu ? state.builderState.cpu.socket : 'NONE (Select CPU)';
  }

  // Filter available items for current step
  let available = state.products.filter(p => p.category === state.activeBuilderStep);

  // If selecting motherboard and CPU is selected, filter by socket!
  if (state.activeBuilderStep === 'motherboard' && state.builderState.cpu) {
    available = available.filter(p => p.socket === state.builderState.cpu.socket);
  }

  if (gridEl) {
    gridEl.innerHTML = available.map(p => {
      const isSelected = state.builderState[state.activeBuilderStep]?.id === p.id;
      return `
        <div class="product-card" style="border: 2px solid ${isSelected ? 'var(--primary-color)' : 'var(--border-color)'};">
          <div class="product-img-wrapper">
            <img src="${p.image}" alt="${p.name}">
          </div>
          <div>
            <div class="product-brand-tag">${p.brand} • ${p.socket || ''}</div>
            <h4 class="product-title">${p.name}</h4>
            <div class="product-price-current">${formatMoney(p.price_usd)}</div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">⚡ Consumption: ${p.wattage || 0}W</div>
          </div>
          <button class="btn-primary" style="margin-top: 12px; background: ${isSelected ? 'var(--accent-green)' : 'var(--primary-color)'};" onclick="selectBuilderComponent('${state.activeBuilderStep}', ${JSON.stringify(p).replace(/"/g, '&quot;')})">
            ${isSelected ? '✓ Selected' : '+ Select Component'}
          </button>
        </div>
      `;
    }).join('');
  }
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
    image: '../img/cabinet/NZXT H5 Flow RGB Mesh Mid-Tower ATX.jpg'
  });
  openCartDrawer();
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
