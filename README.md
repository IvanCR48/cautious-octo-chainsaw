# ⚡ Computer House — Demo Light (Zero-SQL / Standalone Edition)

This folder contains the **Lightweight / Standalone** version of **Computer House**, entirely translated into English. It is engineered to run seamlessly with zero dependencies, requiring no Node.js, npm, Supabase, MySQL, or backend SQL database.

---

## 🌟 Key Features of the Demo Light Version

1. **Contemporary Gaming Retail E-Commerce Design System**:
   - **Fixed Sticky Header**: Left-locked logo, wide rounded predictive search input, and right action cluster (USD/PEN switcher, Dark/Light mode, Cart drawer).
   - **Horizontal Primary Navigation Bar**: Direct text links for *Products, Notebooks, Sale Gamer, Build Your PC, Outlet Deals, Tech Support & RMA*.
   - **Hero Promotional Banner with 3D Circular Platform Staging**: Left-side multi-line bold headline with vertical promotional badges, and right-side staged product composition (Gaming Laptop + Headset + RTX GPU) resting on layered circular platforms with ambient glow.
   - **Featured Catalog with Pill-Style Tabs & Carousel Arrows**: Centered section header with page/row arrows (`‹ 1 / 3 ›`) and smooth horizontal pill tabs (`All Hardware`, `Graphics Cards`, `Processors`, `Motherboards`, `RAM Memory`, `Storage`, `Laptops`, `Peripherals`, `Coolers`, `Power Supplies`, `Cases`).
   - **Product Card Anatomy**: Brand tag, clamped title, strikethrough list price, large bold discounted price, green absolute savings badge (*Save $...*), and one-click add to cart.
   - **Floating Bottom Notification Bar**: Non-intrusive site update announcement with direct action button (*"Try Builder →"*).
   - **Battle-Ready Prebuilt Gaming PCs**: 4-column responsive grid with hardware spec breakdowns and installment calculations.
   - **Live RMA Warranty & Repair Order Tracking**: Real-time 5-stage laboratory tracker (search code: `CH-8492`).
   - **Slide-out Shopping Cart**: Coupon engine (`GAMER10`, `WELCOME50`), 15% bank transfer discount, and WhatsApp checkout integration.

2. **⚙️ In-Browser Live Store Customizer**:
   - Click the **"🎨 Edit Store"** button in the header.
   - Live-tweak the store title, primary accent color (Orange, Blue, Green, or custom color picker), top announcement bar text, hero headline, and floating notification message.
   - Changes apply immediately and persist in browser `localStorage`.

3. **⚡ Interactive PC Builder with Hardware Validation**:
   - Real-time CPU & Motherboard socket compatibility check (AM5 vs LGA1700).
   - Live estimated thermal wattage calculation and power meter.
   - 1-click addition of complete custom builds into the shopping cart.

4. **Zero-Backend & Zero-SQL Architecture**:
   - Runs 100% in the client browser using modern Vanilla JavaScript, CSS, and HTML5.
   - Open it directly by double-clicking `index.html` or upload to any static hosting service (GitHub Pages, Netlify, Vercel, cPanel, Cloudflare Pages, Apache).

---

## 🚀 How to Run the Demo Light

### Option 1: Direct File Opening (No Server Required)
Simply double-click the `demo-light/index.html` file to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari, or Opera.

### Option 2: Using Any Static Server
```bash
# Python 3
python -m http.server 8080

# Or using npx serve
npx serve demo-light
```
Visit `http://localhost:8080` in your web browser.
