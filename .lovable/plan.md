

## Analysis Summary

The live mypagopay.com site has the same copy as our current build, plus these additional elements we're missing:

1. **Sticky navigation** with hamburger menu (links: Home, About, PagoPay, Security, FAQ)
2. **Hero section** uses "YOUR MONEY, IN MOTION" (not "SINGLE APP FOR SPENDING, SENDING, AND BANKING") with a cleaner left-aligned layout, balance widget overlay, and the transparent card
3. **Crypto ticker bar** - scrolling marquee of live crypto prices (Bitcoin, Ethereum, Tether, etc.) between FAQ and footer
4. **Footer** is minimal: nav links (Home, About, PagoPay, Security, FAQ) + social icons (X, LinkedIn) -- no legal disclaimer block or legal policy links in the footer itself
5. **No separate legal policy dialogs in footer** - the privacy policy consent is inline in the signup form only
6. **English + Spanish** - full i18n for the entire site

### What needs to change

The copy between the two sites is essentially identical (features, benefits, security, FAQ). The main differences are structural/stylistic. Here's the plan:

---

### Step 1: Add i18n infrastructure

- Install `react-i18next` and `i18next`
- Create `src/i18n/` with `en.json` and `es.json` translation files containing all site copy
- Add a language switcher component (EN/ES toggle in the nav)
- Wrap the app with `I18nextProvider`

### Step 2: Create a sticky Navbar component

- PagoPay logo (pagopay-white.png on dark/hero, pagopay-black.png on light sections)
- Nav links: Home, About, PagoPay, Security, FAQ (smooth scroll anchors)
- Hamburger menu on mobile
- Language switcher (EN | ES)
- Background changes on scroll (transparent over hero, solid on scroll)

### Step 3: Update Hero section

- Change heading to "YOUR MONEY, IN MOTION" (matching the live site)
- Left-aligned text, right side shows transparent card with a floating balance widget overlay
- Keep "Get PagoPay Card" CTA with HubSpot modal
- Remove "Partner with Us" button (not on live site)
- Remove the old full-width logo from the hero (it's now in the navbar)

### Step 4: Update section copy to match live site

- **Features section**: Content matches -- keep as-is but add section `id="about"` for nav anchor
- **Benefits section**: Add "Freedom to Move. Power to Spend." subtitle, update benefit descriptions to match live site (e.g., "Convert crypto to EUR, USD or local currency in seconds")
- **Security section**: Content matches -- add `id="security"` anchor
- **FAQ section**: Content matches -- add `id="faq"` anchor

### Step 5: Add Crypto Ticker component

- Scrolling marquee bar showing live crypto prices
- Fetch from CoinGecko public API (no key needed) via a simple client-side fetch
- Display: coin name, price, with infinite scroll animation
- Place between FAQ and Footer

### Step 6: Simplify Footer

- Match the live site's minimal footer: nav links + social icons (X, LinkedIn)
- Move legal disclaimer and policy dialogs: keep them accessible but in a less prominent position (small links below the nav)
- Keep existing legal policy dialog components

### Step 7: Translate all content

- Extract all hardcoded strings from every component into i18n keys
- Create complete Spanish translations for all copy, legal policies, FAQ, etc.

---

### Assets needed from you

We have most assets already. One thing to confirm:
- **Balance widget image**: The live site shows a floating "Balance $2200.50 / Top up" widget over the hero card. Do you have this as a separate asset, or should we build it as a styled HTML element?
- **3D card image** (`pagopay-3d.png`): Used in the features section on the live site. We don't have this asset. Can you provide it, or should we skip it?

### Technical details

- **i18n**: `react-i18next` with JSON resource bundles, browser language detection, `localStorage` persistence
- **Crypto ticker**: CoinGecko `/api/v3/coins/markets` endpoint (free, no API key), CSS `@keyframes` marquee animation, 60-second refresh interval
- **Navbar scroll**: `useEffect` with `IntersectionObserver` or scroll listener to toggle transparent/solid background
- **Section anchors**: `id` attributes + `scroll-behavior: smooth` in CSS
- **Files modified**: Hero.tsx, Footer.tsx, Features.tsx, Benefits.tsx, FAQ.tsx, Security.tsx, App.tsx, index.css
- **Files created**: `src/components/Navbar.tsx`, `src/components/CryptoTicker.tsx`, `src/i18n/en.json`, `src/i18n/es.json`, `src/i18n/index.ts`

