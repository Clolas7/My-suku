import React from 'react';
import { Icons } from './Icon';

interface HeaderProps {
  type: 'home' | 'details';
  title: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ type, title, onBack }) => {
  if (type === 'home') {
    return (
      <div className="sticky top-0 z-50 bg-neutral-900 text-white px-4 py-4 flex items-center justify-between shadow-md">
        <button className="p-1">
          <Icons.Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">{title}</h1>
        <button className="p-1">
          <Icons.Filter className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 bg-neutral-900 text-white px-4 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-1">
          <Icons.ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <button>
          <Icons.Search className="w-5 h-5" />
        </button>
        <button>
          <Icons.ShoppingCart className="w-5 h-5" />
        </button>
        <button>
          <Icons.MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};