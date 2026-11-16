import type { FabricProduct } from './products'

// Supplied directly by the user on 2026-11-16, after the original workbook.
// Preserve the original Chinese specifications for classification; render
// the faithful English translations below. No backing blend is inferred.
export const ADDITIONAL_PRODUCTS: FabricProduct[] = [
  {
    id: 'fabric-543', code: 'FME26CNOO543C', assetKey: 'FME26CNOO543C',
    specification: '32S*100D/170*94 棉锦2/2斜 反面三合一复合40*40/133*72',
    composition: '70%C30%N',
    width: { value: '57/58', unit: 'in' }, weight: { value: 317, unit: 'g/m²' },
    collectionIds: ['outdoor'], garmentIds: [],
    images: { swatch: null, detail: null, garment: null }, reviewIssues: [], status: 'ready',
    source: { sheet: 'User-provided table · 2026-11-16', row: 1 },
    english: {
      name: '32S × 100D / 170 × 94 Cotton-Nylon 2/2 Twill, 3-Layer Lamination with 40 × 40 / 133 × 72 Backing',
      composition: '70%C 30%N', category: 'Cotton / Nylon', stretchType: null,
      finish: '3-layer lamination', remarks: null,
      source: { file: 'User-provided specifications · 2026-11-16', sheet: 'Chat table', row: 1, itemNo: 'FME26CNOO543C', method: 'translated-original' },
    },
  },
  {
    id: 'fabric-544', code: 'FME26POO544C', assetKey: 'FME26POO544C',
    specification: '100D+100D 100D消光高弹春亚纺 反面三合一复合20D尼龙可特',
    composition: '100%P',
    width: { value: '57/58', unit: 'in' }, weight: { value: 158, unit: 'g/m²' },
    collectionIds: ['thermal'], garmentIds: [],
    images: { swatch: null, detail: null, garment: null }, reviewIssues: [], status: 'ready',
    source: { sheet: 'User-provided table · 2026-11-16', row: 2 },
    english: {
      name: '100D+100D Full Dull High-Stretch Polyester Pongee, 3-Layer Lamination with 20D Nylon Kete Backing',
      composition: '100%P', category: 'Polyester', stretchType: 'High stretch',
      finish: '3-layer lamination with 20D nylon backing', remarks: null,
      source: { file: 'User-provided specifications · 2026-11-16', sheet: 'Chat table', row: 2, itemNo: 'FME26POO544C', method: 'translated-original' },
    },
  },
  {
    id: 'fabric-545', code: 'FME26POO545B', assetKey: 'FME26POO545B',
    specification: '75D*150D 阳离子人字斜雪梨纺 反面贴透明膜',
    composition: '100%P',
    width: { value: '57/58', unit: 'in' }, weight: { value: 155, unit: 'g/m²' },
    collectionIds: ['outdoor'], garmentIds: [],
    images: { swatch: null, detail: null, garment: null }, reviewIssues: [], status: 'ready',
    source: { sheet: 'User-provided table · 2026-11-16', row: 3 },
    english: {
      name: '75D × 150D Cationic Herringbone Xueli Fabric, Back Laminated with Transparent Film',
      composition: '100%P', category: 'Polyester', stretchType: null,
      finish: 'Transparent film lamination', remarks: null,
      source: { file: 'User-provided specifications · 2026-11-16', sheet: 'Chat table', row: 3, itemNo: 'FME26POO545B', method: 'translated-original' },
    },
  },
]
