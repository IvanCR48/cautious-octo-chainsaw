# ⚡ Computer House — Demo Light (Zero-SQL / Standalone Edition)

This folder contains a **Lightweight / Standalone** version of **Computer House**. It is engineered to run seamlessly with zero dependencies, requiring no Node.js, npm, Supabase, MySQL, or backend SQL database.

---

## 🌟 Key Features of the Demo Light Version

1. **Identical High-End Modern Visual Aesthetics**:
   - Sticky header with category navigation and live predictive search bar.
   - Dynamic announcement top bar with customizable promo message.
   - Hero Carousel with interactive direct action buttons.
   - Category Quick Grid with custom status badges.
   - Bento Grid featuring the build of the week and direct links to PC Builder and Tech RMA workshop.
   - Battle-Ready Prebuilt Gaming PCs showcase with 12 installment breakdown.
   - Social Proof customer reviews with star ratings.
   - Live RMA Warranty & Repair order tracking (`CH-8492`).
   - Slide-out Shopping Cart with coupon engine (`GAMER10`, `WELCOME50`) and bank transfer discount.
   - Floating Multi-Agent WhatsApp widget with segmented contact channels.

2. **Zero-Backend & Zero-SQL Architecture**:
   - Runs 100% in the client browser using modern Vanilla JavaScript and `localStorage`.
   - Open it directly by double-clicking `index.html` or upload to any static hosting service (GitHub Pages, Netlify, Vercel, cPanel, Apache).

3. **⚙️ In-Browser Live Store Customizer**:
   - Click the floating **"⚙️ Customize Store"** button in the bottom-left corner.
   - Easily modify the store title, color themes (Gamer Orange, Electric Blue, Razer Green, Cyberpunk, or custom hex colors), top banner text, and WhatsApp support phone number.
   - Changes update the UI immediately and persist automatically in browser `localStorage`.

4. **⚡ Interactive PC Builder with Hardware Validation**:
   - Real-time CPU & Motherboard socket compatibility check (AM5 vs LGA1700).
   - Estimated thermal wattage calculation and automatic minimum power supply recommendation.
   - Direct addition of complete custom builds into the shopping cart.

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
