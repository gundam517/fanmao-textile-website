// Original specifications remain available for classification and source tracing.
// Customer-facing English descriptions come from the supplied English catalog.
export type FabricCollection = 'outdoor' | 'sports' | 'thermal' | 'comfort'

export interface EnglishFabricDetails {
  name: string | null
  composition: string | null
  category: string | null
  stretchType: string | null
  finish: string | null
  remarks: string | null
  source: {
    file: string
    sheet: string
    row: number
    itemNo: string
    method: 'provided-catalog' | 'translated-original'
  }
}

export interface FabricProduct {
  id: string
  code: string
  displayName?: string
  categoryIds?: import('./fabricCategories').FabricCategoryId[]
  assetKey: string
  specification: string | null
  composition: string | null
  english?: EnglishFabricDetails
  width: { value: string | null; unit: 'in' | 'cm' | null }
  weight: { value: number | null; unit: 'g/m²' | null }
  collectionIds: FabricCollection[]
  garmentIds: string[]
  images: { swatch: string | null; detail: string | null; garment: string | null }
  reviewIssues: string[]
  status: 'draft' | 'ready'
  source: { sheet: string; row: number | null }
}

export const PRODUCT_SOURCE = {
  "file": "product.xlsx",
  "sheet": "Sheet1",
  "sha256": "80ef4c8ae8e23c78187efb2c4eadf8ee72e053b40d10edfabc5dff8c5191857d",
  "importedOn": "2026-11-14",
  "unitsConfirmed": true,
  "codeCorrections": [
    {
      "sheet": "Sheet1",
      "row": 2,
      "originalCode": "l't",
      "correctedCode": "FME26P4S301",
      "confirmedByUserOn": "2026-11-14"
    }
  ],
  "unitsConfirmedByUserOn": "2026-11-14",
  "englishCatalog": {
    "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
    "sheet": "Fabric Catalog",
    "sha256": "284d111f8bb0e20e02c9811d1877440cc5eb38597ca18d0044df98307c8bdd58",
    "importedOn": "2026-11-14",
    "termNormalizations": {
      "雪梨纺": "Xueli fabric"
    }
  }
} as const

