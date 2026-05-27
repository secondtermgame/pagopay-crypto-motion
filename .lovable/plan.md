## Update popup CTAs to "Get Started"

Update the signup form submit button (currently "Join the waitlist") to "Get Started" in all three languages. The LATAM intro popup already says "Get Started" — verify and leave as-is.

### Changes

**`src/i18n/en.json`** — `signup.submit`: `"Join the waitlist"` → `"Get Started"`

**`src/i18n/es.json`** — `signup.submit`: → `"Empieza ahora"`

**`src/i18n/fr.json`** — `signup.submit`: → `"Commencez"`

No component changes needed — `SignupForm.tsx` already renders `t("signup.submit")`.
