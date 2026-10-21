// Eager URL imports let Vite fingerprint each independent asset without
// downloading the image until its <img> is needed by the menu.
// Asset filenames match canonical menu product IDs.
const images = import.meta.glob<string>('./assets/products/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function getProductImage(id: string): string | undefined {
  return images[`./assets/products/${id}.webp`]
}
