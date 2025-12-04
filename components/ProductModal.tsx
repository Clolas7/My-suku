import React from 'react';
import { MenuItem, SideItem, DrinkItem } from '../types';
import { Icons } from './Icon';
import { SIDES, DRINKS } from '../constants';

interface ProductModalProps {
  item: MenuItem;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="bg-neutral-900 w-full max-w-md h-[85vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col pointer-events-auto animate-in slide-in-from-bottom duration-300 shadow-2xl border border-white/10">
        
        {/* Header / Close */}
        <div className="absolute top-4 right-4 z-10">
          <button onClick={onClose} className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 shadow-sm border border-white/10">
            <Icons.X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
          {/* Image */}
          <div className="h-64 w-full relative">
            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-80" />
          </div>

          <div className="p-6 -mt-10 relative z-10">
            <h2 className="text-2xl font-bold text-white mb-4">{item.name}</h2>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-2 border-b-2 border-red-600 inline-block pb-1">Ingrédients</h3>
              <p className="text-gray-400 leading-relaxed">
                Kafta, pain, fromage, tomate, frites, tabboulé, hommos
              </p>
            </div>

            {/* Accompagnements */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Accompagnements</h3>
              <div className="grid grid-cols-2 gap-4">
                {SIDES.map((side) => (
                  <div key={side.id} className="bg-black border border-neutral-800 rounded-2xl p-4 shadow-sm flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-neutral-800">
                      <img src={side.imageUrl} alt={side.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-white mb-1">{side.name}</span>
                    <span className="text-red-500 font-bold text-sm mb-3">{side.price}</span>
                    <button className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-500 transition-colors">
                      <Icons.Plus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Boissons */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white mb-4">Boissons</h3>
              <div className="grid grid-cols-2 gap-4">
                {DRINKS.map((drink) => (
                  <div key={drink.id} className="bg-black border border-neutral-800 rounded-2xl p-4 shadow-sm flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3 bg-white/5 border-2 border-neutral-800">
                      <img src={drink.imageUrl} alt={drink.name} className="w-full h-full object-cover mix-blend-normal" />
                    </div>
                    <span className="font-bold text-white mb-1">{drink.name}</span>
                    <span className="text-red-500 font-bold text-sm mb-3">{drink.price}</span>
                    <button className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-500 transition-colors">
                      <Icons.Plus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-neutral-900 border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <button className="w-full bg-red-600 text-white font-bold py-4 rounded-full text-lg shadow-lg shadow-red-900/40 hover:bg-red-500 active:scale-95 transition-all flex items-center justify-center gap-2">
            <span>Ajouter au panier</span>
            <span className="bg-black/20 px-2 py-0.5 rounded text-sm">{item.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
};