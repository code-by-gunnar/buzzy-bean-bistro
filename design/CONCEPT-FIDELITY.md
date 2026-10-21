# Buzzy Bean — concept fidelity pass

The five approved PNGs in this directory are the visual authority. This pass
implements that direction rather than creating a replacement design.

## Changes

- Replaced upright Baloo 2 headings with self-hosted Agbalumo brush lettering,
  including Romanian characters. Large two-tone headings, spark accents, and
  underlines follow the references while remaining live, selectable text.
- Replaced the three unrelated stock photographs with four concept-directed
  café scenes: close-up latte, oak interior, friends sharing coffee, and an
  overhead coffee/croissant detail in the menu section.
- Built the horizontal mascot/wordmark identity for the header and the cream
  and amber wordmark for the espresso footer. The supplied original logo is
  retained. The mascot now has a transparent outline rather than a circular
  crop containing pieces of the lettering.
- Rebuilt section proportions, image masks, curved section transitions,
  heart-loop trails, and the visit composition against the approved PNGs.
- Retained both languages, persisted selection, all business facts, section
  links, contact actions, focus indicators, reduced-motion support, and the
  header-height-aware anchor offset from the previous refinement.

## Intentional implementation differences

- Headings use a real licensed webfont rather than embedding lettering from
  generated concept screenshots. The font follows the brush style but is not
  an exact reproduction of every generated letterform.
- Amber foreground text on cream is slightly darker than the mockups to meet
  the 3:1 contrast requirement for large text (3.15:1). Body copy remains
  espresso brown.
- On mobile, the desktop split compositions stack, all three navigation
  targets and language controls remain available through an accessible
  hamburger menu, and the four menu categories become numbered rows.
- The Story action links to the menu and is labelled accordingly, rather than
  presenting a nonfunctional “Our story” link.
- Generated café scenes communicate the approved visual mood and are not
  documentary images of the future Bucharest location. Provenance and prompt
  briefs are recorded in `src/assets/SOURCES.md`.
