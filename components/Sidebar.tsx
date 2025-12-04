
import React from 'react';
import { Icons } from './Icon';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: 'home') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-neutral-900 z-[70] transform transition-transform duration-300 ease-in-out shadow-[10px_0_30px_rgba(0,0,0,0.5)] rounded-r-3xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8 flex flex-col h-full relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-red-600/10 blur-2xl pointer-events-none"></div>

          {/* Logo Section */}
          <div className="mb-10 relative z-10">
            <div className="w-24 h-24 rounded-full border-4 border-red-600 flex items-center justify-center mb-5 bg-black shadow-xl">
              <span className="text-3xl font-black text-white tracking-tighter">
                <span className="text-green-500">T</span>
                <span className="text-white">T</span>
                <span className="text-red-500">D</span>
              </span>
            </div>
            <h2 className="text-2xl font-medium text-white leading-tight">
              Bienvenue, <br/>
              <span className="font-bold">utilisateur invité</span>
            </h2>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-3 relative z-10">
            <button 
              onClick={() => { onNavigate('home'); onClose(); }}
              className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-900/30 transition-transform active:scale-95"
            >
              <Icons.HomeIcon className="w-6 h-6" />
              <span className="font-bold text-lg">Accueil</span>
            </button>
            
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors group">
              <Icons.ShoppingBag className="w-6 h-6 group-hover:text-red-500 transition-colors" />
              <span className="font-medium text-lg">Mes commandes</span>
            </button>

            <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors group">
              <Icons.Bell className="w-6 h-6 group-hover:text-red-500 transition-colors" />
              <span className="font-medium text-lg">Notifications</span>
            </button>

            <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors group">
              <Icons.Info className="w-6 h-6 group-hover:text-red-500 transition-colors" />
              <span className="font-medium text-lg">A propos</span>
            </button>
          </nav>

          {/* Footer / Socials */}
          <div className="mt-auto relative z-10">
            <div className="flex items-center gap-8 mb-6 px-2 justify-center">
              <button className="text-blue-500 hover:text-blue-400 transition-transform hover:scale-110">
                <Icons.Facebook className="w-7 h-7" />
              </button>
              <button className="text-white hover:text-gray-300 transition-transform hover:scale-110">
                <Icons.Music2 className="w-7 h-7" />
              </button>
              <button className="text-pink-500 hover:text-pink-400 transition-transform hover:scale-110">
                <Icons.Instagram className="w-7 h-7" />
              </button>
            </div>
            <p className="text-gray-600 text-sm text-center">Version 1.5</p>
          </div>
        </div>
      </div>
    </>
  );
};
