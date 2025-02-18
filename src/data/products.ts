export interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  image: string;
  slug: string;
  category: string;
  subcategory?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Focal Clear',
    price: 12999,
    brand: 'Focal',
    image: '/images/focal_clear.jpg',
    slug: 'focal-clear',
    category: 'headphones',
    subcategory: 'over-ear'
  },
  {
    id: '2',
    name: 'Sennheiser HD800S',
    price: 13999,
    brand: 'Sennheiser',
    image: '/images/sennheiser_hd800s.jpg',
    slug: 'sennheiser-hd800s',
    category: 'headphones',
    subcategory: 'over-ear'
  },
  {
    id: '3',
    name: 'Sony MDR-Z1R',
    price: 15999,
    brand: 'Sony',
    image: '/images/SONY_MDR_Z1R.jpg',
    slug: 'sony-mdr-z1r',
    category: 'headphones',
    subcategory: 'over-ear'
  },
  {
    id: '4',
    name: 'Beyerdynamic T1',
    price: 11999,
    brand: 'Beyerdynamic',
    image: '/images/Beyerdynamic_T1.jpg',
    slug: 'beyerdynamic-t1',
    category: 'headphones',
    subcategory: 'over-ear'
  },
  {
    id: '5',
    name: 'Chord Hugo 2',
    price: 19999,
    brand: 'Chord',
    image: '/images/chord_hugo2.jpg',
    slug: 'chord-hugo2',
    category: 'dacs-amps',
    subcategory: 'portable'
  },
  {
    id: '6',
    name: 'Schiit Magnius',
    price: 2499,
    brand: 'Schiit',
    image: '/images/schiit_magnius.jpg',
    slug: 'schiit-magnius',
    category: 'dacs-amps',
    subcategory: 'desktop'
  },
  {
    id: '7',
    name: 'AudioQuest DragonFly Red',
    price: 1999,
    brand: 'AudioQuest',
    image: '/images/dragonfly_red.jpg',
    slug: 'dragonfly-red',
    category: 'dacs-amps',
    subcategory: 'portable'
  },
  {
    id: '8',
    name: 'ZMF Pilot Pad',
    price: 599,
    brand: 'ZMF',
    image: '/images/zmf_pilot_pad.jpg',
    slug: 'zmf-pilot-pad',
    category: 'accessories',
    subcategory: 'ear-pads'
  },
  {
    id: '9',
    name: 'Hart Audio Cable',
    price: 899,
    brand: 'Hart Audio',
    image: '/images/hart_cable.jpg',
    slug: 'hart-audio-cable',
    category: 'accessories',
    subcategory: 'cables'
  },
  {
    id: '10',
    name: "Room's Audio Line Stand",
    price: 1299,
    brand: "Room's Audio Line",
    image: '/images/rooms_stand.jpg',
    slug: 'rooms-stand',
    category: 'accessories',
    subcategory: 'stands'
  },
  {
    id: '11',
    name: 'Audeze LCD-X',
    price: 11999,
    brand: 'Audeze',
    image: '/images/audeze_lcd_x.jpg',
    slug: 'audeze-lcd-x',
    category: 'headphones',
    subcategory: 'over-ear'
  },
  {
    id: '12',
    name: 'Dan Clark Audio Aeon 2',
    price: 8999,
    brand: 'Dan Clark Audio',
    image: '/images/dca_aeon2.jpg',
    slug: 'dca-aeon2',
    category: 'headphones',
    subcategory: 'over-ear'
  },
  {
    id: '13',
    name: 'RME ADI-2 DAC',
    price: 11999,
    brand: 'RME',
    image: '/images/rme_adi2.jpg',
    slug: 'rme-adi2',
    category: 'dacs-amps',
    subcategory: 'desktop'
  },
  {
    id: '14',
    name: 'Topping D90',
    price: 8999,
    brand: 'Topping',
    image: '/images/topping_d90.jpg',
    slug: 'topping-d90',
    category: 'dacs-amps',
    subcategory: 'desktop'
  },
  {
    id: '15',
    name: 'Dekoni Audio Pads',
    price: 699,
    brand: 'Dekoni Audio',
    image: '/images/dekoni_pads.jpg',
    slug: 'dekoni-pads',
    category: 'accessories',
    subcategory: 'ear-pads'
  },
  {
    id: '16',
    name: 'Headphone Stand Pro',
    price: 799,
    brand: 'AudioQuest',
    image: '/images/headphone_stand.jpg',
    slug: 'headphone-stand-pro',
    category: 'accessories',
    subcategory: 'stands'
  }
];