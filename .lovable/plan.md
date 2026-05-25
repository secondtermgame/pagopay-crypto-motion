## Plan: Show LATAM popup on global home page

Add the existing `LatamPopup` component to the global landing page (`src/pages/Index.tsx`), keeping the same trigger behavior (3s delay or 25% scroll, dismissable, remembers dismissal in localStorage).

### Changes

**`src/pages/Index.tsx`**
- Import `LatamPopup` and `SignupForm`.
- Add `isSignupOpen` state.
- Render `<LatamPopup onSignup={() => setIsSignupOpen(true)} />` and the signup dialog at the bottom of the page.

### Notes
- Popup copy is currently hard-coded Spanish (matches LATAM page). It will appear in Spanish on the global page too. If you want it localized to the user's current language (EN/ES/FR), say the word and I'll move the strings into the i18n files as a follow-up.
- The dismissal key is shared (`pagopay_latam_popup_dismissed`), so users who already dismissed it on `/latam` won't see it again on `/`.