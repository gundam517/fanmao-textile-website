import type { RefObject } from 'react'
import FabricProductDialog from './FabricProductDialog'
import { CATALOG_PRODUCTS, productNumber } from '../data/catalogProducts'

export default function GarmentFabricDetails({ number, garmentId, onClose, opener }: { number: string; garmentId: string; onClose: () => void; opener: RefObject<HTMLButtonElement | null> }) {
  const product = CATALOG_PRODUCTS.find(item => productNumber(item) === number && (number !== '526' || item.code === 'FME26NOO526')) || null
  return <FabricProductDialog product={product} onClose={onClose} opener={opener} initialGarmentId={garmentId} />
}
