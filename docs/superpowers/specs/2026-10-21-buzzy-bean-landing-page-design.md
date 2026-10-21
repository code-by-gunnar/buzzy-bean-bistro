# Buzzy Bean Landing Page Design

## Purpose

Create the first public-facing website for Buzzy Bean, a new coffee shop and bistro in Bucharest. The page should make the brand feel cheerful, welcoming, and credible while the physical location and full menu are still being prepared.

The first release is a responsive bilingual landing page for `buzzybean.ro`. Romanian is the default language and visitors can switch to English. The site must not invent a street address, social account, customer quote, or specific product price.

## Audience and goals

The primary audience is people in Bucharest looking for coffee, pastries, or a relaxed daytime bistro. International residents and visitors are the secondary audience.

The page should:

- establish Buzzy Bean's personality and visual identity;
- explain the café and bistro offer at a glance;
- communicate normal opening hours;
- invite visitors to contact `coffee@buzzybean.ro`;
- make it clear that the precise Bucharest location is coming soon;
- provide a polished foundation that can later accept a real menu, address, map, and social links.

## Visual direction

Use a playful editorial style: friendly and characterful, but not childish. The supplied mascot logo is the primary identity and will be prepared as a transparent-background web asset.

The visual system uses:

- espresso brown for text and structure;
- honey amber for calls to action and expressive accents;
- warm cream for primary backgrounds;
- white for contrast and breathing room;
- large rounded display typography paired with a highly readable sans serif;
- candid, warm coffee and café photography with natural light;
- restrained mascot-inspired details such as a curved bee flight path.

Avoid a generic template look, excessive cards, fake badges, invented claims, and busy decorative effects. Motion should be subtle and respect reduced-motion preferences.

## Page structure

### Header

A compact header contains the transparent Buzzy Bean logo, anchor links for Story, Menu, and Visit, an RO/EN language control, and a primary Visit Us action. All navigation copy changes with the selected language.

### Hero

The opening view pairs the headline `Cafea bună. Zile senine.` / `Good coffee. Bright days.` with concise supporting copy, a primary visit action, and one strong coffee-led image. The logo and the first hint of the following section must remain visible without making the viewport crowded.

### Introduction

A short editorial section introduces Buzzy Bean as a cheerful neighbourhood café and daytime bistro in Bucharest. Copy should be warm, direct, and free of unsupported claims.

### Menu highlights

Present four broad categories rather than a detailed or priced menu: espresso and coffee, seasonal drinks, fresh pastries, and light bistro food. Each category has a brief description. This section must be easy to replace with a real menu later.

### Atmosphere

A photography-led section communicates an easygoing, bright, sociable café experience. It uses one or two strong images rather than a dense gallery.

### Visit and contact

Show:

- `Bucharest location coming soon` / `Locația din București va fi anunțată în curând`;
- Monday–Friday, 07:30–19:00;
- Saturday–Sunday, 08:30–18:00;
- `coffee@buzzybean.ro` as a working email link.

The section must not include a map until a real address is supplied.

### Footer

A compact footer repeats the brand, `buzzybean.ro`, contact email, language switcher, and section links. Do not show unconfirmed social links.

## Language behaviour

Romanian is selected on first load. The RO/EN control switches all meaningful page copy without navigation or reload. The selected language is persisted locally for returning visitors. Both language options remain accessible to keyboard and screen-reader users, and the document language attribute updates with the selection.

## Interaction and accessibility

- Header and primary actions scroll to the relevant page section.
- The email address opens the visitor's mail application.
- Interactive elements have visible hover and keyboard-focus states.
- Images include useful alternative text or are marked decorative.
- Text and controls meet WCAG AA contrast expectations.
- Colour is never the sole indicator of language selection or interaction state.
- Layout supports mobile, tablet, and desktop without horizontal overflow.
- Animations are disabled or simplified when reduced motion is requested.

## Technical approach

Build a small React and Vite site with reusable section and UI components, shared design tokens, and a single canonical bilingual content object. Keep all provisional business content in that content module so hours, location, menu categories, and contact details are changed in one place.

Use local optimized image assets. Prepare the supplied JPEG logo as a transparent PNG or WebP while retaining the original source file outside the shipped asset set. Source coffee photography from a reusable-image source with licensing suitable for a commercial website and record source attribution in the repository.

## Verification

Before handoff:

- verify production build and automated checks;
- inspect desktop and mobile layouts in a real browser;
- test every navigation, language, and email interaction;
- confirm the Romanian default and persisted language selection;
- confirm the transparent logo renders cleanly on cream and white;
- check that no placeholder address, price, testimonial, or social account appears;
- compare the browser result against the approved visual concept for copy, hierarchy, palette, typography, imagery, spacing, and responsiveness.

## Deferred work

The following are explicitly outside the first release: online ordering, table booking, a CMS, a complete priced menu, maps, customer reviews, social feeds, and analytics. They can be added once the relevant business details and accounts exist.
