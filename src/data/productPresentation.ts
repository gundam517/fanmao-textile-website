import type { FabricProduct } from './products'

export function imageUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}

export function previewSrcSet(path: string) {
  const small = path.replace(/-960\.jpg$/, '-480.jpg')
  if (small === path) return undefined
  return `${imageUrl(small)} 480w, ${imageUrl(path)} 960w`
}

export function displayReference(product: FabricProduct) {
  return product.code.split('#')[0].replace(/\s+/g, '')
}

export function fabricName(product: FabricProduct) {
  return product.english?.name || product.displayName
}

export function compositionText(product: FabricProduct) {
  const value = product.english?.composition || product.composition
  if (!value) return 'Not specified'
  const materials: Record<string, string> = { P: 'Polyester', N: 'Nylon', SP: 'Spandex', C: 'Cotton', L: 'Linen', LYOCELL: 'Lyocell' }
  const pattern = /(\d+(?:\.\d+)?)%\s*(Lyocell|SP|P|N|C|L)/gi
  const parts = [...value.matchAll(pattern)]
  if (!parts.length || value.replace(pattern, '').trim()) return value
  const composition = parts.map(match => `${match[1]}% ${materials[match[2].toUpperCase()]}`).join(' / ')
  return `${composition}${/大概/.test(product.composition || '') ? ' (approx.)' : ''}`
}

export function widthText(product: FabricProduct) {
  return product.width.value && product.width.unit ? `${product.width.value} ${product.width.unit}` : null
}

export function weightText(product: FabricProduct) {
  return product.weight.value !== null && product.weight.unit ? `${product.weight.value} ${product.weight.unit}` : null
}
