# Buzzy Bean Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive, bilingual landing page for Buzzy Bean in Bucharest using its supplied logo and brand colours.

**Architecture:** A static React and Vite application will render focused page sections from one typed bilingual content module. Language state and persistence stay in a small hook, while shared tokens and responsive CSS provide the visual system. Image assets are local, optimized, and documented.

**Tech Stack:** React, TypeScript, Vite, Vitest, Testing Library, CSS, Image Gen, browser-based visual QA

**Spec:** `docs/superpowers/specs/2026-10-21-buzzy-bean-landing-page-design.md`

## Global Constraints

- Romanian is the first-load language; visitors can switch to English without navigation or reload.
- Persist the selected language locally and update the document `lang` attribute.
- Use `coffee@buzzybean.ro`, Monday–Friday 07:30–19:00, and Saturday–Sunday 08:30–18:00.
- State that the Bucharest location is coming soon; do not invent an address or show a map.
- Do not invent prices, testimonials, social accounts, awards, or unsupported claims.
- Use espresso brown, honey amber, warm cream, and white with readable, WCAG AA contrast.
- Do not rely on colour alone for interaction or selected state.
- Respect `prefers-reduced-motion` and prevent horizontal overflow at mobile, tablet, and desktop sizes.
- Keep provisional business facts in one canonical bilingual content module.

## Review Focus

- Missing or malformed saved language value must fall back to Romanian without breaking render.
- Language switching must update visible copy, selected-state text, persistence, and `document.documentElement.lang` together.
- Navigation targets must remain usable with the sticky header and keyboard focus.
- Long Romanian strings and narrow mobile widths must not clip, overlap, or create horizontal scrolling.
- Reduced-motion visitors must receive a stable layout without looping decorative movement.

---

## File structure

- `package.json`, `vite.config.ts`, `tsconfig*.json`, `index.html`: build and test configuration.
- `src/main.tsx`: application entry point.
- `src/App.tsx`: page composition only.
- `src/content.ts`: the canonical typed Romanian and English content object and business facts.
- `src/useLanguage.ts`: language selection, persistence, and document-language synchronization.
- `src/components/Header.tsx`: navigation, language control, and primary action.
- `src/components/Hero.tsx`: opening message and hero image.
- `src/components/Story.tsx`: concise brand introduction.
- `src/components/MenuHighlights.tsx`: four menu categories.
- `src/components/Atmosphere.tsx`: photography-led editorial band.
- `src/components/Visit.tsx`: coming-soon location, opening hours, and email action.
- `src/components/Footer.tsx`: compact repeated navigation and contact details.
- `src/styles/tokens.css`, `src/styles/global.css`, `src/styles/components.css`: shared visual system, layout, components, responsive rules, and motion preferences.
- `src/assets/`: transparent logo and optimized local photography.
- `src/assets/SOURCES.md`: origin and reuse terms for non-generated imagery.
- `src/test/setup.ts`, `src/**/*.test.tsx`: behaviour and accessibility-oriented component tests.

### Task 1: Visual concept and production assets

**Files:**
- Create: `design/buzzy-bean-hero-concept.png`
- Create: `design/buzzy-bean-sections-concept.png`
- Create: `src/assets/buzzy-bean-logo.png`
- Create: `src/assets/coffee-hero.webp`
- Create: `src/assets/cafe-atmosphere.webp`
- Create: `src/assets/SOURCES.md`

**Interfaces:**
- Consumes: supplied logo at `/Users/gunnar/Downloads/WhatsApp Image 2026-10-21 at 18.03.55.jpeg` and the approved design spec.
- Produces: approved visual references plus optimized local assets used by `Hero` and `Atmosphere`.

- [ ] **Step 1: Generate the two coordinated visual references**

Use the frontend-app-builder and imagegen workflows to create a readable desktop hero concept and a coordinated downstream-sections concept. Preserve the approved section order, bilingual control, espresso/amber/cream palette, editorial typography, restrained bee-trail motif, and one-image hero.

- [ ] **Step 2: Obtain the user's visual approval**

Show both concepts and pause. Continue only when the user accepts them; revise the concepts first if requested.

- [ ] **Step 3: Prepare the production logo**

