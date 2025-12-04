
import React, { useState } from 'react';
import { CATEGORIES, RESTAURANTS } from '../constants';
import { Icons } from '../components/Icon';
import { Restaurant, Category } from '../types';

interface HomeScreenProps {
  onRestaurantClick: (restaurant: Restaurant) => void;
  onCategoryClick: (category: Category) => void;
  onOpenSidebar: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onRestaurantClick, onCategoryClick, onOpenSidebar }) => {
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Custom Red Header matching Image 2 */}
      <div className="bg-red-600 text-white px-4 pt-4 pb-8 rounded-b-[2rem] shadow-lg relative z-10">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={onOpenSidebar} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <Icons.Menu className="w-7 h-7" />
          </button>
          <h1 className="text-lg font-bold tracking-wide">Accueil</h1>
          <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <Icons.Filter className="w-6 h-6" />
          </button>
        </div>

        {/* Location Info */}
        <div className="flex flex-col items-center mb-8 text-center px-4">
          <Icons.MapPin className="w-8 h-8 mb-2 fill-white text-red-600" />
          <h2 className="text-xl font-bold leading-tight">
            Ouakam, PGH3+3P, Dakar, Sénégal
          </h2>
        </div>

        {/* Order Type Selector */}
        <div className="mb-2">
          <p className="text-white/90 text-center text-sm mb-4 font-medium">Sélectionnez le type/mode de commande:</p>
          <div className="flex justify-center items-center gap-10">
            {/* Delivery Radio */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                 <div className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center transition-all ${orderType === 'delivery' ? 'bg-white' : 'bg-transparent'}`}>
                    {orderType === 'delivery' && <div className="w-3 h-3 rounded-full bg-red-600" />}
                 </div>
                 <input 
                  type="radio" 
                  name="orderType" 
                  className="sr-only" 
                  checked={orderType === 'delivery'}
                  onChange={() => setOrderType('delivery')}
                />
              </div>
              <span className={`text-xl ${orderType === 'delivery' ? 'font-bold' : 'font-normal opacity-90'}`}>Livraison</span>
            </label>

            {/* Takeaway Radio */}
             <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                 <div className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center transition-all ${orderType === 'takeaway' ? 'bg-white' : 'bg-transparent'}`}>
                    {orderType === 'takeaway' && <div className="w-3 h-3 rounded-full bg-red-600" />}
                 </div>
                 <input 
                  type="radio" 
                  name="orderType" 
                  className="sr-only" 
                  checked={orderType === 'takeaway'}
                  onChange={() => setOrderType('takeaway')}
                />
              </div>
              <span className={`text-xl ${orderType === 'takeaway' ? 'font-bold' : 'font-normal opacity-90'}`}>A emporter</span>
            </label>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Catégories</h2>
        <div className="flex justify-between items-start gap-2 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="flex flex-col items-center w-20 text-center cursor-pointer group"
              onClick={() => onCategoryClick(cat)}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3 shadow-md border-2 border-transparent group-hover:border-red-600 transition-all bg-neutral-900">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover opacity-90" />
              </div>
              <span className="text-xs font-bold text-white leading-tight">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Restaurants à proximité</h2>
        
        <div className="flex flex-col gap-8">
          {RESTAURANTS.map((restaurant) => (
            <div 
              key={restaurant.id} 
              className="bg-neutral-900 rounded-[2rem] shadow-xl overflow-hidden cursor-pointer active:scale-[0.99] transition-transform border border-neutral-800 pb-2"
              onClick={() => onRestaurantClick(restaurant)}
            >
              <div className="relative h-56">
                <img 
                  src={restaurant.imageUrl} 
                  alt={restaurant.name} 
                  className="w-full h-full object-cover opacity-90" 
                />
                
                {/* Open/Closed Badge */}
                <div className={`absolute top-5 left-5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md ${restaurant.isOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {restaurant.isOpen ? 'Ouvert' : 'Fermé'}
                </div>

                {/* Discount Badge */}
                {restaurant.discount && (
                  <div className="absolute top-5 right-5 bg-red-600 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-md">
                    <Icons.Tag className="w-3 h-3 fill-white" />
                    {restaurant.discount}
                  </div>
                )}

                {/* Distance Badge */}
                <div className="absolute bottom-5 right-5 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold border border-white/10">
                  <Icons.Bike className="w-3.5 h-3.5" />
                  {restaurant.distance}
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                   <h3 className="text-xl font-bold text-white">{restaurant.name}</h3>
                   <div className="flex items-center gap-1.5 bg-neutral-800 px-2 py-1 rounded-lg">
                      <Icons.Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                      <span className="text-sm font-bold text-white">{restaurant.rating}</span>
                      <span className="text-xs text-gray-400">({restaurant.reviewCount} Avis)</span>
                   </div>
                </div>
                
                <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                   <Icons.MapPin className="w-4 h-4 text-gray-500" />
                   <span>{restaurant.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
