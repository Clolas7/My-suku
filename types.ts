

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isOpen: boolean;
  discount?: string;
  distance: string;
  timeRange?: string;
  categoryId?: string; // Link restaurant to a category
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // e.g., "120 DHS"
  imageUrl: string;
  isPopular?: boolean;
}

export interface SideItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export interface DrinkItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}