Use Image Gen editing on the supplied image to remove only the pale background. Preserve the mascot, lettering, colours, proportions, and edges exactly; export a transparent PNG and inspect it over both cream and white.

- [ ] **Step 4: Prepare the coffee photography**

Source two commercial-reuse-compatible photographs matching the accepted concept, download local copies, crop and optimize them to WebP, and record each creator, source URL, and licence in `src/assets/SOURCES.md`. If suitable photography cannot be sourced, generate original assets and record them as generated.

- [ ] **Step 5: Verify the asset set**

Open all five images, check transparency/crops at native size, and confirm the logo has not changed. Expected: no white box, no clipped branding, no image below 1600 px on its long edge, and no unrecorded third-party asset.

- [ ] **Step 6: Commit**

```bash
git add design src/assets
git commit -m "design: establish Buzzy Bean visual direction"
```

### Task 2: Application foundation and canonical content

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/content.ts`
- Create: `src/content.test.ts`
- Create: `src/test/setup.ts`

**Interfaces:**
- Consumes: approved copy and fixed facts from the spec.
- Produces: `type Language = 'ro' | 'en'`, `type SiteContent`, `siteContent: Record<Language, SiteContent>`, and the Vite/Vitest runtime used by later tasks.

- [ ] **Step 1: Write the failing content contract tests**

Create tests named `contains_complete_copy_for_each_language`, `keeps_business_facts_identical_between_languages`, and `contains_no_unapproved_business_claims`. Assert two languages, four menu categories per language, the exact email, exact hours, location-coming-soon copy, and absence of prices, street addresses, testimonials, or social URLs.

- [ ] **Step 2: Run the focused test and verify failure**

Run: `npm test -- --run src/content.test.ts`

Expected: FAIL because the application and content module do not exist.

- [ ] **Step 3: Create the Vite/React/TypeScript foundation and content module**

Configure `npm run dev`, `npm run build`, and `npm test`. Define the interfaces and all Romanian/English page copy in `src/content.ts`; keep the fixed email and hours in shared facts referenced by both languages.

- [ ] **Step 4: Run tests and the production build**

Run: `npm test -- --run src/content.test.ts && npm run build`

Expected: tests PASS and Vite emits a production bundle without TypeScript errors.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vite.config.ts tsconfig*.json index.html src/main.tsx src/content.ts src/content.test.ts src/test/setup.ts
git commit -m "feat: add bilingual site foundation"
```

### Task 3: Language state and accessible page structure

