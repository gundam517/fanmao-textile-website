import type { FabricProduct } from './products'

export const FABRIC_CATEGORIES = [
  { id: 'nylon-cotton', no: '01', name: 'Nylon-Cotton Interwoven', description: 'Nylon-cotton woven fabrics and blends.' },
  { id: 'stretch', no: '02', name: 'Stretch Fabrics', description: 'Four-way, warp and weft stretch fabrics.' },
  { id: 'taslan', no: '03', name: 'Taslan', description: 'Nylon and polyester taslan constructions.' },
  { id: 'coated-laminated', no: '04', name: 'Coated & Laminated', description: 'Coated, film-laminated and bonded fabrics.' },
  { id: 'nylon', no: '05', name: 'Nylon', description: 'Nylon fabrics and blends.' },
  { id: 'polyester', no: '06', name: 'Polyester', description: 'Polyester fabrics and blends.' },
  { id: 'printed', no: '07', name: 'Printed', description: 'Printed patterns on woven and stretch bases.' },
  { id: 'reflective-print', no: '08', name: 'Reflective Print', description: 'Reflective printed fabric finishes.' },
  { id: 'cotton-like', no: '09', name: 'Cotton-like', description: 'Cotton-like textures on synthetic bases.' },
  { id: 'linen-cotton', no: '10', name: 'Linen & Cotton Blends', description: 'Linen, linen-cotton and linen-lyocell fabrics.' },
] as const

export type FabricCategory = typeof FABRIC_CATEGORIES[number]
export type FabricCategoryId = FabricCategory['id']

// Material and finish categories can overlap. Match only supplied information.
export function fabricCategoryIds(product: FabricProduct): FabricCategoryId[] {
  if (product.categoryIds) return [...product.categoryIds]
  const construction = product.specification || ''
  const fibers = new Set([...((product.composition || '').matchAll(/\d+(?:\.\d+)?%\s*(Lyocell|SP|P|N|C|L)/gi))]
    .map(match => match[1].toUpperCase()))
  const categories: FabricCategoryId[] = []
  if (fibers.has('N') && fibers.has('C')) categories.push('nylon-cotton')
  if (fibers.has('SP') || /四面弹|经弹|纬弹|高弹|T400|T800|T[48]\b/.test(construction)) categories.push('stretch')
  if (/塔丝隆|涤丝隆/.test(construction)) categories.push('taslan')
  // “复合斜” names a construction rather than a bonded fabric.
  if (/涂层|涂蜡|复合(?!斜)|贴.*膜|透明膜|低透明|中透白|高透白|烫膜|金属膜/.test(construction)) categories.push('coated-laminated')
  if (fibers.has('N')) categories.push('nylon')
  if (fibers.has('P')) categories.push('polyester')
  if (/印花|印刷/.test(construction)) categories.push('printed')
  if (/反光印花/.test(construction)) categories.push('reflective-print')
  if (/仿棉|棉感/.test(construction)) categories.push('cotton-like')
  if (fibers.has('L') || /亚麻/.test(construction)) categories.push('linen-cotton')
  return categories
}
