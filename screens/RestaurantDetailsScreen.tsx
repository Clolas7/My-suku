import React from 'react';
import { Header } from '../components/Header';
import { MENU_ITEMS, RESTAURANTS } from '../constants';
import { Icons } from '../components/Icon';
import { Restaurant, MenuItem } from '../types';

interface RestaurantDetailsProps {
  onBack: () => void;
  restaurantId?: string;
  onItemClick: (item: MenuItem) => void;
}

export const RestaurantDetailsScreen: React.FC<RestaurantDetailsProps> = ({ onBack, restaurantId, onItemClick }) => {
  // Fallback to first restaurant if none selected for demo purposes
  const restaurant = RESTAURANTS.find(r => r.id === restaurantId) || RESTAURANTS[0];

  return (
    <div className="min-h-screen bg-black">
      <Header type="details" title="Restaurant" onBack={onBack} />
      
      {/* Restaurant Info Card */}
      <div className="bg-neutral-900 m-4 p-5 rounded-2xl shadow-sm border border-neutral-800">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-black text-white mb-1 uppercase tracking-tight">{restaurant.name}</h1>
            <div className="flex items-center gap-1 text-gray-400 text-sm mb-2">
              <Icons.MapPin className="w-4 h-4 text-red-600" />
              <span>{restaurant.location}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Icons.Clock className="w-4 h-4 text-gray-500" />
              <span>{restaurant.timeRange || '10:00 - 23:00'}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-yellow-500 text-black px-2 py-1 rounded-lg">
            <Icons.Star className="w-4 h-4 fill-black" />
            <span className="font-bold text-sm">{restaurant.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-500 border-t border-white/10 pt-3">
            <Icons.MessageSquare className="w-4 h-4" />
            <span>{restaurant.reviewCount} Avis</span>
            <span className="mx-1">•</span>
            <span className="text-green-500 font-medium">Bon goût, bon service</span>
        </div>
      </div>

      {/* Menu Navigation (Tabs) */}
      <div className="bg-black border-b border-white/10">
        <div className="flex overflow-x-auto no-scrollbar px-2">
          {['ARTICLE POPULAIRE', 'TABLIEH - PLATEAUX', 'BURGERS', 'DESSERTS'].map((tab, idx) => (
            <button 
              key={idx}
              className={`whitespace-nowrap px-4 py-4 text-sm font-bold transition-all border-b-2 ${
                idx === 0 
                  ? 'text-red-500 border-red-500' 
                  : 'text-gray-500 border-transparent hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <div className="p-4 pb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white uppercase">ARTICLE POPULAIRE</h2>
          <button className="bg-neutral-900 p-2 rounded-full hover:bg-neutral-800 border border-white/10">
            <Icons.ArrowRight className="w-5 h-5 text-white"/>
          </button>
        </div>

        {/* Horizontal Scroll List */}
        <div className="flex overflow-x-auto gap-4 pb-6 no-scrollbar">
           {MENU_ITEMS.map((item) => (
             <div 
                key={item.id} 
                onClick={() => onItemClick(item)}
                className="min-w-[280px] bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-neutral-800 hover:border-red-900/50 transition-all cursor-pointer group"
             >
               <div className="h-48 overflow-hidden relative">
                 <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
               </div>
               <div className="p-4">
                 <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-white line-clamp-1">{item.name}</h3>
                 </div>
                 <p className="text-gray-400 text-sm mb-4 line-clamp-1">{item.description}</p>
                 
                 <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-red-500">{item.price}</span>
                    <button className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-sm text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                      <Icons.Plus className="w-5 h-5" />
                    </button>
                 </div>
               </div>
             </div>
           ))}
           {/* View More Card */}
           <div className="min-w-[100px] bg-neutral-900 rounded-2xl flex flex-col items-center justify-center text-gray-500 border border-dashed border-neutral-700 hover:border-red-500 hover:text-red-500 transition-colors cursor-pointer">
              <Icons.ArrowRight className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Voir tout</span>
           </div>
        </div>
      </div>
    </div>
  );
};