export const FABRIC_PRODUCTS: FabricProduct[] = [
  {
    "id": "fme26p4s301",
    "code": "FME26P4S301",
    "assetKey": "FME26P4S301",
    "specification": "50D+20D*50D+20D   50D隐格四面弹",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 120,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S301-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 2
    },
    "english": {
      "name": "50D Subtle Grid 4-Way Stretch",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "product.xlsx",
        "sheet": "Sheet1",
        "row": 2,
        "itemNo": "l't",
        "method": "translated-original"
      }
    }
  },
  {
    "id": "fme26p4s302",
    "code": "FME26P4S302",
    "assetKey": "FME26P4S302",
    "specification": "50D+20D*50D+20D   50D四面弹",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 85,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S302-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 3
    },
    "english": {
      "name": "50D 4-Way Stretch Plain Weave",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 3,
        "itemNo": "FME26P4S302",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s303",
    "code": "FME26P4S303",
    "assetKey": "FME26P4S303",
    "specification": "75D+40D*75D+40D 75D斜纹提花四面弹",
    "composition": "90%P10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 169,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S303-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 4
    },
    "english": {
      "name": "75D Twill Jacquard 4-Way Stretch",
      "composition": "90%P 10%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "Jacquard",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 4,
        "itemNo": "FME26P4S303",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s304",
    "code": "FME26P4S304",
    "assetKey": "FME26P4S304",
    "specification": "75D+40D*75D+40D  75D加捻罗马格",
    "composition": "90%P10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 148,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S304-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 5
    },
    "english": {
      "name": "75D Twisted Roma Grid 4-Way Stretch",
      "composition": "90%P 10%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 5,
        "itemNo": "FME26P4S304",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2s305",
    "code": "FME26P2S305",
    "assetKey": "FME26P2S305",
    "specification": "75D*75D+40D 75D纬弹机包2/2斜",
    "composition": "94%P6%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 122,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2S305-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 6
    },
    "english": {
      "name": "75D Weft Stretch 2/2 Twill (Air-covered)",
      "composition": "94%P 6%SP",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 6,
        "itemNo": "FME26P2S305",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s306",
    "code": "FME26P4S306",
    "assetKey": "FME26P4S306",
    "specification": "75D+40D*75D+40D 75D消光加捻斜纹竖条",
    "composition": "90%P10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 162,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S306-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 7
    },
    "english": {
      "name": "75D Full Dull Twisted Twill Vertical Stripe 4-Way Stretch",
      "composition": "90%P 10%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 7,
        "itemNo": "FME26P4S306",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s307",
    "code": "FME26P4S307",
    "assetKey": "FME26P4S307",
    "specification": "80D+40D*80D+40D 40D/40DD/40D*40D/40D/40D  80D阳涤四面弹",
    "composition": "90%P10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 133,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S307-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 8
    },
    "english": {
      "name": "80D Cationic Polyester 4-Way Stretch",
      "composition": "90%P 10%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "Cationic",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 8,
        "itemNo": "FME26P4S307",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2s308",
    "code": "FME26P2S308",
    "assetKey": "FME26P2S308",
    "specification": "75D*150D+40D 75*150消光纬弹双层",
    "composition": "96%P4%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 217,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2S308-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 9
    },
    "english": {
      "name": "75D×150D Full Dull Weft Stretch Double Layer",
      "composition": "96%P 4%SP",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "Double Layer",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 9,
        "itemNo": "FME26P2S308",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s309",
    "code": "FME26P4S309",
    "assetKey": "FME26P4S309",
    "specification": "75D+40D*75D+40D 75D加捻2/1斜四面弹",
    "composition": "88%P12%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 148,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S309-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 10
    },
    "english": {
      "name": "75D Twisted 2/1 Twill 4-Way Stretch",
      "composition": "88%P 12%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 10,
        "itemNo": "FME26P4S309",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s310",
    "code": "FME26P4S310",
    "assetKey": "FME26P4S310",
    "specification": "75D+40D*75D+40D(75D+40D*2) 75D0.3单线格四面弹",
    "composition": "90%P10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 145,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S310-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 11
    },
    "english": {
      "name": "75D 0.3 Single-line Grid 4-Way Stretch",
      "composition": "90%P 10%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "Ripstop",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 11,
        "itemNo": "FME26P4S310",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s311",
    "code": "FME26P4S311",
    "assetKey": "FME26P4S311",
    "specification": "70D+40D*40D/50D+40D/157*101 锦涤四面弹",
    "composition": "67%N22%P11%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 150,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S311-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 12
    },
    "english": {
      "name": "Nylon-Polyester 4-Way Stretch",
      "composition": "67%N 22%P 11%SP",
      "category": "Blend",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 12,
        "itemNo": "FME26P4S311",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s312",
    "code": "FME26N4S312",
    "assetKey": "FME26N4S312",
    "specification": "50D/30D+30D/30D/40D+50D*50D/30D+30D/30D/40D+50D  锦阳三线格四面弹",
    "composition": "17%P71%N12%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 145,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S312-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 13
    },
    "english": {
      "name": "Nylon-Cationic 3-line Grid 4-Way Stretch",
      "composition": "17%P 71%N 12%SP",
      "category": "Blend",
      "stretchType": "4-Way Stretch",
      "finish": "Ripstop",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 13,
        "itemNo": "FME26N4S312",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s313",
    "code": "FME26P4S313",
    "assetKey": "FME26P4S313",
    "specification": "75D+40D*75D+40D  阳离子格子四面弹",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 145,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S313-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 14
    },
    "english": {
      "name": "Cationic Check 4-Way Stretch",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "Check",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 14,
        "itemNo": "FME26P4S313",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s314",
    "code": "FME26P4S314",
    "assetKey": "FME26P4S314",
    "specification": "75D+40D*75D+40D  75D平纹四面弹",
    "composition": "88%P12%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 120,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S314-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 15
    },
    "english": {
      "name": "75D Plain Weave 4-Way Stretch",
      "composition": "88%P 12%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 15,
        "itemNo": "FME26P4S314",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s315",
    "code": "FME26P4S315",
    "assetKey": "FME26P4S315",
    "specification": "100D+40D*100D+40D 100D平纹四面弹",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 130,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S315-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 16
    },
    "english": {
      "name": "100D Plain Weave 4-Way Stretch",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 16,
        "itemNo": "FME26P4S315",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2s316",
    "code": "FME26P2S316",
    "assetKey": "FME26P2S316",
    "specification": "40S*75D+40D/139*104 纬弹斜纹酷丝绵",
    "composition": "96%P4%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 156,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2S316-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 17
    },
    "english": {
      "name": "40S×75D Weft Stretch Twill Coolmax-like",
      "composition": "96%P 4%SP",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 17,
        "itemNo": "FME26P2S316",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n1s317",
    "code": "FME26N1S317",
    "assetKey": "FME26N1S317",
    "specification": "70D+40D*160D  尼龙经弹斜纹加捻塔丝隆",
    "composition": "95%N5%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 155,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N1S317-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 18
    },
    "english": {
      "name": "70D Nylon Warp Stretch Twisted Taslan",
      "composition": "95%N 5%SP",
      "category": "Nylon",
      "stretchType": "Warp Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 18,
        "itemNo": "FME26N1S317",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s318",
    "code": "FME26N4S318",
    "assetKey": "FME26N4S318",
    "specification": null,
    "composition": "94%N6%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 230,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S318-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [
      "缺规格"
    ],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 19
    },
    "english": {
      "name": "Nylon 4-Way Stretch",
      "composition": "94%N 6%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 19,
        "itemNo": "FME26N4S318",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s319",
    "code": "FME26N4S319",
    "assetKey": "FME26N4S319",
    "specification": "70D+40D*70D+40D 70D尼龙四面弹",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 140,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S319-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 20
    },
    "english": {
      "name": "70D Nylon 4-Way Stretch",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 20,
        "itemNo": "FME26N4S319",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s320",
    "code": "FME26N2S320",
    "assetKey": "FME26N2S320",
    "specification": "40D*40D+20D 40D尼龙纬弹绉布",
    "composition": "95%N5%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 81,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N2S320-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 21
    },
    "english": {
      "name": "40D Nylon Weft Stretch Crepe",
      "composition": "95%N 5%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": "Crepe",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 21,
        "itemNo": "FME26N2S320",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s321",
    "code": "FME26N4S321",
    "assetKey": "FME26N4S321",
    "specification": "40D+20D*40D+20D  40D加捻尼龙四面弹",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 90,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S321-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 22
    },
    "english": {
      "name": "40D Twisted Nylon 4-Way Stretch",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 22,
        "itemNo": "FME26N4S321",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n1s322",
    "code": "FME26N1S322",
    "assetKey": "FME26N1S322",
    "specification": "70+40D*160D+160D   经弹平纹塔丝隆",
    "composition": "95%N5%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 160,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N1S322-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 23
    },
    "english": {
      "name": "70D Nylon Warp Stretch Plain Taslan",
      "composition": "95%N 5%SP",
      "category": "Nylon",
      "stretchType": "Warp Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 23,
        "itemNo": "FME26N1S322",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s323",
    "code": "FME26N4S323",
    "assetKey": "FME26N4S323",
    "specification": "70D+40D*140D+40D  70*140消光尼龙四面弹",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 155,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S323-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 24
    },
    "english": {
      "name": "70D×140D Full Dull Nylon 4-Way Stretch",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 24,
        "itemNo": "FME26N4S323",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s324",
    "code": "FME26N4S324",
    "assetKey": "FME26N4S324",
    "specification": "70D/40D+75D/40D+70D/40D+75D/40D 70D尼龙消光14:2洞洞布四面弹",
    "composition": "88%N12%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 125,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S324-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 25
    },
    "english": {
      "name": "70D Nylon Full Dull 14:2 Hole Mesh 4-Way Stretch",
      "composition": "88%N 12%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Mesh",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 25,
        "itemNo": "FME26N4S324",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s325",
    "code": "FME26N4S325",
    "assetKey": "FME26N4S325",
    "specification": "70D/40D+75D/40D+70D/40D+75D/40D 70D尼龙消光加捻镂空竖条5:2",
    "composition": "88%N12%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 135,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S325-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 26
    },
    "english": {
      "name": "70D Nylon Full Dull Twisted Openwork Vertical Stripe 5:2",
      "composition": "88%N 12%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Openwork",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 26,
        "itemNo": "FME26N4S325",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s326",
    "code": "FME26N4S326",
    "assetKey": "FME26N4S326",
    "specification": "70D/68F 5TZ/40D*70D68F5TZ/40D提点尼龙四面弹",
    "composition": "86%N14%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 175,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S326-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 27
    },
    "english": {
      "name": "70D/68F 5TZ Dot Jacquard Nylon 4-Way Stretch",
      "composition": "86%N 14%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Jacquard",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 27,
        "itemNo": "FME26N4S326",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s327",
    "code": "FME26N4S327",
    "assetKey": "FME26N4S327",
    "specification": "70D+40D*70D+40D 格子尼龙四面弹",
    "composition": "87%N13%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 135,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S327-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 28
    },
    "english": {
      "name": "Nylon Check 4-Way Stretch",
      "composition": "87%N 13%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Check",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 28,
        "itemNo": "FME26N4S327",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s328",
    "code": "FME26N4S328",
    "assetKey": "FME26N4S328",
    "specification": "70D/40*70/30/40+70/40 70D锦涤0.1单线格",
    "composition": "70%N20%P10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 140,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S328-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 29
    },
    "english": {
      "name": "70D Nylon-Polyester 0.1 Single-line Grid",
      "composition": "70%N 20%P 10%SP",
      "category": "Blend",
      "stretchType": "4-Way Stretch",
      "finish": "Ripstop",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 29,
        "itemNo": "FME26N4S328",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s329-534",
    "code": "FME26N4S329/534#丹紫红",
    "assetKey": "FME26N4S329-534",
    "specification": "70D+40D*160D+40D  160D尼龙登山布四面弹现货 534#丹紫红",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S329-534-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 30
    },
    "english": {
      "name": "160D Nylon Mountaineering Fabric 4-Way Stretch (Stock)",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Multiple colors available",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 30,
        "itemNo": "FME26N4S329",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s329-552",
    "code": "FME26N4S329/ 552#灰紫",
    "assetKey": "FME26N4S329-552",
    "specification": "70D+40D*160D+40D  160D尼龙登山布四面弹现货 552#灰紫",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S329-552-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 31
    },
    "english": {
      "name": "160D Nylon Mountaineering Fabric 4-Way Stretch (Stock)",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Multiple colors available",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 30,
        "itemNo": "FME26N4S329",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s329-575",
    "code": "FME26N4S329/575#青年蓝",
    "assetKey": "FME26N4S329-575",
    "specification": "70D+40D*160D+40D  160D尼龙登山布四面弹现货575#青年蓝",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S329-575-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 32
    },
    "english": {
      "name": "160D Nylon Mountaineering Fabric 4-Way Stretch (Stock)",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Multiple colors available",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 30,
        "itemNo": "FME26N4S329",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s329-532",
    "code": "FME26N4S329/532#樱花粉",
    "assetKey": "FME26N4S329-532",
    "specification": "70D+40D*160D+40D  160D尼龙登山布四面弹现货 532#樱花粉",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S329-532-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 33
    },
    "english": {
      "name": "160D Nylon Mountaineering Fabric 4-Way Stretch (Stock)",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Multiple colors available",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 30,
        "itemNo": "FME26N4S329",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s329-530",
    "code": "FME26N4S329/530#黄金甲",
    "assetKey": "FME26N4S329-530",
    "specification": "70D+40D*160D+40D   160D尼龙登山布四面弹现货 530#黄金甲",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S329-530-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 34
    },
    "english": {
      "name": "160D Nylon Mountaineering Fabric 4-Way Stretch (Stock)",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Multiple colors available",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 30,
        "itemNo": "FME26N4S329",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s329-581",
    "code": "FME26N4S329/581#青瓷色",
    "assetKey": "FME26N4S329-581",
    "specification": "70D+40D*160D+40D  160D尼龙登山布四面弹现货 581#青瓷色",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S329-581-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 35
    },
    "english": {
      "name": "160D Nylon Mountaineering Fabric 4-Way Stretch (Stock)",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Multiple colors available",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 30,
        "itemNo": "FME26N4S329",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s329-555",
    "code": "FME26N4S329/555#丈青",
    "assetKey": "FME26N4S329-555",
    "specification": "70D+40D*160D+40D  160D尼龙登山布四面弹现货 555#丈青",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S329-555-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 36
    },
    "english": {
      "name": "160D Nylon Mountaineering Fabric 4-Way Stretch (Stock)",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Multiple colors available",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 30,
        "itemNo": "FME26N4S329",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s329-537",
    "code": "FME26N4S329/537#云间绿",
    "assetKey": "FME26N4S329-537",
    "specification": "70D+40D*160D+40D  160D尼龙登山布四面弹现货 537#云间绿",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S329-537-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 37
    },
    "english": {
      "name": "160D Nylon Mountaineering Fabric 4-Way Stretch (Stock)",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Multiple colors available",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 30,
        "itemNo": "FME26N4S329",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s329-577",
    "code": "FME26N4S329/577#金合欢",
    "assetKey": "FME26N4S329-577",
    "specification": "70D+40D*160D+40D  160D尼龙登山布四面弹现货 577#金合欢",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S329-577-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 38
    },
    "english": {
      "name": "160D Nylon Mountaineering Fabric 4-Way Stretch (Stock)",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Multiple colors available",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 30,
        "itemNo": "FME26N4S329",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s329-582",
    "code": "FME26N4S329/582#遂空蓝",
    "assetKey": "FME26N4S329-582",
    "specification": "70D+40D*160D+40D  160D尼龙登山布四面弹现货 582#遂空蓝",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S329-582-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 39
    },
    "english": {
      "name": "160D Nylon Mountaineering Fabric 4-Way Stretch (Stock)",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Multiple colors available",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 30,
        "itemNo": "FME26N4S329",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s330",
    "code": "FME26N4S330",
    "assetKey": "FME26N4S330",
    "specification": "70D+40D*70D+40D+160D/157*109 160D消光双四链条",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 183,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S330-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 40
    },
    "english": {
      "name": "160D Full Dull Double 4-Way Chain",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 31,
        "itemNo": "FME26N4S330",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s331",
    "code": "FME26N4S331",
    "assetKey": "FME26N4S331",
    "specification": "70D/40D*70D/40D+140D 70*140消光横条登山布",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 211,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S331-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 41
    },
    "english": {
      "name": "70D×140D Full Dull Horizontal Stripe Mountaineering Fabric",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 32,
        "itemNo": "FME26N4S331",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s332",
    "code": "FME26N4S332",
    "assetKey": "FME26N4S332",
    "specification": "70D/40D*70D/40D+160D 尼龙半光珍珠点四面弹",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 158,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S332-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 42
    },
    "english": {
      "name": "70D Nylon Semi-dull Pearl Dot 4-Way Stretch",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Pearl Dot",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 33,
        "itemNo": "FME26N4S332",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s333",
    "code": "FME26N4S333",
    "assetKey": "FME26N4S333",
    "specification": "70D/40D*140D/40D+320D 320D消光双链条",
    "composition": "93%N7%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 238,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S333-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 43
    },
    "english": {
      "name": "70D×320D Full Dull Double Chain",
      "composition": "93%N 7%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 34,
        "itemNo": "FME26N4S333",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s334",
    "code": "FME26N4S334",
    "assetKey": "FME26N4S334",
    "specification": "70D/40D*70D/40D+280D 280D尼龙消光加捻棉感登山布",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 228,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S334-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 44
    },
    "english": {
      "name": "70D×280D Nylon Full Dull Twisted Cotton-feel Mountaineering",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Cotton-feel",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 35,
        "itemNo": "FME26N4S334",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s335",
    "code": "FME26N4S335",
    "assetKey": "FME26N4S335",
    "specification": "70D/40D*70D/40D+160D 尼龙消光珍珠点四面弹",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 175,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S335-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 45
    },
    "english": {
      "name": "70D×160D Nylon Full Dull Pearl Dot 4-Way Stretch",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Pearl Dot",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 36,
        "itemNo": "FME26N4S335",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s336",
    "code": "FME26N4S336",
    "assetKey": "FME26N4S336",
    "specification": "40D/20D+40D/20D+90D*2 180D尼龙消光珍珠点四面弹",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 122,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S336-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 46
    },
    "english": {
      "name": "180D Nylon Full Dull Pearl Dot 4-Way Stretch",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Pearl Dot",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 37,
        "itemNo": "FME26N4S336",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s337",
    "code": "FME26N4S337",
    "assetKey": "FME26N4S337",
    "specification": "70D/40D*70D/40D+320D 320D尼龙消光点子加捻登山布",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 260,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S337-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 47
    },
    "english": {
      "name": "70D×320D Nylon Full Dull Dot Twisted Mountaineering",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 38,
        "itemNo": "FME26N4S337",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s338",
    "code": "FME26N4S338",
    "assetKey": "FME26N4S338",
    "specification": "70D/40D*70D/40D+140D 尼龙登山布四面弹",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 195,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S338-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 48
    },
    "english": {
      "name": "70D×140D Nylon Mountaineering Fabric 4-Way Stretch",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 39,
        "itemNo": "FME26N4S338",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s339",
    "code": "FME26N4S339",
    "assetKey": "FME26N4S339",
    "specification": "70D/40D*70D/40D+320D 尼龙登山布四面弹",
    "composition": "88%N12%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 233,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S339-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 49
    },
    "english": {
      "name": "70D×320D Nylon Mountaineering Fabric 4-Way Stretch",
      "composition": "88%N 12%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 40,
        "itemNo": "FME26N4S339",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s340",
    "code": "FME26N4S340",
    "assetKey": "FME26N4S340",
    "specification": "70D/40D*70D/40D+140D 尼龙登山布四面弹",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 233,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S340-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 50
    },
    "english": {
      "name": "70D×140D Nylon Mountaineering Fabric 4-Way Stretch",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 41,
        "itemNo": "FME26N4S340",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s341",
    "code": "FME26P4S341",
    "assetKey": "FME26P4S341",
    "specification": "75D/40D*75D/40D+150D 星点登山布四面弹",
    "composition": "93%P7%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 183,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S341-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 51
    },
    "english": {
      "name": "75D Star Dot Mountaineering Fabric 4-Way Stretch",
      "composition": "93%P 7%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 42,
        "itemNo": "FME26P4S341",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s342",
    "code": "FME26P4S342",
    "assetKey": "FME26P4S342",
    "specification": "75D/40D*75D/40D+200D/40D 方块登山布四面弹",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 223,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S342-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 52
    },
    "english": {
      "name": "75D Block Mountaineering Fabric 4-Way Stretch",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 43,
        "itemNo": "FME26P4S342",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s343",
    "code": "FME26P4S343",
    "assetKey": "FME26P4S343",
    "specification": "50D/20D*50D/20D+75D 双链条登山布四面弹",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 110,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S343-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 53
    },
    "english": {
      "name": "50D Double Chain Mountaineering Fabric 4-Way Stretch",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 44,
        "itemNo": "FME26P4S343",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s344",
    "code": "FME26P4S344",
    "assetKey": "FME26P4S344",
    "specification": "75D/40D*75D/40D+300D 横条提点登山布四面弹",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 190,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S344-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 54
    },
    "english": {
      "name": "75D Horizontal Stripe Dot Mountaineering Fabric 4-Way Stretch",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 45,
        "itemNo": "FME26P4S344",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s345",
    "code": "FME26P4S345",
    "assetKey": "FME26P4S345",
    "specification": "75D/40D*75D/40D+300D 格子登山布四面弹",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 244,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S345-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 55
    },
    "english": {
      "name": "75D Check Mountaineering Fabric 4-Way Stretch",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 46,
        "itemNo": "FME26P4S345",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s346",
    "code": "FME26N4S346",
    "assetKey": "FME26N4S346",
    "specification": "70D+40D*70D+40D 70D消光无捻0.4双线格",
    "composition": "88%N12%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 154,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S346-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 56
    },
    "english": {
      "name": "70D Full Dull Non-twisted 0.4 Double-line Grid",
      "composition": "88%N 12%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Ripstop",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 47,
        "itemNo": "FME26N4S346",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n1s347",
    "code": "FME26N1S347",
    "assetKey": "FME26N1S347",
    "specification": "70D+40D*160D/2 127*71 160D双纬消光平纹尼龙经弹",
    "composition": "96%N4%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 165,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N1S347-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 57
    },
    "english": {
      "name": "160D Double Weft Full Dull Plain Nylon Warp Stretch",
      "composition": "96%N 4%SP",
      "category": "Nylon",
      "stretchType": "Warp Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 48,
        "itemNo": "FME26N1S347",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s348",
    "code": "FME26N2S348",
    "assetKey": "FME26N2S348",
    "specification": "160D*140D+40D 127*93 纬弹2/1斜 NW123",
    "composition": "95%N5%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 188,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 58
    },
    "english": {
      "name": "160D×140D Weft Stretch 2/1 Twill NW123",
      "composition": "95%N 5%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 49,
        "itemNo": "FME26N2S348",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s349",
    "code": "FME26N4S349",
    "assetKey": "FME26N4S349",
    "specification": "140D+70D*140D+70D/139*76 140D半光加捻横条四面弹",
    "composition": "86%N14%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 235,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S349-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 59
    },
    "english": {
      "name": "140D Semi-dull Twisted Horizontal Stripe 4-Way Stretch",
      "composition": "86%N 14%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 50,
        "itemNo": "FME26N4S349",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s350",
    "code": "FME26N2S350",
    "assetKey": "FME26N2S350",
    "specification": "160D*140D+40D/3 114*38  消光尼龙单经三纬纬弹",
    "composition": "95%N5%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 200,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N2S350-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 60
    },
    "english": {
      "name": "160D×140D Full Dull Single Warp Triple Weft Weft Stretch",
      "composition": "95%N 5%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 51,
        "itemNo": "FME26N2S350",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s351",
    "code": "FME26N4S351",
    "assetKey": "FME26N4S351",
    "specification": "70D+40D/2*70D+40D/2 106*96 70D消光双经双纬四面弹",
    "composition": "85%N15%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 210,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S351-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 61
    },
    "english": {
      "name": "70D Full Dull Double Warp Double Weft 4-Way Stretch",
      "composition": "85%N 15%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 52,
        "itemNo": "FME26N4S351",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s352",
    "code": "FME26N2S352",
    "assetKey": "FME26N2S352",
    "specification": "160D消光*140D+40D/2 114*66  160D消半光单经双纬纬弹NT198",
    "composition": "96%N4%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 211,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N2S352-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 62
    },
    "english": {
      "name": "160D Full Dull Semi-dull Single Warp Double Weft Weft Stretch NT198",
      "composition": "96%N 4%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 53,
        "itemNo": "FME26N2S352",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s353",
    "code": "FME26N4S353",
    "assetKey": "FME26N4S353",
    "specification": "40D+20D*30D+20D/70D+40D/203*101 半光加捻5:2横条",
    "composition": "85%N15%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 111,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S353-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 63
    },
    "english": {
      "name": "Semi-dull Twisted 5:2 Horizontal Stripe",
      "composition": "85%N 15%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 54,
        "itemNo": "FME26N4S353",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s354",
    "code": "FME26N4S354",
    "assetKey": "FME26N4S354",
    "specification": "70D68F+40D*160D/136F+40D/147*101 消光塔丝隆四面弹 高密",
    "composition": "90%N10%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 175,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S354-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 64
    },
    "english": {
      "name": "70D/68F Full Dull Taslan 4-Way Stretch High Density",
      "composition": "90%N 10%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Taslan",
      "remarks": "High Density",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 55,
        "itemNo": "FME26N4S354",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s355",
    "code": "FME26N2S355",
    "assetKey": "FME26N2S355",
    "specification": "90D*70D+40D/147*96 消光尼龙纬弹塔丝隆",
    "composition": "96%N4%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 125,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N2S355-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 65
    },
    "english": {
      "name": "90D×70D Full Dull Nylon Weft Stretch Taslan",
      "composition": "96%N 4%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 56,
        "itemNo": "FME26N2S355",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s356",
    "code": "FME26N2S356",
    "assetKey": "FME26N2S356",
    "specification": "70D*70D+40D/177*96 70D消半光尼龙纬弹",
    "composition": "93%N7%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 110,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N2S356-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 66
    },
    "english": {
      "name": "70D Semi-dull Nylon Weft Stretch",
      "composition": "93%N 7%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 57,
        "itemNo": "FME26N2S356",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s357",
    "code": "FME26N2S357",
    "assetKey": "FME26N2S357",
    "specification": "160D*70D+40D/114*96  0.5双线格纬弹塔丝隆",
    "composition": "95%N5%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 139,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N2S357-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 67
    },
    "english": {
      "name": "160D×70D 0.5 Double-line Grid Weft Stretch Taslan",
      "composition": "95%N 5%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": "Taslan",
      "remarks": "Ripstop",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 58,
        "itemNo": "FME26N2S357",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s358",
    "code": "FME26N2S358",
    "assetKey": "FME26N2S358",
    "specification": "90D*70D+40D/139*101 全消光0.2双线格纬弹",
    "composition": "94%N6%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 130,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N2S358-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 68
    },
    "english": {
      "name": "90D×70D Full Dull 0.2 Double-line Grid Weft Stretch",
      "composition": "94%N 6%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": "Ripstop",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 59,
        "itemNo": "FME26N2S358",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s359",
    "code": "FME26N4S359",
    "assetKey": "FME26N4S359",
    "specification": "70D+40D*70D+40D/203*127 半光加捻2/1左上斜四面弹",
    "composition": "86%N14%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 165,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S359-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 69
    },
    "english": {
      "name": "70D Semi-dull Twisted 2/1 Left Twill 4-Way Stretch",
      "composition": "86%N 14%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 60,
        "itemNo": "FME26N4S359",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s360",
    "code": "FME26N2S360",
    "assetKey": "FME26N2S360",
    "specification": "90D*90D+40D 144*96 消光尼龙纬弹塔丝隆",
    "composition": "95%N5%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 120,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N2S360-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 70
    },
    "english": {
      "name": "90D×90D Full Dull Nylon Weft Stretch Taslan",
      "composition": "95%N 5%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 61,
        "itemNo": "FME26N2S360",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s361",
    "code": "FME26N4S361",
    "assetKey": "FME26N4S361",
    "specification": "70D+40D*70D+40D/152*119 半光加捻小竖条四面弹",
    "composition": "86%N14%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 141,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S361-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 71
    },
    "english": {
      "name": "70D Semi-dull Twisted Small Vertical Stripe 4-Way Stretch",
      "composition": "86%N 14%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 62,
        "itemNo": "FME26N4S361",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s362",
    "code": "FME26N2S362",
    "assetKey": "FME26N2S362",
    "specification": "90D*70D+40D2/1 170*119 人字斜尼龙纬弹",
    "composition": "94%N6%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 134,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N2S362-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 72
    },
    "english": {
      "name": "90D×70D Herringbone Nylon Weft Stretch",
      "composition": "94%N 6%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": "Herringbone",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 63,
        "itemNo": "FME26N2S362",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n2s363",
    "code": "FME26N2S363",
    "assetKey": "FME26N2S363",
    "specification": "140D*70D+40D/139*81 全消光单线格纬弹",
    "composition": "94%N6%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 151,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N2S363-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 73
    },
    "english": {
      "name": "140D×70D Full Dull Single-line Grid Weft Stretch",
      "composition": "94%N 6%SP",
      "category": "Nylon",
      "stretchType": "Weft Stretch",
      "finish": "Ripstop",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 64,
        "itemNo": "FME26N2S363",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s364",
    "code": "FME26N4S364",
    "assetKey": "FME26N4S364",
    "specification": "70D+40D*70D+40D+300D/147*114 300D消光锦涤双链条登山布",
    "composition": "65%N30%P5%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 199,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S364-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 74
    },
    "english": {
      "name": "70D×300D Full Dull Nylon-Polyester Double Chain Mountaineering",
      "composition": "65%N 30%P 5%SP",
      "category": "Blend",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 65,
        "itemNo": "FME26N4S364",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n1s365",
    "code": "FME26N1S365",
    "assetKey": "FME26N1S365",
    "specification": "70D+40D*320D/109*78 半消半骑兵斜尼龙经弹",
    "composition": "96%N4%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 165,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N1S365-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 75
    },
    "english": {
      "name": "70D×320D Semi-dull Cavalry Twill Nylon Warp Stretch",
      "composition": "96%N 4%SP",
      "category": "Nylon",
      "stretchType": "Warp Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 66,
        "itemNo": "FME26N1S365",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s366",
    "code": "FME26N4S366",
    "assetKey": "FME26N4S366",
    "specification": "70D+40D*70D+40D 70D0.1消光单线格四面弹",
    "composition": "86%N14%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 156,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S366-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 76
    },
    "english": {
      "name": "70D 0.1 Full Dull Single-line Grid 4-Way Stretch",
      "composition": "86%N 14%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Ripstop",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 67,
        "itemNo": "FME26N4S366",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo367",
    "code": "FME26NOO367",
    "assetKey": "FME26NOO367",
    "specification": "70D*160D 228T锦涤塔丝隆",
    "composition": "75%N25%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 105,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO367-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 77
    },
    "english": {
      "name": "70D×160D 228T Nylon-Polyester Taslan",
      "composition": "75%N 25%P",
      "category": "Blend",
      "stretchType": "Non-Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 68,
        "itemNo": "FME26NOO367",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo368",
    "code": "FME26NOO368",
    "assetKey": "FME26NOO368",
    "specification": "70D*70D 280T闪光尼龙",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 95,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO368-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 78
    },
    "english": {
      "name": "70D×70D 280T Shiny Nylon",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 69,
        "itemNo": "FME26NOO368",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo369",
    "code": "FME26NOO369",
    "assetKey": "FME26NOO369",
    "specification": "30D*50D 430T半弹全消光尼龙",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 75,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO369-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 79
    },
    "english": {
      "name": "30D×50D 430T Semi-stretch Full Dull Nylon",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 70,
        "itemNo": "FME26NOO369",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo370",
    "code": "FME26NOO370",
    "assetKey": "FME26NOO370",
    "specification": "40D*40D 420T消光长丝起皱尼丝纺",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 85,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO370-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 80
    },
    "english": {
      "name": "40D×40D 420T Full Dull Filament Crepe Nylon Taffeta",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Crepe",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 71,
        "itemNo": "FME26NOO370",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo371",
    "code": "FME26NOO371",
    "assetKey": "FME26NOO371",
    "specification": "15D*15D  550T低弹起皱尼丝纺",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 41,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO371-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 81
    },
    "english": {
      "name": "15D×15D 550T Low-stretch Crepe Nylon Taffeta",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Crepe",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 72,
        "itemNo": "FME26NOO371",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo371e",
    "code": "FME26NOO371E",
    "assetKey": "FME26NOO371E",
    "specification": "15D*15D  550T低弹起皱尼丝纺 反面水洗轧光",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 41,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 82
    },
    "english": {
      "name": "15D×15D 550T Low-stretch Crepe Nylon Taffeta (Back Cire)",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Crepe + Back Cire",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 73,
        "itemNo": "FME26NOO371E",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo372",
    "code": "FME26NOO372",
    "assetKey": "FME26NOO372",
    "specification": "40D*90D 消光尼龙长丝塔丝隆骑兵斜",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 85,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO372-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 83
    },
    "english": {
      "name": "40D×90D Full Dull Nylon Filament Taslan Cavalry Twill",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 74,
        "itemNo": "FME26NOO372",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo373",
    "code": "FME26NOO373",
    "assetKey": "FME26NOO373",
    "specification": "10D*10D 7F 0.12半光尼龙浮格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 29,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO373-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 84
    },
    "english": {
      "name": "10D×10D 7F 0.12 Semi-dull Nylon Float Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 75,
        "itemNo": "FME26NOO373",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo374",
    "code": "FME26NOO374",
    "assetKey": "FME26NOO374",
    "specification": "10D*10D 7F 0.15半光尼龙浮格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 29,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO374-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 85
    },
    "english": {
      "name": "10D×10D 7F 0.15 Semi-dull Nylon Float Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 76,
        "itemNo": "FME26NOO374",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo375",
    "code": "FME26NOO375",
    "assetKey": "FME26NOO375",
    "specification": "10D*10D 7F 0.1半光尼龙浮格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 29,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO375-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 86
    },
    "english": {
      "name": "10D×10D 7F 0.1 Semi-dull Nylon Float Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 77,
        "itemNo": "FME26NOO375",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo376",
    "code": "FME26NOO376",
    "assetKey": "FME26NOO376",
    "specification": "10D*10D 7F 0.12半光尼龙回字格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 25,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO376-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 87
    },
    "english": {
      "name": "10D×10D 7F 0.12 Semi-dull Nylon Square Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 78,
        "itemNo": "FME26NOO376",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo377",
    "code": "FME26NOO377",
    "assetKey": "FME26NOO377",
    "specification": "15D/6F+40D/34F*15D/6F+40D/34F 半消光尼龙明水格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 33,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO377-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 88
    },
    "english": {
      "name": "15D/6F+40D/34F Semi-dull Nylon Water Drop Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 79,
        "itemNo": "FME26NOO377",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo378",
    "code": "FME26NOO378",
    "assetKey": "FME26NOO378",
    "specification": "20D*45D 经低弹半消光尼龙塔丝隆",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 53,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO378-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 89
    },
    "english": {
      "name": "20D×45D Low-stretch Semi-dull Nylon Taslan",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 80,
        "itemNo": "FME26NOO378",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo379",
    "code": "FME26NOO379",
    "assetKey": "FME26NOO379",
    "specification": "40D*45D+90D 低弹子母条塔丝隆",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 81,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO379-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 90
    },
    "english": {
      "name": "40D×45D+90D Low-stretch Mother-daughter Stripe Taslan",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 81,
        "itemNo": "FME26NOO379",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo380",
    "code": "FME26NOO380",
    "assetKey": "FME26NOO380",
    "specification": "40D*68D 消光尼龙塔丝隆",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 75,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO380-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 91
    },
    "english": {
      "name": "40D×68D Full Dull Nylon Taslan",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 82,
        "itemNo": "FME26NOO380",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo381",
    "code": "FME26NOO381",
    "assetKey": "FME26NOO381",
    "specification": "20D/24F*45D/48F 经长丝纬加密全消光尼龙塔丝隆",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 63,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO381-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 92
    },
    "english": {
      "name": "20D/24F×45D/48F Full Dull Nylon Taslan (Warp Filament, Weft Dense)",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 83,
        "itemNo": "FME26NOO381",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo382",
    "code": "FME26NOO382",
    "assetKey": "FME26NOO382",
    "specification": "20D/7F*30D/12F+68D/68F 半消光空变子母条",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 61,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO382-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 93
    },
    "english": {
      "name": "20D/7F×30D/12F+68D/68F Semi-dull Air-textured Mother-daughter Stripe",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 84,
        "itemNo": "FME26NOO382",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo383",
    "code": "FME26NOO383",
    "assetKey": "FME26NOO383",
    "specification": "70D*90D 90D塔丝隆2/2斜消光",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 110,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO383-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 94
    },
    "english": {
      "name": "70D×90D 90D Taslan 2/2 Twill Full Dull",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 85,
        "itemNo": "FME26NOO383",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo384",
    "code": "FME26NOO384",
    "assetKey": "FME26NOO384",
    "specification": "15D/10F*15D/34F 15D经66半消光弹丝尼龙",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 34,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO384-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 95
    },
    "english": {
      "name": "15D/10F×15D/34F 15D Semi-dull Stretch Nylon",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 86,
        "itemNo": "FME26NOO384",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo385",
    "code": "FME26NOO385",
    "assetKey": "FME26NOO385",
    "specification": "70D*160D 塔丝隆骑兵斜消光",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 109,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO385-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 96
    },
    "english": {
      "name": "70D×160D Taslan Cavalry Twill Full Dull",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 87,
        "itemNo": "FME26NOO385",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo386",
    "code": "FME26NOO386",
    "assetKey": "FME26NOO386",
    "specification": "30D/36F*30D/36F 消光低弹尼龙菱形格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 54,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO386-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 97
    },
    "english": {
      "name": "30D/36F×30D/36F Full Dull Low-stretch Nylon Diamond Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 88,
        "itemNo": "FME26NOO386",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo387",
    "code": "FME26NOO387",
    "assetKey": "FME26NOO387",
    "specification": "10D/7F*10D/7F 0.3半光尼龙单线格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 31,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO387-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 98
    },
    "english": {
      "name": "10D/7F×10D/7F 0.3 Semi-dull Nylon Single-line Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Ripstop",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 89,
        "itemNo": "FME26NOO387",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo388",
    "code": "FME26NOO388",
    "assetKey": "FME26NOO388",
    "specification": "10D/7F*10D/7F+40D 0.12圆孔尼龙单线浮格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 28,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO388-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 99
    },
    "english": {
      "name": "10D/7F×10D/7F+40D 0.12 Round-hole Nylon Single-line Float Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 90,
        "itemNo": "FME26NOO388",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo389",
    "code": "FME26NOO389",
    "assetKey": "FME26NOO389",
    "specification": "10D/7F*10D/7F+30D 0.15*0.15圆孔尼龙单线浮格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 28,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO389-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 100
    },
    "english": {
      "name": "10D/7F×10D/7F+30D 0.15×0.15 Round-hole Nylon Single-line Float Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 91,
        "itemNo": "FME26NOO389",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo390",
    "code": "FME26NOO390",
    "assetKey": "FME26NOO390",
    "specification": "15D半光*15D圆孔 0.15尼龙单线格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 29,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO390-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 101
    },
    "english": {
      "name": "15D Semi-dull×15D Round-hole 0.15 Nylon Single-line Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Ripstop",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 92,
        "itemNo": "FME26NOO390",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo391",
    "code": "FME26NOO391",
    "assetKey": "FME26NOO391",
    "specification": "15D*40D 有光尼龙明水珠",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 32,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO391-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 102
    },
    "english": {
      "name": "15D×40D Shiny Nylon Water Drop Pearl",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 93,
        "itemNo": "FME26NOO391",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo392",
    "code": "FME26NOO392",
    "assetKey": "FME26NOO392",
    "specification": "70D*160D 335T起皱尼丝纺",
    "composition": "100%N",
    "width": {
      "value": "54/55",
      "unit": "in"
    },
    "weight": {
      "value": 195,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO392-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 103
    },
    "english": {
      "name": "70D×160D 335T Crepe Nylon Taffeta",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Crepe",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 94,
        "itemNo": "FME26NOO392",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo393e",
    "code": "FME26NOO393E",
    "assetKey": "FME26NOO393E",
    "specification": "15D*15D 尼龙66 反面轧光",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 57,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO393E-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 104
    },
    "english": {
      "name": "15D×15D Nylon 66 (Back Cire)",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Back Cire",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 95,
        "itemNo": "FME26NOO393E",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo394",
    "code": "FME26NOO394",
    "assetKey": "FME26NOO394",
    "specification": "400D*500D 尼龙牛津布",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 195,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO394-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 105
    },
    "english": {
      "name": "400D×500D Nylon Oxford",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Oxford",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 96,
        "itemNo": "FME26NOO394",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo395",
    "code": "FME26NOO395",
    "assetKey": "FME26NOO395",
    "specification": "200D*300D 尼龙牛津布",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 123,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO395-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 106
    },
    "english": {
      "name": "200D×300D Nylon Oxford",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Oxford",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 97,
        "itemNo": "FME26NOO395",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo396",
    "code": "FME26NOO396",
    "assetKey": "FME26NOO396",
    "specification": "500D*500D  500DN66牛津布",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 219,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO396-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 107
    },
    "english": {
      "name": "500D×500D Nylon 66 Oxford",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Oxford",
      "remarks": "Nylon 66",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 98,
        "itemNo": "FME26NOO396",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo397",
    "code": "FME26NOO397",
    "assetKey": "FME26NOO397",
    "specification": "1050D*1050D 1050DN66牛津布",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 328,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO397-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 108
    },
    "english": {
      "name": "1050D×1050D Nylon 66 Oxford",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Oxford",
      "remarks": "Nylon 66, Heavy Duty",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 99,
        "itemNo": "FME26NOO397",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo398",
    "code": "FME26POO398",
    "assetKey": "FME26POO398",
    "specification": "35D*35D 35D高F春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 65,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO398-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 109
    },
    "english": {
      "name": "35D×35D 35D High-F Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 100,
        "itemNo": "FME26POO398",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo399",
    "code": "FME26POO399",
    "assetKey": "FME26POO399",
    "specification": "30D*30D 410T阳离子春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 58,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO399-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 110
    },
    "english": {
      "name": "30D×30D 410T Cationic Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Cationic",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 101,
        "itemNo": "FME26POO399",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t400",
    "code": "FME26P2T400",
    "assetKey": "FME26P2T400",
    "specification": "20D*30DT800 锦涤纬T800",
    "composition": "45%N55%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 54,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T400-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 111
    },
    "english": {
      "name": "20D×30D T800 Nylon-Polyester Weft T800",
      "composition": "45%N 55%P",
      "category": "Blend",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 102,
        "itemNo": "FME26P2T400",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo401",
    "code": "FME26POO401",
    "assetKey": "FME26POO401",
    "specification": "50D*50D 280T高F春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 63,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO401-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 112
    },
    "english": {
      "name": "50D×50D 280T High-F Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 103,
        "itemNo": "FME26POO401",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo402",
    "code": "FME26POO402",
    "assetKey": "FME26POO402",
    "specification": "60D*60D  60D高弹春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 65,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO402-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 113
    },
    "english": {
      "name": "60D×60D 60D High-stretch Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "High Elastic",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 104,
        "itemNo": "FME26POO402",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo403",
    "code": "FME26POO403",
    "assetKey": "FME26POO403",
    "specification": "150D*150D 150D平纹阳离子",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 116,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO403-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 114
    },
    "english": {
      "name": "150D×150D 150D Plain Cationic",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Cationic",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 105,
        "itemNo": "FME26POO403",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo404",
    "code": "FME26POO404",
    "assetKey": "FME26POO404",
    "specification": "100D*100D 100D平纹高弹雪梨纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 95,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO404-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 115
    },
    "english": {
      "name": "100D×100D 100D Plain High-stretch Xueli fabric",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Xueli fabric",
      "remarks": "High Elastic",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 106,
        "itemNo": "FME26POO404",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo405",
    "code": "FME26POO405",
    "assetKey": "FME26POO405",
    "specification": "150D*150D 150D高弹阳离子",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 130,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO405-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 116
    },
    "english": {
      "name": "150D×150D 150D High-stretch Cationic",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Cationic",
      "remarks": "High Elastic",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 107,
        "itemNo": "FME26POO405",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo406",
    "code": "FME26POO406",
    "assetKey": "FME26POO406",
    "specification": "80D*80D 80D阳离子雪梨纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 86,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO406-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 117
    },
    "english": {
      "name": "80D×80D 80D Cationic Xueli fabric",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Cationic",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 108,
        "itemNo": "FME26POO406",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo407e",
    "code": "FME26POO407E",
    "assetKey": "FME26POO407E",
    "specification": "30D*30D 400T春亚纺 反面轧光",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 56,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO407E-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 118
    },
    "english": {
      "name": "30D×30D 400T Pongee (Back Cire)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Back Cire",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 109,
        "itemNo": "FME26POO407E",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo408",
    "code": "FME26POO408",
    "assetKey": "FME26POO408",
    "specification": "25D*25D 560T缎面春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 62,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO408-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 119
    },
    "english": {
      "name": "25D×25D 560T Satin Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Satin",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 110,
        "itemNo": "FME26POO408",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo409",
    "code": "FME26POO409",
    "assetKey": "FME26POO409",
    "specification": "30D+30D*35D+30D 390T0.4钻石格春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 57,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO409-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 120
    },
    "english": {
      "name": "30D+30D×35D+30D 390T 0.4 Diamond Grid Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Diamond Grid",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 111,
        "itemNo": "FME26POO409",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo410",
    "code": "FME26POO410",
    "assetKey": "FME26POO410",
    "specification": "15D/36F*15D/36F 520T春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 34,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO410-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 121
    },
    "english": {
      "name": "15D/36F×15D/36F 520T Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Ultra-light",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 112,
        "itemNo": "FME26POO410",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo411",
    "code": "FME26POO411",
    "assetKey": "FME26POO411",
    "specification": "30D/72F*30D钻石丝 钻石丝足球格春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 63,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO411-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 122
    },
    "english": {
      "name": "30D/72F×30D Diamond Yarn Football Grid Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Diamond Yarn",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 113,
        "itemNo": "FME26POO411",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo412",
    "code": "FME26POO412",
    "assetKey": "FME26POO412",
    "specification": "30D*30D+30D  钻石横条11:3",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 57,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO412-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 123
    },
    "english": {
      "name": "30D×30D+30D Diamond Horizontal Stripe 11:3 Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Diamond Stripe",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 114,
        "itemNo": "FME26POO412",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo413",
    "code": "FME26POO413",
    "assetKey": "FME26POO413",
    "specification": "25D/72F+30D/8F*25D/72F+30D/8F 钻石丝菱形格春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 62,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO413-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 124
    },
    "english": {
      "name": "25D/72F+30D/8F Diamond Yarn Diamond Grid Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Diamond Yarn",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 115,
        "itemNo": "FME26POO413",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo414",
    "code": "FME26POO414",
    "assetKey": "FME26POO414",
    "specification": "30D*30D 30D0.1钻石格春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 57,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO414-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 125
    },
    "english": {
      "name": "30D×30D 30D 0.1 Diamond Grid Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Diamond Grid",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 116,
        "itemNo": "FME26POO414",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo415",
    "code": "FME26POO415",
    "assetKey": "FME26POO415",
    "specification": "15D/36F*20D/48F 600T2/1斜纬捻斜纹春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 47,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO415-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 126
    },
    "english": {
      "name": "15D/36F×20D/48F 600T 2/1 Twill Weft-twisted Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Twill",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 117,
        "itemNo": "FME26POO415",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo416",
    "code": "FME26POO416",
    "assetKey": "FME26POO416",
    "specification": "20D*20D 460T骑兵斜涤丝纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 43,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO416-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 127
    },
    "english": {
      "name": "20D×20D 460T Cavalry Twill Polyester Taffeta",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Taffeta",
      "remarks": "Twill",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 118,
        "itemNo": "FME26POO416",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo417",
    "code": "FME26POO417",
    "assetKey": "FME26POO417",
    "specification": "15D/12F*15D/12F 410T0.3双线格涤丝纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 33,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO417-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 128
    },
    "english": {
      "name": "15D/12F×15D/12F 410T 0.3 Double-line Grid Polyester Taffeta",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Taffeta",
      "remarks": "Ripstop",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 119,
        "itemNo": "FME26POO417",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo418",
    "code": "FME26POO418",
    "assetKey": "FME26POO418",
    "specification": "10D/6F*10D/6F 348T涤丝纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 17,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO418-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 129
    },
    "english": {
      "name": "10D/6F×10D/6F 348T Polyester Taffeta",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Taffeta",
      "remarks": "Ultra-light",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 120,
        "itemNo": "FME26POO418",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo419",
    "code": "FME26POO419",
    "assetKey": "FME26POO419",
    "specification": "20D/24F*20D/24F 500T春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 48,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO419-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 130
    },
    "english": {
      "name": "20D/24F×20D/24F 500T Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 121,
        "itemNo": "FME26POO419",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo420",
    "code": "FME26POO420",
    "assetKey": "FME26POO420",
    "specification": "30D/24F*30D/24F 420T黑丝有光提点",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 60,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO420-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 131
    },
    "english": {
      "name": "30D/24F×30D/24F 420T Black Yarn Shiny Dot Jacquard",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Jacquard",
      "remarks": "Shiny Dot",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 122,
        "itemNo": "FME26POO420",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo421",
    "code": "FME26POO421",
    "assetKey": "FME26POO421",
    "specification": "15D/12F*15D/12F 410T隐条格子涤丝纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 32,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO421-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 132
    },
    "english": {
      "name": "15D/12F×15D/12F 410T Hidden Stripe Grid Polyester Taffeta",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Taffeta",
      "remarks": "Hidden Stripe",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 123,
        "itemNo": "FME26POO421",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo422",
    "code": "FME26POO422",
    "assetKey": "FME26POO422",
    "specification": "20D/12F*20D/12F 418T闪光亮丽绸",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 40,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO422-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 133
    },
    "english": {
      "name": "20D/12F×20D/12F 418T Shiny Bright Silk",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bright Silk",
      "remarks": "Shiny",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 124,
        "itemNo": "FME26POO422",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo423",
    "code": "FME26POO423",
    "assetKey": "FME26POO423",
    "specification": "30D/72F+30D/18F*30D/72F+30D/18F 钻石丝乱隐格",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 53,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO423-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 134
    },
    "english": {
      "name": "30D/72F+30D/18F Diamond Yarn Random Hidden Grid",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": "Diamond Yarn",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 125,
        "itemNo": "FME26POO423",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo424",
    "code": "FME26POO424",
    "assetKey": "FME26POO424",
    "specification": "30D/72F*30D/72F 600T缎面半光春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 83,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO424-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 135
    },
    "english": {
      "name": "30D/72F×30D/72F 600T Satin Semi-dull Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Satin",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 126,
        "itemNo": "FME26POO424",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo425",
    "code": "FME26POO425",
    "assetKey": "FME26POO425",
    "specification": "30D*30D 0.25单线钻石格春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 57,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO425-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 136
    },
    "english": {
      "name": "30D×30D 0.25 Single-line Diamond Grid Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Diamond Grid",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 127,
        "itemNo": "FME26POO425",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo426",
    "code": "FME26POO426",
    "assetKey": "FME26POO426",
    "specification": "30D*30D 30D阳离子千鸟格",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 57,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO426-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 137
    },
    "english": {
      "name": "30D×30D 30D Cationic Houndstooth Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Houndstooth",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 128,
        "itemNo": "FME26POO426",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo427",
    "code": "FME26POO427",
    "assetKey": "FME26POO427",
    "specification": "20D/24F*20D/24F 400T超高弹春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 34,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO427-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 138
    },
    "english": {
      "name": "20D/24F×20D/24F 400T Ultra High-stretch Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Ultra High Elastic",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 129,
        "itemNo": "FME26POO427",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo428",
    "code": "FME26POO428",
    "assetKey": "FME26POO428",
    "specification": "50D+50D*50D+50D 50D阳离子消光春亚纺0.1格子",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 70,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO428-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 139
    },
    "english": {
      "name": "50D+50D×50D+50D 50D Cationic Full Dull 0.1 Grid Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Cationic Grid",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 130,
        "itemNo": "FME26POO428",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo429",
    "code": "FME26POO429",
    "assetKey": "FME26POO429",
    "specification": "15D*20D 760T缎面春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 59,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO429-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 140
    },
    "english": {
      "name": "15D×20D 760T Satin Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Satin",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 131,
        "itemNo": "FME26POO429",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo430",
    "code": "FME26POO430",
    "assetKey": "FME26POO430",
    "specification": "15D/36F*20D/48F 15D*20D竖条春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 42,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO430-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 141
    },
    "english": {
      "name": "15D/36F×20D/48F 15D×20D Vertical Stripe Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Vertical Stripe",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 132,
        "itemNo": "FME26POO430",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo431",
    "code": "FME26POO431",
    "assetKey": "FME26POO431",
    "specification": "15D*15D 15D0.05格子春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 39,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO431-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 142
    },
    "english": {
      "name": "15D×15D 15D 0.05 Grid Pongee",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Pongee",
      "remarks": "Micro Grid",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 133,
        "itemNo": "FME26POO431",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4t432",
    "code": "FME26P4T432",
    "assetKey": "FME26P4T432",
    "specification": "75D+50S*75D T800经纬泡泡纱",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 126,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4T432-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 143
    },
    "english": {
      "name": "75D+50S×75D T800 Warp-weft Bubble Yarn",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "T800",
      "remarks": "Bubble",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 134,
        "itemNo": "FME26P4T432",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4t433",
    "code": "FME26P4T433",
    "assetKey": "FME26P4T433",
    "specification": "75D+50DT400加捻*50S+75DT800  75D经纬泡泡布",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 156,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4T433-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 144
    },
    "english": {
      "name": "75D T400 Twisted×50S+75D T800 75D Warp-weft Bubble",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "T800/T400",
      "remarks": "Bubble",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 135,
        "itemNo": "FME26P4T433",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4t434",
    "code": "FME26P4T434",
    "assetKey": "FME26P4T434",
    "specification": "75DT8+100D*75DT4+100D  经纬泡泡T400",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 151,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4T434-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 145
    },
    "english": {
      "name": "75D T8+100D×75D T4+100D Warp-weft Bubble T400",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "T400",
      "remarks": "Bubble",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 136,
        "itemNo": "FME26P4T434",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4t435",
    "code": "FME26P4T435",
    "assetKey": "FME26P4T435",
    "specification": "150DT8+75D消光*75DT8+75D消光  经纬泡泡T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 121,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4T435-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 146
    },
    "english": {
      "name": "150D T8+75D Full Dull×75D T8+75D Full Dull Warp-weft Bubble T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "T800",
      "remarks": "Bubble",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 137,
        "itemNo": "FME26P4T435",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4t436",
    "code": "FME26P4T436",
    "assetKey": "FME26P4T436",
    "specification": "75D阳涤DTY+75DT8*75DT8 75D经纬T8阳涤泡泡布",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 119,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4T436-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 147
    },
    "english": {
      "name": "75D Cationic DTY+75D T8×75D T8 Cationic Polyester Bubble",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "T8",
      "remarks": "Bubble",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 138,
        "itemNo": "FME26P4T436",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t437",
    "code": "FME26P2T437",
    "assetKey": "FME26P2T437",
    "specification": "55D高收缩*50DT800 55D高收缩T8 6:2横条纬T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 105,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T437-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 148
    },
    "english": {
      "name": "55D High-shrinkage×50D T800 55D High-shrinkage T8 6:2 Horizontal Stripe Weft T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Stripe",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 139,
        "itemNo": "FME26P2T437",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t438",
    "code": "FME26P2T438",
    "assetKey": "FME26P2T438",
    "specification": "55D高收缩*50DT800 55D高收缩T8 1:2横条纬T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 113,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T438-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 149
    },
    "english": {
      "name": "55D High-shrinkage×50D T800 55D High-shrinkage T8 1:2 Horizontal Stripe Weft T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Stripe",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 140,
        "itemNo": "FME26P2T438",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t439",
    "code": "FME26P2T439",
    "assetKey": "FME26P2T439",
    "specification": "55D高收缩*50DT800 55D高收缩T8 0.3格纬T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 103,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T439-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 150
    },
    "english": {
      "name": "55D High-shrinkage×50D T800 55D High-shrinkage T8 0.3 Grid Weft T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Grid",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 141,
        "itemNo": "FME26P2T439",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t440",
    "code": "FME26P2T440",
    "assetKey": "FME26P2T440",
    "specification": "55D高收缩*50DT800 55D高收缩T8 0.1格纬T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 109,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T440-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 151
    },
    "english": {
      "name": "55D High-shrinkage×50D T800 55D High-shrinkage T8 0.1 Grid Weft T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Grid",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 142,
        "itemNo": "FME26P2T440",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t441",
    "code": "FME26P2T441",
    "assetKey": "FME26P2T441",
    "specification": "55D高收缩*50DT800 55D高收缩T8 复合斜纬T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 105,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T441-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 152
    },
    "english": {
      "name": "55D High-shrinkage×50D T800 55D High-shrinkage T8 Compound Twill Weft T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Twill",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 143,
        "itemNo": "FME26P2T441",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t442",
    "code": "FME26P2T442",
    "assetKey": "FME26P2T442",
    "specification": "55D高收缩*50DT800 55D高收缩T8 隐格纬T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 121,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T442-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 153
    },
    "english": {
      "name": "55D High-shrinkage×50D T800 55D High-shrinkage T8 Hidden Grid Weft T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Hidden Grid",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 144,
        "itemNo": "FME26P2T442",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t443",
    "code": "FME26P2T443",
    "assetKey": "FME26P2T443",
    "specification": "50D*50DT400 50D全捻纬T400",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 81,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T443-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 154
    },
    "english": {
      "name": "50D×50D T400 50D Full Twisted Weft T400",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T400",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 145,
        "itemNo": "FME26P2T443",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4t444",
    "code": "FME26P4T444",
    "assetKey": "FME26P4T444",
    "specification": "50DT800*50DT800  50D经纬加密T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 102,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4T444-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 155
    },
    "english": {
      "name": "50D T800×50D T800 50D Warp-weft Dense T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "T800",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 146,
        "itemNo": "FME26P4T444",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t445",
    "code": "FME26P2T445",
    "assetKey": "FME26P2T445",
    "specification": "100D DTY*40S弹酷+150DT800   40S弹酷3/3斜 纬弹",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 209,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T445-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 156
    },
    "english": {
      "name": "100D DTY×40S Elastic Cool+150D T800 40S Elastic Cool 3/3 Twill Weft Stretch",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Twill",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 147,
        "itemNo": "FME26P2T445",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t446",
    "code": "FME26P2T446",
    "assetKey": "FME26P2T446",
    "specification": "100D消光DTY*150DT800  人字斜纬T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 245,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T446-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 157
    },
    "english": {
      "name": "100D Full Dull DTY×150D T800 Herringbone Weft T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Herringbone",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 148,
        "itemNo": "FME26P2T446",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t447",
    "code": "FME26P2T447",
    "assetKey": "FME26P2T447",
    "specification": "50D*50DT800 50D纬弹提花格T8",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 85,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T447-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 158
    },
    "english": {
      "name": "50D×50D T800 50D Weft Stretch Jacquard Grid T8",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Jacquard",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 149,
        "itemNo": "FME26P2T447",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t448",
    "code": "FME26P2T448",
    "assetKey": "FME26P2T448",
    "specification": "75DDTY*60S弹酷  60S纬弹平纹",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 101,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T448-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 159
    },
    "english": {
      "name": "75D DTY×60S Elastic Cool 60S Weft Stretch Plain",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": null,
      "remarks": "Plain",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 150,
        "itemNo": "FME26P2T448",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t449",
    "code": "FME26P2T449",
    "assetKey": "FME26P2T449",
    "specification": "40S*32S竹节酷+150DT8 2:2 3/2斜纬弹T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 193,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T449-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 160
    },
    "english": {
      "name": "40S×32S Bamboo Slub Cool+150D T8 2:2 3/2 Twill Weft Stretch T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Twill, Slub",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 151,
        "itemNo": "FME26P2T449",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4t450",
    "code": "FME26P4T450",
    "assetKey": "FME26P4T450",
    "specification": "40S弹酷*40S弹酷  40S四面弹弹酷骑兵斜",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 184,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4T450-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 161
    },
    "english": {
      "name": "40S Elastic Cool×40S Elastic Cool 40S 4-Way Stretch Cavalry Twill",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Cavalry Twill",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 152,
        "itemNo": "FME26P4T450",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t451",
    "code": "FME26P2T451",
    "assetKey": "FME26P2T451",
    "specification": "75D消光*75DT800+60S弹酷 2：2 纬弹2/2斜",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 168,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T451-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 162
    },
    "english": {
      "name": "75D Full Dull×75D T800+60S Elastic Cool 2:2 Weft Stretch 2/2 Twill",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T800",
      "remarks": "Twill",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 153,
        "itemNo": "FME26P2T451",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4t452",
    "code": "FME26P4T452",
    "assetKey": "FME26P4T452",
    "specification": "40S弹酷*40S弹酷  40S四面弹弹酷平纹",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 160,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4T452-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 163
    },
    "english": {
      "name": "40S Elastic Cool×40S Elastic Cool 40S 4-Way Stretch Plain",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": null,
      "remarks": "Plain",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 154,
        "itemNo": "FME26P4T452",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno453",
    "code": "FME26CNO453",
    "assetKey": "FME26CNO453",
    "specification": "65D*40S/150*90  锦棉平纹",
    "composition": "52%C48%N 大概",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 107,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO453-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 164
    },
    "english": {
      "name": "65D×40S/150×90 Cotton-Nylon Plain",
      "composition": "52%C 48%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 155,
        "itemNo": "FME26CNO453",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno454",
    "code": "FME26CNO454",
    "assetKey": "FME26CNO454",
    "specification": "65D*100S/150*130  锦棉平纹",
    "composition": "52%C48%N 大概",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 83,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO454-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 165
    },
    "english": {
      "name": "65D×100S/150×130 Cotton-Nylon Plain",
      "composition": "52%C 48%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 156,
        "itemNo": "FME26CNO454",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno455",
    "code": "FME26CNO455",
    "assetKey": "FME26CNO455",
    "specification": "65D*80S+50D/150*118  锦棉横条",
    "composition": "30%C70%N 大概",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 84,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO455-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 166
    },
    "english": {
      "name": "65D×80S+50D/150×118 Cotton-Nylon Horizontal Stripe",
      "composition": "30%C 70%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Stripe",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 157,
        "itemNo": "FME26CNO455",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cn2s456",
    "code": "FME26CN2S456",
    "assetKey": "FME26CN2S456",
    "specification": "21S*140D+40D 棉锦纬弹",
    "composition": "68%C29%N3%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 185,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CN2S456-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 167
    },
    "english": {
      "name": "21S×140D+40D Cotton-Nylon Weft Stretch",
      "composition": "68%C 29%N 3%SP",
      "category": "Cotton-Nylon",
      "stretchType": "Weft Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 158,
        "itemNo": "FME26CN2S456",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno457",
    "code": "FME26CNO457",
    "assetKey": "FME26CNO457",
    "specification": "32*140D/170*86 棉锦2/2斜",
    "composition": "68%C32%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 175,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO457-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 168
    },
    "english": {
      "name": "32S×140D/170×86 Cotton-Nylon 2/2 Twill",
      "composition": "68%C 32%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Twill",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 159,
        "itemNo": "FME26CNO457",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cp2t458",
    "code": "FME26CP2T458",
    "assetKey": "FME26CP2T458",
    "specification": "40S*150D/203*89 40S3/1斜棉T400",
    "composition": "66%C34%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 175,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CP2T458-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 169
    },
    "english": {
      "name": "40S×150D/203×89 40S 3/1 Twill Cotton T400",
      "composition": "66%C 34%P",
      "category": "Cotton-Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T400",
      "remarks": "Twill",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 160,
        "itemNo": "FME26CP2T458",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cnp459p",
    "code": "FME26CNP459P",
    "assetKey": "FME26CNP459P",
    "specification": "160D*21S/130*70 160D涤锦棉磨毛",
    "composition": "40%C11%N49%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 187,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNP459P-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 170
    },
    "english": {
      "name": "160D×21S/130×70 160D Polyester-Nylon-Cotton Peached",
      "composition": "40%C 11%N 49%P",
      "category": "Blend",
      "stretchType": "Non-Stretch",
      "finish": "Peached",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 161,
        "itemNo": "FME26CNP459P",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno460p",
    "code": "FME26CNO460P",
    "assetKey": "FME26CNO460P",
    "specification": "70D*21S/110*76 磨毛锦棉平纹",
    "composition": "70%C30%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 125,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO460P-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 171
    },
    "english": {
      "name": "70D×21S/110×76 Peached Cotton-Nylon Plain",
      "composition": "70%C 30%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Peached",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 162,
        "itemNo": "FME26CNO460P",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno461",
    "code": "FME26CNO461",
    "assetKey": "FME26CNO461",
    "specification": "40D*60S/180*150 锦棉平纹 预缩+空气洗",
    "composition": "60%C40%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 84,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO461-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 172
    },
    "english": {
      "name": "40D×60S/180×150 Cotton-Nylon Plain (Pre-shrunk + Air Wash)",
      "composition": "60%C 40%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Pre-shrunk + Air Wash",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 163,
        "itemNo": "FME26CNO461",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno462",
    "code": "FME26CNO462",
    "assetKey": "FME26CNO462",
    "specification": "70D*21S/180*90",
    "composition": "60%C40%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 165,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO462-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 173
    },
    "english": {
      "name": "70D×21S/180×90 Cotton-Nylon Plain",
      "composition": "60%C 40%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 164,
        "itemNo": "FME26CNO462",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno463",
    "code": "FME26CNO463",
    "assetKey": "FME26CNO463",
    "specification": "70D*21S/160*78 0.3格子锦棉",
    "composition": "62%C38%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 133,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO463-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 174
    },
    "english": {
      "name": "70D×21S/160×78 0.3 Grid Cotton-Nylon",
      "composition": "62%C 38%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Grid",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 165,
        "itemNo": "FME26CNO463",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cnp464p",
    "code": "FME26CNP464P",
    "assetKey": "FME26CNP464P",
    "specification": "160D*21S/135*70 磨毛涤锦棉",
    "composition": "43%C10%N47%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 189,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNP464P-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 175
    },
    "english": {
      "name": "160D×21S/135×70 Peached Polyester-Nylon-Cotton",
      "composition": "43%C 10%N 47%P",
      "category": "Blend",
      "stretchType": "Non-Stretch",
      "finish": "Peached",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 166,
        "itemNo": "FME26CNP464P",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno465",
    "code": "FME26CNO465",
    "assetKey": "FME26CNO465",
    "specification": "70D消光*32/160*90 0.3格锦棉",
    "composition": "58%C42%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 125,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO465-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 176
    },
    "english": {
      "name": "70D Full Dull×32S/160×90 0.3 Grid Cotton-Nylon",
      "composition": "58%C 42%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Grid",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 167,
        "itemNo": "FME26CNO465",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno466",
    "code": "FME26CNO466",
    "assetKey": "FME26CNO466",
    "specification": "70D消光*21S精纱/160*72 平纹锦棉",
    "composition": "60%C40%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 135,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO466-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 177
    },
    "english": {
      "name": "70D Full Dull×21S Combed/160×72 Plain Cotton-Nylon",
      "composition": "60%C 40%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 168,
        "itemNo": "FME26CNO466",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno467",
    "code": "FME26CNO467",
    "assetKey": "FME26CNO467",
    "specification": "70D半光*16S/110*68 16S锦棉",
    "composition": "75%C25%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 135,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO467-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 178
    },
    "english": {
      "name": "70D Semi-dull×16S/110×68 16S Cotton-Nylon",
      "composition": "75%C 25%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 169,
        "itemNo": "FME26CNO467",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cn1s468",
    "code": "FME26CN1S468",
    "assetKey": "FME26CN1S468",
    "specification": "70D+40D*16S/90*80 16S经弹锦棉塔丝隆",
    "composition": "72%C23%N5%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 150,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CN1S468-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 179
    },
    "english": {
      "name": "70D+40D×16S/90×80 16S Warp Stretch Cotton-Nylon Taslan",
      "composition": "72%C 23%N 5%SP",
      "category": "Cotton-Nylon",
      "stretchType": "Warp Stretch",
      "finish": "Taslan",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 170,
        "itemNo": "FME26CN1S468",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cnpo469p",
    "code": "FME26CNPO469P",
    "assetKey": "FME26CNPO469P",
    "specification": "168D*32S+150D/135*70 168D磨毛涤锦棉",
    "composition": "17%C10%N73%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 150,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNPO469P-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 180
    },
    "english": {
      "name": "168D×32S+150D/135×70 168D Peached Polyester-Nylon-Cotton",
      "composition": "17%C 10%N 73%P",
      "category": "Blend",
      "stretchType": "Non-Stretch",
      "finish": "Peached",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 171,
        "itemNo": "FME26CNP469P",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno470",
    "code": "FME26CNO470",
    "assetKey": "FME26CNO470",
    "specification": "70D*10S/110*56 10S锦棉",
    "composition": "78%C22%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 170,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO470-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 181
    },
    "english": {
      "name": "70D×10S/110×56 10S Cotton-Nylon",
      "composition": "78%C 22%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 172,
        "itemNo": "FME26CNO470",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno471",
    "code": "FME26CNO471",
    "assetKey": "FME26CNO471",
    "specification": "70D消光*160D尼龙空变+32S/160*86 锦棉横条",
    "composition": "70%N30%C",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 120,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO471-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 182
    },
    "english": {
      "name": "70D Full Dull×160D Nylon Air-textured +32S/160×86 Cotton-Nylon Horizontal Stripe",
      "composition": "70%N 30%C",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Stripe",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 173,
        "itemNo": "FME26CNO471",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno472",
    "code": "FME26CNO472",
    "assetKey": "FME26CNO472",
    "specification": "70D消光*16S/160*64  0.3格锦棉",
    "composition": "62%C38%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 142,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO472-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 183
    },
    "english": {
      "name": "70D Full Dull×16S/160×64 0.3 Grid Cotton-Nylon",
      "composition": "62%C 38%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Grid",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 174,
        "itemNo": "FME26CNO472",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno473",
    "code": "FME26CNO473",
    "assetKey": "FME26CNO473",
    "specification": "75D*160D+10S/221*150  10S加厚双层涤锦棉",
    "composition": "43%P6%N51%C",
    "width": {
      "value": "55/56",
      "unit": "in"
    },
    "weight": {
      "value": 285,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO473-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 184
    },
    "english": {
      "name": "75D×160D+10S/221×150 10S Heavy Double-layer Polyester-Nylon-Cotton",
      "composition": "43%P 6%N 51%C",
      "category": "Blend",
      "stretchType": "Non-Stretch",
      "finish": "Double Layer",
      "remarks": "Heavy",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 175,
        "itemNo": "FME26CNO473",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s474",
    "code": "FME26P4S474",
    "assetKey": "FME26P4S474",
    "specification": "100D+40D*100D+40D 100D四面弹打孔印花",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 125,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S474-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 185
    },
    "english": {
      "name": "100D 4-Way Stretch Perforated Print",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "Perforated + Print",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 176,
        "itemNo": "FME26P4S474",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo475",
    "code": "FME26POO475",
    "assetKey": "FME26POO475",
    "specification": "100D+100D 100D高弹春亚纺 印花",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 95,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO475-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 186
    },
    "english": {
      "name": "100D High-stretch Pongee Print",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Print",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 177,
        "itemNo": "FME26POO475",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo476e-25",
    "code": "FME26POO476E/25",
    "assetKey": "FME26POO476E-25",
    "specification": "50D*50D 300T半光多F涤丝纺 正面印花反面轧光 豹纹印花",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 70,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO476E-25-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 187
    },
    "english": {
      "name": "50D×50D 300T Semi-dull Multi-F Polyester Taffeta (Front Print, Back Cire) Leopard Print",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Print + Back Cire",
      "remarks": "Leopard",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 178,
        "itemNo": "FME26POO476E/25",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo476e-26",
    "code": "FME26POO476E/26",
    "assetKey": "FME26POO476E-26",
    "specification": "50D*50D 300T半光多F涤丝纺 正面印花反面轧光 豹纹印花",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 70,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO476E-26-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 188
    },
    "english": {
      "name": "50D×50D 300T Semi-dull Multi-F Polyester Taffeta (Front Print, Back Cire) Leopard Print",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Print + Back Cire",
      "remarks": "Leopard",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 179,
        "itemNo": "FME26POO476E/26",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo478",
    "code": "FME26POO478",
    "assetKey": "FME26POO478",
    "specification": "75D*60S 2/2斜涤沙斜纹仿记忆 正面涂料印花",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 130,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO478-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 189
    },
    "english": {
      "name": "75D×60S 2/2 Twill Polyester Yarn-dyed Memory-like (Front Pigment Print)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Print",
      "remarks": "Memory-like",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 180,
        "itemNo": "FME26POO478",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s479",
    "code": "FME26P4S479",
    "assetKey": "FME26P4S479",
    "specification": "100D+40D*100D+40D 100D四面弹 正面印花",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 130,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S479-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 190
    },
    "english": {
      "name": "100D 4-Way Stretch (Front Print)",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "Print",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 181,
        "itemNo": "FME26P4S479",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s480",
    "code": "FME26N4S480",
    "assetKey": "FME26N4S480",
    "specification": "200D+70D*200D+70D 200D尼龙四面弹染底迷彩印花",
    "composition": "94%N6%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 230,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S480-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 191
    },
    "english": {
      "name": "200D Nylon 4-Way Stretch Dyed Base Camo Print",
      "composition": "94%N 6%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Camo Print",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 182,
        "itemNo": "FME26N4S480",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s481-11",
    "code": "FME26N4S481/11",
    "assetKey": "FME26N4S481-11",
    "specification": "70D+40D*140D+40D消光尼龙四面弹印花 丈青底白色叶子",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 155,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S481-11-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 192
    },
    "english": {
      "name": "70D Full Dull Nylon 4-Way Stretch Print Navy Base White Leaf",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Print",
      "remarks": "Navy/White Leaf",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 183,
        "itemNo": "FME26N4S481/11",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s481-12",
    "code": "FME26N4S481/12",
    "assetKey": "FME26N4S481-12",
    "specification": "70D+40D*140D+40D消光尼龙四面弹印花 蓝底椭圆眼睛",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 155,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S481-12-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 193
    },
    "english": {
      "name": "70D Full Dull Nylon 4-Way Stretch Print Blue Base Oval Eye",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Print",
      "remarks": "Blue/Oval Eye",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 184,
        "itemNo": "FME26N4S481/12",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s481-13",
    "code": "FME26N4S481/13",
    "assetKey": "FME26N4S481-13",
    "specification": "70D+40D*140D+40D消光尼龙四面弹印花 橘底白花",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 155,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S481-13-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 194
    },
    "english": {
      "name": "70D Full Dull Nylon 4-Way Stretch Print Orange Base White Flower",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Print",
      "remarks": "Orange/White Flower",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 185,
        "itemNo": "FME26N4S481/13",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s481-14",
    "code": "FME26N4S481/14",
    "assetKey": "FME26N4S481-14",
    "specification": "70D+40D*140D+40D消光尼龙四面弹印花 红底绿色海马",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 155,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S481-14-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 195
    },
    "english": {
      "name": "70D Full Dull Nylon 4-Way Stretch Print Red Base Green Seahorse",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Print",
      "remarks": "Red/Green Seahorse",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 186,
        "itemNo": "FME26N4S481/14",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s481-15",
    "code": "FME26N4S481/15",
    "assetKey": "FME26N4S481-15",
    "specification": "70D+40D*140D+40D消光尼龙四面弹印花 黑底骷髅头",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 155,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S481-15-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 196
    },
    "english": {
      "name": "70D Full Dull Nylon 4-Way Stretch Print Black Base Skull",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Print",
      "remarks": "Black/Skull",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 187,
        "itemNo": "FME26N4S481/15",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s481-16",
    "code": "FME26N4S481/16",
    "assetKey": "FME26N4S481-16",
    "specification": "70D+40D*140D+40D消光尼龙四面弹印花 丈青骷髅头",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 155,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S481-16-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 197
    },
    "english": {
      "name": "70D Full Dull Nylon 4-Way Stretch Print Navy Base Skull",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Print",
      "remarks": "Navy/Skull",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 188,
        "itemNo": "FME26N4S481/16",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s481-17",
    "code": "FME26N4S481/17",
    "assetKey": "FME26N4S481-17",
    "specification": "70D+40D*140D+40D消光尼龙四面弹印花 丈青底白色章鱼",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 155,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S481-17-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 198
    },
    "english": {
      "name": "70D Full Dull Nylon 4-Way Stretch Print Navy Base White Octopus",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Print",
      "remarks": "Navy/White Octopus",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 189,
        "itemNo": "FME26N4S481/17",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s481-18",
    "code": "FME26N4S481/18",
    "assetKey": "FME26N4S481-18",
    "specification": "70D+40D*140D+40D消光尼龙四面弹印花 蓝条水母章鱼",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 155,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S481-18-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 199
    },
    "english": {
      "name": "70D Full Dull Nylon 4-Way Stretch Print Blue Stripe Jellyfish Octopus",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Print",
      "remarks": "Blue Stripe/Jellyfish",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 190,
        "itemNo": "FME26N4S481/18",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cnpo482a",
    "code": "FME26CNPO482A",
    "assetKey": "FME26CNPO482A",
    "specification": "160D*32S+150D/130*72 磨毛涤锦棉 反面涂层",
    "composition": "74%P10%N16%C",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 153,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNPO482A-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 200
    },
    "english": {
      "name": "160D×32S+150D/130×72 Peached Polyester-Nylon-Cotton (Back Coated)",
      "composition": "74%P 10%N 16%C",
      "category": "Blend",
      "stretchType": "Non-Stretch",
      "finish": "Peached + Back Coated",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 191,
        "itemNo": "FME26CNPO482A",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno483a",
    "code": "FME26CNO483A",
    "assetKey": "FME26CNO483A",
    "specification": "70D*32S*2/160*60   32S锦棉  反面涂层",
    "composition": "65%C35%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 133,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO483A-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 201
    },
    "english": {
      "name": "70D×32S×2/160×60 32S Cotton-Nylon (Back Coated)",
      "composition": "65%C 35%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Back Coated",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 192,
        "itemNo": "FME26CNO483A",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cno484a",
    "code": "FME26CNO484A",
    "assetKey": "FME26CNO484A",
    "specification": "70D*50S   50S锦棉反面涂层",
    "composition": "45%C55%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 100,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CNO484A-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 202
    },
    "english": {
      "name": "70D×50S 50S Cotton-Nylon (Back Coated)",
      "composition": "45%C 55%N",
      "category": "Cotton-Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Back Coated",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 193,
        "itemNo": "FME26CNO484A",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26cpo485a",
    "code": "FME26CPO485A",
    "assetKey": "FME26CPO485A",
    "specification": "150D*21S TC 2/1 涤棉反面涂层",
    "composition": "85%P15%C",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 232,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26CPO485A-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 203
    },
    "english": {
      "name": "150D×21S TC 2/1 Twill Polyester-Cotton (Back Coated)",
      "composition": "85%P 15%C",
      "category": "Polyester-Cotton",
      "stretchType": "Non-Stretch",
      "finish": "Back Coated",
      "remarks": "Twill",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 194,
        "itemNo": "FME26CPO485A",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo486a",
    "code": "FME26NOO486A",
    "assetKey": "FME26NOO486A",
    "specification": "40D*40D 310T消光尼丝纺 反面离型纸涂层",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 120,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO486A-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 204
    },
    "english": {
      "name": "40D×40D 310T Full Dull Nylon Taffeta (Back Release Paper Coated)",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Back Release Paper Coated",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 195,
        "itemNo": "FME26NOO486A",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo487a",
    "code": "FME26POO487A",
    "assetKey": "FME26POO487A",
    "specification": "75D*40D 涤纱 反面涂层",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 140,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO487A-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 205
    },
    "english": {
      "name": "75D×40D Polyester Yarn (Back Coated)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Back Coated",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 196,
        "itemNo": "FME26POO487A",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2s488a",
    "code": "FME26P2S488A",
    "assetKey": "FME26P2S488A",
    "specification": "75D*75DT400 75D2/2斜纹纬弹T400  反面涂层",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 154,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2S488A-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 206
    },
    "english": {
      "name": "75D×75D T400 75D 2/2 Twill Weft Stretch T400 (Back Coated)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T400 + Back Coated",
      "remarks": "Twill",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 197,
        "itemNo": "FME26P2S488A",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo489w",
    "code": "FME26NOO489W",
    "assetKey": "FME26NOO489W",
    "specification": "70D*320D  320D加密消光塔丝隆 反面涂蜡",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 165,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO489W-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 207
    },
    "english": {
      "name": "70D×320D 320D Dense Full Dull Taslan (Back Waxed)",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Back Waxed",
      "remarks": "Taslan",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 198,
        "itemNo": "FME26NOO489W",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo490a",
    "code": "FME26POO490A",
    "assetKey": "FME26POO490A",
    "specification": "75D*75D  75D横条仿记忆 反面涂层",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 120,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO490A-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 208
    },
    "english": {
      "name": "75D×75D 75D Horizontal Stripe Memory-like (Back Coated)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Back Coated",
      "remarks": "Memory-like",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 199,
        "itemNo": "FME26POO490A",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo491d",
    "code": "FME26POO491D",
    "assetKey": "FME26POO491D",
    "specification": "50D*50D 50D高弹春亚纺 离型纸印花",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 102,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO491D-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 209
    },
    "english": {
      "name": "50D×50D 50D High-stretch Pongee Release Paper Print",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Release Paper Print",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 200,
        "itemNo": "FME26POO491D",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo492d",
    "code": "FME26POO492D",
    "assetKey": "FME26POO492D",
    "specification": "20D*20D 380T涤丝纺 压皱后印花",
    "composition": "100%P",
    "width": {
      "value": "50/51",
      "unit": "in"
    },
    "weight": {
      "value": 45,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO492D-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 210
    },
    "english": {
      "name": "20D×20D 380T Polyester Taffeta Creased + Print",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Creased + Print",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 201,
        "itemNo": "FME26POO492D",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo493d",
    "code": "FME26NOO493D",
    "assetKey": "FME26NOO493D",
    "specification": "20D*20D 380T低弹起皱尼丝纺 幻彩渐变烫金",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 42,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO493D-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 211
    },
    "english": {
      "name": "20D×20D 380T Low-stretch Crepe Nylon Taffeta Iridescent Gradient Hot Foil",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Hot Foil",
      "remarks": "Iridescent",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 202,
        "itemNo": "FME26NOO493D",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo494d",
    "code": "FME26POO494D",
    "assetKey": "FME26POO494D",
    "specification": "50D*50D  300T春亚纺  金属膜烫金",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 70,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO494D-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 212
    },
    "english": {
      "name": "50D×50D 300T Pongee Metallic Foil",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Metallic Foil",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 203,
        "itemNo": "FME26POO494D",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo495d",
    "code": "FME26POO495D",
    "assetKey": "FME26POO495D",
    "specification": "50D*50D 50D高弹春亚纺 反面烫膜",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 68,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO495D-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 213
    },
    "english": {
      "name": "50D×50D 50D High-stretch Pongee Back Hot Film",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Hot Film",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 204,
        "itemNo": "FME26POO495D",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo496c",
    "code": "FME26POO496C",
    "assetKey": "FME26POO496C",
    "specification": "50D*50D 50D消光高弹春亚纺 +1.0低透明+鸟眼布",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 220,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO496C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 214
    },
    "english": {
      "name": "50D×50D 50D Full Dull High-stretch 2/2 Twill Pongee +1.0 Low-transparent + Bird Eye Mesh",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: Low-transparent + Bird Eye",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 205,
        "itemNo": "FME26POO496C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s497c",
    "code": "FME26N4S497C",
    "assetKey": "FME26N4S497C",
    "specification": "40D+20D*40D+20D 40D尼龙四面弹+低透明+180G摇粒绒",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 300,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S497C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 215
    },
    "english": {
      "name": "40D Nylon 4-Way Stretch + Low-transparent + 180G Polar Fleece",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Bonded: Low-transparent + Polar Fleece",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 206,
        "itemNo": "FME26N4S497C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s498c",
    "code": "FME26P4S498C",
    "assetKey": "FME26P4S498C",
    "specification": "75D+40D*75D+40D   75D四面弹+透明膜+鸟眼布",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 310,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S498C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 216
    },
    "english": {
      "name": "75D 4-Way Stretch + Transparent Film + Bird Eye Mesh",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "Bonded: Transparent Film + Bird Eye",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 207,
        "itemNo": "FME26P4S498C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4s499c",
    "code": "FME26P4S499C",
    "assetKey": "FME26P4S499C",
    "specification": "75D+40D*75D+40D 75D四面弹+透明膜+160G摇粒绒",
    "composition": "92%P8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 318,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4S499C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 217
    },
    "english": {
      "name": "75D 4-Way Stretch + Transparent Film + 160G Polar Fleece",
      "composition": "92%P 8%SP",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "Bonded: Transparent Film + Polar Fleece",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 208,
        "itemNo": "FME26P4S499C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4t500b",
    "code": "FME26P4T500B",
    "assetKey": "FME26P4T500B",
    "specification": "50DT800*50DT800  50D经纬T800 反面贴膜",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 100,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P4T500B-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 218
    },
    "english": {
      "name": "50D T800×50D T800 50D Warp-weft T800 (Back Membrane Laminated)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "T800 + Back Membrane",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 209,
        "itemNo": "FME26P4T500B",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo501b",
    "code": "FME26POO501B",
    "assetKey": "FME26POO501B",
    "specification": "75D*60S 2/2斜涤沙斜纹仿记忆 正面迷彩印花反面贴膜",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 140,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO501B-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 219
    },
    "english": {
      "name": "75D×60S 2/2 Twill Polyester Yarn-dyed Memory-like (Front Camo Print, Back Membrane)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Print + Back Membrane",
      "remarks": "Memory-like, Camo",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 210,
        "itemNo": "FME26POO501B",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo502c",
    "code": "FME26POO502C",
    "assetKey": "FME26POO502C",
    "specification": "50D*50D 300T多F春亚纺+透明膜+可特",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 131,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO502C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 220
    },
    "english": {
      "name": "50D×50D 300T Multi-F Pongee + Transparent Film + Tricot",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: Transparent Film + Tricot",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 211,
        "itemNo": "FME26POO502C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo503c",
    "code": "FME26POO503C",
    "assetKey": "FME26POO503C",
    "specification": "50D*50D 300T格子春亚纺+0.15中透白+格子票绒纱",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 133,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO503C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 221
    },
    "english": {
      "name": "50D×50D 300T Grid Pongee + 0.15 Mid-transparent White + Grid Velvet",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: Mid-transparent + Velvet",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 212,
        "itemNo": "FME26POO503C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo504b",
    "code": "FME26POO504B",
    "assetKey": "FME26POO504B",
    "specification": "50D*50D 50D高弹春亚纺 反面贴低透黑膜",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 80,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO504B-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 222
    },
    "english": {
      "name": "50D×50D 50D High-stretch Pongee (Back Low-transparent Black Membrane)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Back Membrane",
      "remarks": "Low-transparent Black",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 213,
        "itemNo": "FME26POO504B",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo505c",
    "code": "FME26POO505C",
    "assetKey": "FME26POO505C",
    "specification": "50D*50D 50D高弹春亚纺 反面三合一复合圈绒",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 193,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO505C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 223
    },
    "english": {
      "name": "50D×50D 50D High-stretch Pongee (Back 3-in-1 Composite Loop Velvet)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: 3-in-1 + Loop Velvet",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 214,
        "itemNo": "FME26POO505C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t506b",
    "code": "FME26P2T506B",
    "assetKey": "FME26P2T506B",
    "specification": "75D*75DT400  43梭T400破卡 反面0.12低透明",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 180,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T506B-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 224
    },
    "english": {
      "name": "75D×75D T400 43-pick Broken Twill T400 (Back 0.12 Low-transparent)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T400 + Back Membrane",
      "remarks": "Broken Twill",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 215,
        "itemNo": "FME26P2T506B",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo507c",
    "code": "FME26POO507C",
    "assetKey": "FME26POO507C",
    "specification": "75D*60S 2/2斜涤沙斜纹仿记忆 正面迷彩印花反面三合一复合50D高弹春亚纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 213,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO507C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 225
    },
    "english": {
      "name": "75D×60S 2/2 Twill Polyester Yarn-dyed Memory-like (Front Camo Print, Back 3-in-1 Composite 50D High-stretch Pongee)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: Print + 3-in-1 Composite",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 216,
        "itemNo": "FME26POO507C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo508c",
    "code": "FME26POO508C",
    "assetKey": "FME26POO508C",
    "specification": "50D*50D 50D消光高弹2/2斜春亚纺 +1.5低透明+50D单面针织布",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 158,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO508C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 226
    },
    "english": {
      "name": "50D×50D 50D Full Dull High-stretch 2/2 Twill Pongee +1.5 Low-transparent + 50D Single Jersey",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: Low-transparent + Single Jersey",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 217,
        "itemNo": "FME26POO508C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo509c",
    "code": "FME26POO509C",
    "assetKey": "FME26POO509C",
    "specification": "50D*50D 50D消光高弹2/2斜春亚纺 +1.5低透明+票绒纱",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 145,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO509C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 227
    },
    "english": {
      "name": "50D×50D 50D Full Dull High-stretch 2/2 Twill Pongee +1.5 Low-transparent + Velvet Yarn",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: Low-transparent + Velvet",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 218,
        "itemNo": "FME26POO509C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo510c",
    "code": "FME26POO510C",
    "assetKey": "FME26POO510C",
    "specification": "50D*50D 50D消光高弹2/2斜春亚纺 +1.5低透明+可特",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 138,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO510C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 228
    },
    "english": {
      "name": "50D×50D 50D Full Dull High-stretch 2/2 Twill Pongee +1.5 Low-transparent + Tricot",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: Low-transparent + Tricot",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 219,
        "itemNo": "FME26POO510C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo511b",
    "code": "FME26NOO511B",
    "assetKey": "FME26NOO511B",
    "specification": "70D*160D 228T尼龙塔丝隆反面贴膜",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 145,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO511B-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 229
    },
    "english": {
      "name": "70D×160D 228T Nylon Taslan (Back Membrane)",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Back Membrane",
      "remarks": "Taslan",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 220,
        "itemNo": "FME26NOO511B",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo512c",
    "code": "FME26POO512C",
    "assetKey": "FME26POO512C",
    "specification": "50D*50D 50D消光高弹2/2斜春亚纺 +1.0低透明+30D单面针织布",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 135,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO512C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 230
    },
    "english": {
      "name": "50D×50D 50D Full Dull High-stretch 2/2 Twill Pongee +1.0 Low-transparent + 30D Single Jersey",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: Low-transparent + Single Jersey",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 221,
        "itemNo": "FME26POO512C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo513c",
    "code": "FME26POO513C",
    "assetKey": "FME26POO513C",
    "specification": "50D*50D 50D消光高弹春亚纺 +1.0低透明+160GSM摇粒绒",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 246,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO513C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 231
    },
    "english": {
      "name": "50D×50D 50D Full Dull High-stretch Pongee +1.0 Low-transparent + 160GSM Polar Fleece",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: Low-transparent + Polar Fleece",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 222,
        "itemNo": "FME26POO513C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s514",
    "code": "FME26N4S514",
    "assetKey": "FME26N4S514",
    "specification": "针织尼龙四面弹 反光印花",
    "composition": "75%N25%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 259,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26N4S514-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 232
    },
    "english": {
      "name": "Knitted Nylon 4-Way Stretch Reflective Print",
      "composition": "75%N 25%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Reflective Print",
      "remarks": "Knitted",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 223,
        "itemNo": "FME26N4S514",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo515",
    "code": "FME26POO515",
    "assetKey": "FME26POO515",
    "specification": "50D*50D 300T春亚纺 反光印花",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 85,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO515-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 233
    },
    "english": {
      "name": "50D×50D 300T Pongee Reflective Print",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Reflective Print",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 224,
        "itemNo": "FME26POO515",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t516",
    "code": "FME26P2T516",
    "assetKey": "FME26P2T516",
    "specification": "75D*75DT400 T400小牛津数码印花+反光印花",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 160,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T516-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 234
    },
    "english": {
      "name": "75D×75D T400 Small Oxford Digital Print + Reflective Print",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T400 + Digital + Reflective",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 225,
        "itemNo": "FME26P2T516",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p2t517",
    "code": "FME26P2T517",
    "assetKey": "FME26P2T517",
    "specification": "75D*75DT400 T400小牛津 数码印花+反光印花",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 160,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26P2T517-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 235
    },
    "english": {
      "name": "75D×75D T400 Small Oxford Digital Print + Reflective Print",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Weft Stretch",
      "finish": "T400 + Digital + Reflective",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 226,
        "itemNo": "FME26P2T517",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo518c",
    "code": "FME26POO518C",
    "assetKey": "FME26POO518C",
    "specification": "50D*50D  300T春亚纺 反光印花面料三合一复合格子票绒纱",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 130,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26POO518C-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 236
    },
    "english": {
      "name": "50D×50D 300T Pongee Reflective Print Fabric 3-in-1 Composite Grid Velvet",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Reflective Print + Bonded",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 227,
        "itemNo": "FME26POO518C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo519",
    "code": "FME26NOO519",
    "assetKey": "FME26NOO519",
    "specification": "40D*20D  单丝起皱尼丝纺",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 75,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": "products/FME26NOO519-main-960.jpg",
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "ready",
    "source": {
      "sheet": "Sheet1",
      "row": 237
    },
    "english": {
      "name": "40D×20D Monofilament Crepe Nylon Taffeta",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Crepe",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 228,
        "itemNo": "FME26NOO519",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26lcoo520",
    "code": "FME26LCOO520",
    "assetKey": "FME26LCOO520",
    "specification": "16S+16S*9S/78*38  亚麻棉布",
    "composition": "55%L45%C",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": null,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [
      "缺克重"
    ],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 238
    },
    "english": {
      "name": "16S+16S×9S/78×38 Linen-Cotton Plain",
      "composition": "55%L 45%C",
      "category": "Linen-Cotton",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 229,
        "itemNo": "FME26LCOO520",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26loo521",
    "code": "FME26LOO521",
    "assetKey": "FME26LOO521",
    "specification": "17S*14S/61*59  全亚麻",
    "composition": "100%L",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": null,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [
      "缺克重"
    ],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 239
    },
    "english": {
      "name": "17S×14S/61×59 100% Linen",
      "composition": "100%L",
      "category": "Linen",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 230,
        "itemNo": "FME26LOO521",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26loo522",
    "code": "FME26LOO522",
    "assetKey": "FME26LOO522",
    "specification": "9S*9S 亚麻天丝",
    "composition": "75%Lyocell 25%L",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": null,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [
      "缺克重"
    ],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 240
    },
    "english": {
      "name": "9S×9S Linen Tencel (Lyocell)",
      "composition": "75%Lyocell 25%L",
      "category": "Linen-Tencel",
      "stretchType": "Non-Stretch",
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 231,
        "itemNo": "FME26LOO522",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26loo523",
    "code": "FME26LOO523",
    "assetKey": "FME26LOO523",
    "specification": null,
    "composition": null,
    "width": {
      "value": null,
      "unit": "in"
    },
    "weight": {
      "value": null,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [
      "缺规格",
      "缺成分",
      "缺门幅",
      "缺克重"
    ],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 241
    },
    "english": {
      "name": null,
      "composition": null,
      "category": null,
      "stretchType": null,
      "finish": null,
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 232,
        "itemNo": "FME26LOO523",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s524c",
    "code": "FME26N4S524C",
    "assetKey": "FME26N4S524C",
    "specification": "70D+40D*70D+40D 70D尼龙四面弹三合一复合票绒纱",
    "composition": "92%N8%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 190,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 242
    },
    "english": {
      "name": "70D Nylon 4-Way Stretch 3-in-1 Composite Velvet Yarn",
      "composition": "92%N 8%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Bonded: 3-in-1 + Velvet",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 233,
        "itemNo": "FME26N4S524C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s525c",
    "code": "FME26N4S525C",
    "assetKey": "FME26N4S525C",
    "specification": "30D+20D*30D+20D 30D尼龙四面弹三合一复合票绒纱",
    "composition": "86%N14%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 130,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 243
    },
    "english": {
      "name": "30D Nylon 4-Way Stretch 3-in-1 Composite Velvet Yarn",
      "composition": "86%N 14%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Bonded: 3-in-1 + Velvet",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 234,
        "itemNo": "FME26N4S525C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo526",
    "code": "FME26NOO526",
    "assetKey": "FME26NOO526",
    "specification": "40D*40D  380T圆孔白丝绉布",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 82,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 244
    },
    "english": {
      "name": "40D×40D 380T Round-hole White Yarn Crepe",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Crepe",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 235,
        "itemNo": "FME26NOO526",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo526c",
    "code": "FME26NOO526C",
    "assetKey": "FME26NOO526C",
    "specification": "40D*40D  380T圆孔白丝绉布三合一复合针织汗布",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 262,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 245
    },
    "english": {
      "name": "40D×40D 380T Round-hole White Yarn Crepe 3-in-1 Composite Single Jersey",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: 3-in-1 + Single Jersey",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 236,
        "itemNo": "FME26NOO526C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo527",
    "code": "FME26NOO527",
    "assetKey": "FME26NOO527",
    "specification": "20D*20D 460T起皱尼丝纺",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 50,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 246
    },
    "english": {
      "name": "20D×20D 460T Crepe Nylon Taffeta",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Crepe",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 237,
        "itemNo": "FME26NOO527",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo528a",
    "code": "FME26NOO528A",
    "assetKey": "FME26NOO528A",
    "specification": "7D*7D  7D格子尼丝纺 反面涂层",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 20,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 247
    },
    "english": {
      "name": "7D×7D 7D Grid Nylon Taffeta (Back Coated)",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Back Coated",
      "remarks": "Ultra-light",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 238,
        "itemNo": "FME26NOO528A",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo529",
    "code": "FME26NOO529",
    "assetKey": "FME26NOO529",
    "specification": "30D*30D 尼龙原纱永白双线格",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 55,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 248
    },
    "english": {
      "name": "30D×30D Nylon Inherent White Double-line Grid",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Grid",
      "remarks": "Inherent White",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 239,
        "itemNo": "FME26NOO529",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s530",
    "code": "FME26N4S530",
    "assetKey": "FME26N4S530",
    "specification": "70D+40D*70D+40D 尼龙珍珠点四面弹 速干处理",
    "composition": "88%N12%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 180,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 249
    },
    "english": {
      "name": "70D Nylon Pearl Dot 4-Way Stretch Quick-dry Finish",
      "composition": "88%N 12%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Pearl Dot + Quick-dry",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 240,
        "itemNo": "FME26N4S530",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26n4s531",
    "code": "FME26N4S531",
    "assetKey": "FME26N4S531",
    "specification": "70D+40D*70D+40D+320D  320D消光尼龙双链条",
    "composition": "91%N9%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 220,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 250
    },
    "english": {
      "name": "70D×320D Full Dull Nylon Double Chain",
      "composition": "91%N 9%SP",
      "category": "Nylon",
      "stretchType": "4-Way Stretch",
      "finish": "Double Chain",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 241,
        "itemNo": "FME26N4S531",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo532c",
    "code": "FME26POO532C",
    "assetKey": "FME26POO532C",
    "specification": "50D*50D 50D高弹春亚纺 +3.0高透白+飘柔纱",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 160,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 251
    },
    "english": {
      "name": "50D×50D 50D High-stretch Pongee +3.0 High-transparent White + Soft Velvet",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Bonded: High-transparent + Soft Velvet",
      "remarks": "3-Layer",
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 242,
        "itemNo": "FME26POO532C",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26np4s533",
    "code": "FME26NP4S533",
    "assetKey": "FME26NP4S533",
    "specification": "70D+40D*70D+40D+300D 锦涤半光加捻登山布",
    "composition": "60%N35%P5%SP",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 230,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 252
    },
    "english": {
      "name": "70D Nylon-Polyester Semi-dull Twisted Mountaineering Fabric",
      "composition": "60%N 35%P 5%SP",
      "category": "Blend",
      "stretchType": "4-Way Stretch",
      "finish": "Mountaineering",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 243,
        "itemNo": "FME26NP4S533",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26p4t534",
    "code": "FME26P4T534",
    "assetKey": "FME26P4T534",
    "specification": "75DT800*150DT800   75D*150D经纬双纬T800",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 140,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 253
    },
    "english": {
      "name": "75D T800×150D T800 75D×150D Warp-weft Double Weft T800",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "4-Way Stretch",
      "finish": "T800",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 244,
        "itemNo": "FME26P4T534",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo535",
    "code": "FME26POO535",
    "assetKey": "FME26POO535",
    "specification": "75D*75D  75D仿记忆",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 115,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 254
    },
    "english": {
      "name": "75D×75D 75D Memory-like",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Memory-like",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 245,
        "itemNo": "FME26POO535",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo536",
    "code": "FME26POO536",
    "assetKey": "FME26POO536",
    "specification": "20D*20D 420T涤丝纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 40,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 255
    },
    "english": {
      "name": "20D×20D 420T Polyester Taffeta",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Taffeta",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 246,
        "itemNo": "FME26POO536",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo537e",
    "code": "FME26POO537E",
    "assetKey": "FME26POO537E",
    "specification": "25D*25D 400T0.05格涤丝纺 袖筒正面轧光",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 50,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 256
    },
    "english": {
      "name": "25D×25D 400T 0.05 Grid Polyester Taffeta (Sleeve Cire)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Grid + Cire",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 247,
        "itemNo": "FME26POO537E",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo538",
    "code": "FME26POO538",
    "assetKey": "FME26POO538",
    "specification": "20D*20D 400T涤丝纺  袖筒正面印花",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 40,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 257
    },
    "english": {
      "name": "20D×20D 400T Polyester Taffeta (Sleeve Print)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Print",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 248,
        "itemNo": "FME26POO538",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo539",
    "code": "FME26POO539",
    "assetKey": "FME26POO539",
    "specification": "50D*50D 300T涤丝纺",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 65,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 258
    },
    "english": {
      "name": "50D×50D 300T Polyester Taffeta",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Taffeta",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 249,
        "itemNo": "FME26POO539",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26poo540",
    "code": "FME26POO540",
    "assetKey": "FME26POO540",
    "specification": "20D*20D 20D0.2双线格春亚纺  正面印花",
    "composition": "100%P",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 30,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 259
    },
    "english": {
      "name": "20D×20D 20D 0.2 Double-line Grid Pongee (Front Print)",
      "composition": "100%P",
      "category": "Polyester",
      "stretchType": "Non-Stretch",
      "finish": "Grid + Print",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 250,
        "itemNo": "FME26POO540",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo541",
    "code": "FME26NOO541",
    "assetKey": "FME26NOO541",
    "specification": "40D*40D 360T圆孔尼丝纺",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 60,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 260
    },
    "english": {
      "name": "40D×40D 360T Round-hole Nylon Taffeta",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Taffeta",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 251,
        "itemNo": "FME26NOO541",
        "method": "provided-catalog"
      }
    }
  },
  {
    "id": "fme26noo542e",
    "code": "FME26NOO542E",
    "assetKey": "FME26NOO542E",
    "specification": "20D*20D 400T圆孔0.08格尼丝纺 袖筒正面轧光",
    "composition": "100%N",
    "width": {
      "value": "57/58",
      "unit": "in"
    },
    "weight": {
      "value": 38,
      "unit": "g/m²"
    },
    "collectionIds": [],
    "garmentIds": [],
    "images": {
      "swatch": null,
      "detail": null,
      "garment": null
    },
    "reviewIssues": [],
    "status": "draft",
    "source": {
      "sheet": "Sheet1",
      "row": 261
    },
    "english": {
      "name": "20D×20D 400T Round-hole 0.08 Grid Nylon Taffeta (Sleeve Cire)",
      "composition": "100%N",
      "category": "Nylon",
      "stretchType": "Non-Stretch",
      "finish": "Grid + Cire",
      "remarks": null,
      "source": {
        "file": "Fanmao Fabric Catalog 2026 (English).xlsx",
        "sheet": "Fabric Catalog",
        "row": 252,
        "itemNo": "FME26NOO542E",
        "method": "provided-catalog"
      }
    }
  }
]
