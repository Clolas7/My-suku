
import React from 'react';
import { Icons } from '../components/Icon';
import { Category, Restaurant } from '../types';
import { RESTAURANTS } from '../constants';

interface CategoryScreenProps {
  category: Category;
  onBack: () => void;
}

export const CategoryScreen: React.FC<CategoryScreenProps> = ({ category, onBack }) => {
  // Filter restaurants by category
  const filteredRestaurants = RESTAURANTS.filter(r => r.categoryId === category.id);

  return (
    <div className="min-h-screen bg-black relative pb-10">
      {/* Header Image */}
      <div className="h-[40vh] w-full relative">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors"
        >
          <Icons.ChevronLeft className="w-6 h-6" />
        </button>

        {/* Share/Fav Icons */}
        <div className="absolute top-4 right-4 flex gap-3">
          <button className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors">
             <Icons.Heart className="w-6 h-6" />
          </button>
           <button className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors">
             <Icons.Share2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative -mt-10 bg-black rounded-t-[2.5rem] p-6 min-h-[60vh]">
        <h1 className="text-3xl font-bold text-white mb-2">{category.name}</h1>
        
        <p className="text-gray-400 mb-6">
          Découvrez les meilleurs {category.name.toLowerCase()} de la ville
        </p>

        {/* Search Input within Category */}
         <div className="relative mb-8">
            <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Rechercher un restaurant..." 
              className="w-full bg-neutral-900 text-white rounded-full py-3.5 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-red-600 border border-neutral-800 placeholder-gray-600"
            />
         </div>

         {/* Filters row */}
         <div className="flex items-center gap-4 mb-8 overflow-x-auto no-scrollbar pb-2">
            <button className="flex items-center gap-2 text-sm text-gray-400 whitespace-nowrap bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
              <Icons.Tag className="w-4 h-4" />
              En promotion
            </button>
             <button className="flex items-center gap-2 text-sm text-gray-400 whitespace-nowrap bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
              <Icons.Navigation className="w-4 h-4" />
              Plus proches
            </button>
             {/* Updated 'Best Rated' to Red */}
             <button className="flex items-center gap-2 text-sm text-red-500 font-bold whitespace-nowrap border-b-2 border-red-500 pb-1 px-1">
              <Icons.Star className="w-4 h-4 fill-red-500" />
              Mieux notés
            </button>
         </div>

         {/* Results List */}
         <div className="flex flex-col gap-6">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <div 
                  key={restaurant.id} 
                  className="bg-neutral-900 rounded-[2rem] shadow-xl overflow-hidden cursor-pointer active:scale-[0.99] transition-transform border border-neutral-800 pb-2"
                >
                  <div className="relative h-48">
                    <img 
                      src={restaurant.imageUrl} 
                      alt={restaurant.name} 
                      className="w-full h-full object-cover opacity-90" 
                    />
                    
                    {/* Open/Closed Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-md ${restaurant.isOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                        {restaurant.isOpen ? 'Ouvert' : 'Fermé'}
                    </div>

                    {/* Discount Badge */}
                    {restaurant.discount && (
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-2.5 py-1 rounded-full flex items-center gap-1 text-[10px] font-bold shadow-md">
                        <Icons.Tag className="w-3 h-3 fill-white" />
                        {restaurant.discount}
                      </div>
                    )}

                    {/* Distance Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full flex items-center gap-1 text-[10px] font-bold border border-white/10">
                      <Icons.Bike className="w-3 h-3" />
                      {restaurant.distance}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                       <h3 className="text-lg font-bold text-white">{restaurant.name}</h3>
                       <div className="flex items-center gap-1.5 bg-neutral-800 px-2 py-1 rounded-lg">
                          <Icons.Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                          <span className="text-sm font-bold text-white">{restaurant.rating}</span>
                          <span className="text-xs text-gray-400">({restaurant.reviewCount})</span>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                       <Icons.MapPin className="w-3.5 h-3.5 text-gray-500" />
                       <span>{restaurant.location}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">Aucun restaurant trouvé dans cette catégorie.</p>
              </div>
            )}
         </div>

      </div>
    </div>
  );
};
