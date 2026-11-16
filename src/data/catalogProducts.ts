import { FABRIC_PRODUCTS } from './products'
import type { FabricProduct } from './products'
import { GARMENT_APPLICATIONS } from './garments'
import { ADDITIONAL_PRODUCTS } from './additionalProducts'

export function productNumber(product: FabricProduct) {
  return product.code.split('/')[0].match(/(\d{3})[A-Z]*$/)?.[1]
}

export const CATALOG_PRODUCTS: FabricProduct[] = [...FABRIC_PRODUCTS, ...ADDITIONAL_PRODUCTS].map(product => {
  // 526 was explicitly confirmed as the plain version, not 526C.
  const garments = GARMENT_APPLICATIONS.filter(garment => garment.fabricNumber === productNumber(product)
    && (garment.fabricNumber !== '526' || product.code === 'FME26NOO526'))
  return {
    ...product,
    garmentIds: garments.map(garment => garment.id),
    images: { ...product.images, garment: garments.length ? `garments/${garments[0].id}-front-960.jpg` : null },
  }
})
