
import { Category, MenuItem, Restaurant, SideItem, DrinkItem } from './types';

export const LOGIN_BG_IMAGE = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Resto africains',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&h=200&fit=crop', 
  },
  {
    id: '2',
    name: 'Course & épiceries',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop', 
  },
  {
    id: '3',
    name: 'Pharmacie',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=200&h=200&fit=crop', 
  },
  {
    id: '4',
    name: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=200&fit=crop', 
  },
];

export const RESTAURANTS: Restaurant[] = [
  // Fast Food (Category 4)
  {
    id: '1',
    name: 'YOU BURGERS Ngor',
    location: 'Rond Point Ngor',
    rating: 4.5,
    reviewCount: 43,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
    isOpen: true,
    discount: '-20%',
    distance: '2.50 km',
    timeRange: '11:00-15:00 - 15:00-22:30',
    categoryId: '4'
  },
  {
    id: '2',
    name: 'YOU CHICKEN Ngor',
    location: 'Rond Point Ngor',
    rating: 3.6,
    reviewCount: 8,
    imageUrl: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop',
    isOpen: false,
    distance: '2.51 km',
    categoryId: '4'
  },
  {
    id: '3',
    name: 'La Boulangerie',
    location: 'Centre Ville',
    rating: 4.8,
    reviewCount: 120,
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    isOpen: true,
    discount: '-15%',
    distance: '3.20 km',
    categoryId: '4'
  },
  {
    id: '4',
    name: 'MY WAY',
    location: 'Route des Almadies',
    rating: 4.0,
    reviewCount: 21,
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    isOpen: true,
    timeRange: '11:00-15:00 - 15:00-22:30',
    distance: '1.2 km',
    categoryId: '4'
  },

  // Resto Africains (Category 1)
  {
    id: '5',
    name: 'Chez Loutcha',
    location: 'Plateau, Dakar',
    rating: 4.7,
    reviewCount: 230,
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop', // African dish style
    isOpen: true,
    distance: '5.4 km',
    timeRange: '12:00 - 23:00',
    categoryId: '1'
  },
  {
    id: '6',
    name: 'Le Djembe',
    location: 'Ouakam',
    rating: 4.3,
    reviewCount: 85,
    imageUrl: 'https://images.unsplash.com/photo-1574484284008-be9d69806288?w=600&h=400&fit=crop',
    isOpen: true,
    discount: '-10%',
    distance: '1.8 km',
    categoryId: '1'
  },
  {
    id: '7',
    name: 'Saveurs du Sénégal',
    location: 'Yoff',
    rating: 4.1,
    reviewCount: 45,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
    isOpen: false,
    distance: '4.2 km',
    categoryId: '1'
  },

  // Course & épiceries (Category 2)
  {
    id: '8',
    name: 'Auchan Mermoz',
    location: 'Mermoz',
    rating: 4.2,
    reviewCount: 500,
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop', // Supermarket aisle
    isOpen: true,
    distance: '3.0 km',
    categoryId: '2'
  },
  {
    id: '9',
    name: 'Citydia Ouakam',
    location: 'Ouakam',
    rating: 3.9,
    reviewCount: 150,
    imageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=400&fit=crop',
    isOpen: true,
    distance: '0.5 km',
    categoryId: '2'
  },

  // Pharmacie (Category 3)
  {
    id: '10',
    name: 'Pharmacie des Almadies',
    location: 'Les Almadies',
    rating: 4.9,
    reviewCount: 60,
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop',
    isOpen: true,
    distance: '2.1 km',
    categoryId: '3'
  },
  {
    id: '11',
    name: 'Pharmacie Atlantique',
    location: 'Corniche Ouest',
    rating: 4.6,
    reviewCount: 30,
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
    isOpen: true,
    distance: '6.5 km',
    categoryId: '3'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '101',
    name: 'Kafta tablieh',
    description: '2 sandwiches kafta, fromage, tomate // Servi avec frites, tabboulé et hommos',
    price: '120 DHS',
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=600&fit=crop', 
    isPopular: true,
  },
  {
    id: '102',
    name: 'Double Cheese',
    description: 'Double steak haché, cheddar, salade, tomate, oignons',
    price: '150 DHS',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop', 
    isPopular: true,
  },
  {
    id: '103',
    name: 'Shawarma Plate',
    description: 'Assiette chawarma poulet ou viande, servi avec frites et salade',
    price: '90 DHS',
    imageUrl: 'https://images.unsplash.com/photo-1529006557810-274bc0b61f9c?w=600&h=600&fit=crop',
  },
];

export const SIDES: SideItem[] = [
  {
    id: 's1',
    name: 'Frites',
    price: '15 FCFA',
    imageUrl: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=200&h=200&fit=crop',
  },
  {
    id: 's2',
    name: 'Salade',
    price: '10 FCFA',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop',
  }
];

export const DRINKS: DrinkItem[] = [
  {
    id: 'd1',
    name: 'Coca Cola',
    price: '8 FCFA',
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&h=200&fit=crop',
  },
  {
    id: 'd2',
    name: 'Sprite',
    price: '8 FCFA',
    imageUrl: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=200&h=200&fit=crop',
  }
];