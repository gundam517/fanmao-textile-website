export type GarmentView = 'front' | 'back' | 'texture' | 'alternate'

export interface GarmentApplication {
  id: string
  collection: 'outdoor' | 'sports' | 'thermal' | 'comfort'
  name: string
  shortName: string
  material: string
  fabricNumber?: string
  views: GarmentView[]
}

// Folder references were supplied by the user. 526 explicitly means the plain
// version. The supplied product table overrides older material folder names.
export const GARMENT_APPLICATIONS: GarmentApplication[] = [
  {
    "id": "cationic-shell",
    "collection": "outdoor",
    "name": "Light green technical jacket",
    "shortName": "Technical jacket",
    "material": "Cotton / nylon twill · Three-layer laminate",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "543"
  },
  {
    "id": "olive-fleece-shell",
    "collection": "outdoor",
    "name": "Olive hooded outerwear",
    "shortName": "Olive shell",
    "material": "Cationic polyester herringbone · Transparent film laminate",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "545"
  },
  {
    "id": "nylon-workwear-489",
    "collection": "outdoor",
    "name": "Olive workwear jacket",
    "shortName": "Workwear jacket",
    "material": "Nylon",
    "views": [
      "front",
      "texture"
    ],
    "fabricNumber": "489"
  },
  {
    "id": "nylon-jacket-526",
    "collection": "outdoor",
    "name": "Khaki utility jacket",
    "shortName": "Utility jacket",
    "material": "Nylon",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "526"
  },
  {
    "id": "nylon-stretch-jacket-531",
    "collection": "outdoor",
    "name": "Light grey stretch jacket",
    "shortName": "Stretch jacket",
    "material": "Nylon · Four-way stretch",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "531"
  },
  {
    "id": "polyester-jacket-532",
    "collection": "outdoor",
    "name": "Blue hooded jacket",
    "shortName": "Blue jacket",
    "material": "Polyester",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "532"
  },
  {
    "id": "nylon-poly-shirt-jacket",
    "collection": "outdoor",
    "name": "Olive lightweight shirt jacket",
    "shortName": "Shirt jacket",
    "material": "Nylon / polyester · Four-way stretch",
    "views": [
      "front",
      "back",
      "texture"
    ]
  },
  {
    "id": "navy-stretch-trousers",
    "collection": "sports",
    "name": "Navy stretch sports trousers",
    "shortName": "Stretch trousers",
    "material": "Nylon · Four-way stretch",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "530"
  },
  {
    "id": "nylon-shorts-323",
    "collection": "sports",
    "name": "Olive sports shorts",
    "shortName": "Sports shorts",
    "material": "Nylon",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "323"
  },
  {
    "id": "workwear-overalls-319",
    "collection": "outdoor",
    "name": "Olive short overalls",
    "shortName": "Short overalls",
    "material": "Fabric reference 319",
    "views": [
      "front",
      "texture"
    ],
    "fabricNumber": "319"
  },
  {
    "id": "nylon-down-coat",
    "collection": "thermal",
    "name": "Light grey down coat",
    "shortName": "Down coat",
    "material": "Polyester pongee · 20D nylon backing",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "544"
  },
  {
    "id": "nc-padded-jacket",
    "collection": "thermal",
    "name": "Black padded jacket",
    "shortName": "Padded jacket",
    "material": "Nylon / cotton",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "455"
  },
  {
    "id": "fleece-hoodie-497",
    "collection": "thermal",
    "name": "Navy fleece-backed hoodie",
    "shortName": "Fleece hoodie",
    "material": "Laminated stretch fabric",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "497"
  },
  {
    "id": "nylon-down-jacket-528",
    "collection": "thermal",
    "name": "Blue lightweight down jacket",
    "shortName": "Blue down jacket",
    "material": "Lightweight nylon shell",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "528"
  },
  {
    "id": "blue-padded-parka",
    "collection": "thermal",
    "name": "Blue padded parka",
    "shortName": "Padded parka",
    "material": "Garment application",
    "views": [
      "front",
      "back",
      "texture"
    ]
  },
  {
    "id": "linen-cotton-navy-trousers",
    "collection": "comfort",
    "name": "Dark linen-cotton trousers",
    "shortName": "Dark trousers",
    "material": "Linen / cotton",
    "views": [
      "front",
      "back",
      "texture"
    ]
  },
  {
    "id": "linen-cotton-khaki-shorts",
    "collection": "comfort",
    "name": "Khaki striped linen-cotton shorts",
    "shortName": "Khaki shorts",
    "material": "Linen / cotton · Striped weave",
    "views": [
      "front",
      "back",
      "texture"
    ]
  },
  {
    "id": "linen-cotton-brown-cargo",
    "collection": "comfort",
    "name": "Brown cargo trousers",
    "shortName": "Brown cargo",
    "material": "Linen / cotton",
    "views": [
      "front",
      "alternate",
      "texture"
    ],
    "fabricNumber": "520"
  },
  {
    "id": "linen-trousers-521",
    "collection": "comfort",
    "name": "Navy casual trousers",
    "shortName": "Navy trousers",
    "material": "Linen",
    "views": [
      "front",
      "back",
      "texture"
    ],
    "fabricNumber": "521"
  },
  {
    "id": "linen-cotton-white-shorts",
    "collection": "comfort",
    "name": "White linen-cotton shorts",
    "shortName": "White shorts",
    "material": "Linen / cotton",
    "views": [
      "front",
      "back",
      "texture"
    ]
  },
  {
    "id": "nylon-blazer-527",
    "collection": "outdoor",
    "name": "Olive lightweight blazer",
    "shortName": "Lightweight blazer",
    "material": "Nylon",
    "views": [
      "front",
      "texture"
    ],
    "fabricNumber": "527"
  },
  {
    "id": "lightweight-jacket-526",
    "collection": "outdoor",
    "name": "White lightweight bomber jacket",
    "shortName": "White bomber",
    "material": "Nylon",
    "views": [
      "front",
      "back"
    ],
    "fabricNumber": "526"
  },
  {
    "id": "lightweight-shell-529",
    "collection": "outdoor",
    "name": "White lightweight hooded jacket",
    "shortName": "White hooded jacket",
    "material": "Nylon",
    "views": [
      "front",
      "back"
    ],
    "fabricNumber": "529"
  },
  {
    "id": "light-padded-shell-524",
    "collection": "thermal",
    "name": "Beige lightweight padded jacket",
    "shortName": "Beige padded jacket",
    "material": "Nylon stretch · Three-layer laminate",
    "views": [
      "front",
      "back"
    ],
    "fabricNumber": "524"
  },
  {
    "id": "blue-padded-shell-525",
    "collection": "thermal",
    "name": "Blue hooded padded jacket",
    "shortName": "Blue padded jacket",
    "material": "Nylon stretch · Three-layer laminate",
    "views": [
      "front",
      "back"
    ],
    "fabricNumber": "525"
  }
]

export function garmentImage(id: string, view: GarmentView, size: 480 | 960) {
  return `${import.meta.env.BASE_URL}garments/${id}-${view}-${size}.jpg`
}
