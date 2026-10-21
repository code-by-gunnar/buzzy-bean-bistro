# Full menu extension

Approved scope: preserve the existing Buzzy Bean identity and homepage;
add a bilingual full menu based on the owner's poster, update the four
homepage highlights, and link both header/footer menus to the full page.

## Structure and source of truth

- `/` remains the landing page; `/menu/` is a directly addressable static
  page with its own HTML entry, title and description.
- Vite builds both `index.html` and `menu/index.html`. This does not depend
  on a client-side router or catch-all rewrite to open the menu directly.
- Both pages share the header, hamburger disclosure, language persistence,
  branding, design tokens, and footer.
- `src/menuContent.ts` is the canonical source for 25 products: 10 Honey
  Pastries, 5 Honey Specials, 6 Buzzy Brews, and 4 Sweet Combos.
- Product names and prices come from the supplied poster. Names remain the
  same in both languages; descriptions and interface labels are bilingual.
- Honey Madeleines and Honey Almond Bites are priced per piece. Little Bee
  includes 3 madeleines, as specified on the poster.
- The homepage category titles and descriptions are read from the same
  category data, rather than maintained as a second menu.

## Visual implementation

The full menu extends the cream/espresso/amber system, Agbalumo headings,
curved section endings, and photographic style already approved. A compact
intro leads to four sticky category shortcuts. Products are arranged in
open, image-led rows; every name, description, and price is live HTML.
Desktop shows five pastry/special columns, six compact drink columns, and four
combo columns. Drinks use three columns on tablets and two on phones.
Tablet and mobile reduce the column count while retaining
all product information and category navigation.

Product artwork uses 25 individual, text-free transparent WebP assets in
`src/assets/products/`. These were recreated with OpenAI Image Gen using the
owner-supplied poster as a visual reference, preserving the intended product
presentation with consistent lighting. They are illustrative, not documentary
photographs of served dishes. Exact prompts are recorded in
`design/product-image-prompts.json`; the original poster remains as provenance
and is not rendered. `src/productImages.ts` resolves assets by canonical
product ID. Images are lazy-loaded; no poster cropping or clipping is needed.

Allergen, serving-weight, availability, and dietary claims are not inferred.
The page provides an email contact and invites ingredient/allergen questions.
