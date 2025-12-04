
import React from 'react';
import { Icons } from '../components/Icon';
import { LOGIN_BG_IMAGE } from '../constants';

interface LoginScreenProps {
  onSkip: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onSkip }) => {
  return (
    <div className="h-screen w-full relative bg-black flex flex-col items-center justify-end pb-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={LOGIN_BG_IMAGE} 
          alt="Login Background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 flex flex-col gap-4">
        
        {/* Email Button */}
        <button className="w-full bg-neutral-800/80 backdrop-blur-md text-white font-medium py-4 rounded-xl flex items-center justify-center gap-3 border border-white/10 hover:bg-neutral-700 transition-colors">
          <Icons.MessageSquare className="w-5 h-5 text-red-500" />
          Se connecter par e-mail
        </button>

        {/* Phone Button */}
        <button className="w-full bg-neutral-800/80 backdrop-blur-md text-white font-medium py-4 rounded-xl flex items-center justify-center gap-3 border border-white/10 hover:bg-neutral-700 transition-colors">
          <Icons.Phone className="w-5 h-5 text-red-500" /> {/* Need Phone icon, using generic or added one */}
          Se connecter par téléphone
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="h-[1px] bg-white/20 flex-1"></div>
          <span className="text-sm text-gray-400">ou continuer avec</span>
          <div className="h-[1px] bg-white/20 flex-1"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6 mb-4">
          <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
             <span className="font-bold text-xl text-black">G</span>
          </button>
          <button className="w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-lg">
            <Icons.Apple className="w-7 h-7 text-white fill-white" />
          </button>
          <button className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg">
            <Icons.Facebook className="w-7 h-7 text-white fill-white" />
          </button>
        </div>

        {/* Skip Button */}
        <button 
          onClick={onSkip}
          className="w-full bg-white/10 backdrop-blur-md text-white font-bold py-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
        >
          Ignorer pour l'instant
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Vous n'avez pas de compte ? <span className="text-white font-bold underline cursor-pointer">S'inscrire</span>
        </p>
      </div>
    </div>
  );
};