**Files:**
- Create: `src/useLanguage.ts`
- Create: `src/useLanguage.test.tsx`
- Create: `src/App.tsx`
- Create: `src/App.test.tsx`
- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/Story.tsx`
- Create: `src/components/MenuHighlights.tsx`
- Create: `src/components/Atmosphere.tsx`
- Create: `src/components/Visit.tsx`
- Create: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `Language`, `SiteContent`, and `siteContent` from Task 2; local images from Task 1.
- Produces: `useLanguage(): { language: Language; setLanguage(language: Language): void }` and the complete semantic page DOM.

- [ ] **Step 1: Write failing language-state tests**

Test that first render is Romanian, `en` and `ro` saved values restore correctly, an invalid saved value falls back to Romanian, selection writes `buzzy-bean-language`, and `document.documentElement.lang` always matches the current selection.

- [ ] **Step 2: Run the hook tests and verify failure**

Run: `npm test -- --run src/useLanguage.test.tsx`

Expected: FAIL because `useLanguage` does not exist.

- [ ] **Step 3: Implement `useLanguage`**

Use the exact key `buzzy-bean-language`, validate stored strings before use, and synchronize the root `lang` attribute in an effect.

- [ ] **Step 4: Write failing application tests**

Test the unique `h1`, semantic `header/main/footer`, exact section IDs `story`, `menu`, and `visit`, all four Romanian categories, usable anchor links, descriptive image alternatives, a `mailto:coffee@buzzybean.ro` link, and language-button accessible names that communicate selected state without colour.

- [ ] **Step 5: Run the application tests and verify failure**

Run: `npm test -- --run src/App.test.tsx`

Expected: FAIL because the page components do not exist.

- [ ] **Step 6: Implement the semantic page components**

Keep `App` as composition glue. Pass the selected `SiteContent` and language state into focused sections. Use code-native navigation, copy, buttons, email links, headings, and category text; import local assets for the logo and photographs.

- [ ] **Step 7: Run the complete test suite**

Run: `npm test -- --run`

Expected: all content, language, and application tests PASS.

- [ ] **Step 8: Commit**

```bash
git add src
git commit -m "feat: build bilingual Buzzy Bean page"
```

### Task 4: Faithful styling, responsiveness, and motion

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Create: `src/styles/components.css`
- Modify: `src/main.tsx`
- Modify: `src/App.test.tsx`

**Interfaces:**
- Consumes: accepted concept images and semantic components from Tasks 1 and 3.
- Produces: responsive layouts and shared classes/tokens used by all page components.

- [ ] **Step 1: Extend tests for styling-critical hooks**

Assert skip-link presence, stable image dimensions, visible text labels on the language buttons, a reduced-motion stylesheet rule, and shared section/container classes rather than section-specific duplicate shells.

- [ ] **Step 2: Run tests and verify the new assertions fail**

Run: `npm test -- --run src/App.test.tsx`

Expected: FAIL on the new styling-critical requirements.

- [ ] **Step 3: Define the design tokens and global rules**

Extract exact palette, spacing, typography, radii, shadows, container width, focus style, and motion timings from the accepted concepts. Add font loading, reset, smooth scrolling, sticky-header scroll margin, and reduced-motion overrides.

- [ ] **Step 4: Implement section styling against the visual references**

Match hero balance, next-section preview, open editorial layout, menu rhythm, image framing, visit band, footer, and bee-trail treatment. Use shared primitives for buttons, containers, headings, and image frames; avoid unapproved cards or visible copy.

- [ ] **Step 5: Implement responsive layouts**

Cover at least 360 px, 768 px, 1024 px, and 1440 px widths. Preserve readable Romanian line breaks, minimum 44 px touch targets, stable image crops, and zero horizontal scrolling.

- [ ] **Step 6: Run tests and build**

Run: `npm test -- --run && npm run build`

Expected: all tests PASS and the production build succeeds.

- [ ] **Step 7: Commit**

```bash
git add src
git commit -m "style: apply Buzzy Bean editorial design"
```

### Task 5: Browser verification and final fidelity pass

**Files:**
- Modify: implementation files only when browser findings require fixes.

**Interfaces:**
- Consumes: complete production build and accepted visual references.
- Produces: browser-verified landing page with no known material visual or interaction defects.

- [ ] **Step 1: Start the site and open it in the built-in browser**

Run: `npm run dev -- --host 127.0.0.1`

Verify the page loads with no console errors or missing assets.

- [ ] **Step 2: Verify the desktop experience**

At the accepted concept's native width, capture the hero and full page. Test header anchors, language switch, persisted reload, email link target, keyboard focus order, section offsets, and image loading.

- [ ] **Step 3: Verify mobile and intermediate widths**

Inspect at 360 × 800, 768 × 1024, and 1024 × 768. Confirm no clipping, overlap, accidental wrapping, horizontal overflow, or inaccessible controls with the longer Romanian copy.

- [ ] **Step 4: Verify motion accessibility**

Emulate reduced motion. Confirm looping or decorative movement is removed while layout and interactions remain intact.

- [ ] **Step 5: Complete the fidelity ledger and fix every material mismatch**

Use `view_image` on the accepted concepts and latest browser captures in the same QA pass. Compare at least copy, first-viewport composition, typography, palette, image treatment, spacing/container model, downstream section rhythm, and responsive behaviour. Fix each mismatch and repeat until agency-signoff quality.

- [ ] **Step 6: Run final automated verification**

Run: `npm test -- --run && npm run build`

Expected: all tests PASS and the production build succeeds.

- [ ] **Step 7: Check repository state and commit final fixes**

Run: `git diff --check && git status --short`

Expected: no whitespace errors and only intentional files present.

```bash
git add src package.json package-lock.json
git commit -m "fix: complete Buzzy Bean browser QA"
```
