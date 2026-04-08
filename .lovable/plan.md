

## Plan: Redesign Security Section to Match Reference

### What changes

**1. Layout: 2-column grid → 4-column grid**
- Change from `md:grid-cols-2` to `md:grid-cols-2 lg:grid-cols-4` so all 4 cards sit in one row on desktop (matching the screenshot).

**2. Card styling to match reference**
- Light green/lime background (`bg-[#d4f5a0]` or similar) instead of dark `bg-card/80`.
- Rounded corners with a subtle green border.
- Dark text (near-black) for titles and body, not `text-foreground`/`text-muted-foreground`.
- Titles rendered in uppercase bold (matching the screenshot's style).

**3. Interactive lift on hover**
- Add `hover:-translate-y-2 hover:shadow-xl transition-all duration-300` to each card so they lift when hovered.

**4. Bold inline text in descriptions**
- The reference shows specific phrases bolded within descriptions (e.g., "**AES-256 encryption**", "**two-factor authentication (2FA)**", "**biometric login**", "**AI-driven fraud detection engines**", "**FINTRAC (Canada)**", "**international AML, KYC, and data privacy regulations**").
- Update the i18n JSON (both `en.json` and `es.json`) to split each description into segments with a `bold` flag, OR use a simpler approach: store descriptions with `<strong>` HTML tags and render with `dangerouslySetInnerHTML`.

**5. Heading/subtitle alignment**
- Change from centered to left-aligned text (matching screenshot).
- "At **PagoPay**" in subtitle has "PagoPay" bolded — use HTML rendering for this too.

**6. Remove background image overlay**
- The reference has a clean white/light background, no dark overlay image.

**7. Update icons**
- Match the reference icons more closely: use `CreditCard` (or `Laptop`), `FileCode`, `Clock`, `Monitor` from lucide-react to better match the screenshot's icon style.

### Files to modify

- **`src/components/Security.tsx`** — New layout, card styles, hover effect, left-aligned heading, HTML-rendered descriptions, updated icons, remove background image.
- **`src/i18n/en.json`** — Update `security.subtitle` and each `security.items[].description` to include `<strong>` tags around bolded phrases.
- **`src/i18n/es.json`** — Same `<strong>` tag updates for Spanish translations.

### Technical detail

Descriptions will use `dangerouslySetInnerHTML={{ __html: feature.description }}` to render the bold tags. This is safe since the content comes from our own i18n JSON files, not user input.

