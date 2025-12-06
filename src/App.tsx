import { useState, useEffect } from "react";
import StartPage from "./components/StartPage";
import WelcomePage1 from "./components/WelcomePage1";
import WelcomePage2 from "./components/WelcomePage2";
import WelcomePage3 from "./components/WelcomePage3";
import OptionDeConnexion from "./components/OptionDeConnexion";
import HomeCategorie from "./components/HomeCategorie";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Timer pour le splash screen de 7 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleStart = () => {
    // Passer à la page de connexion
    setCurrentPage(4);
  };

  const handleSkipLogin = () => {
    // Passer à la page d'accueil
    setCurrentPage(5);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Conteneur iPhone 16 - 393 x 852 */}
      <div className="relative w-[393px] h-[852px] bg-black rounded-[60px] overflow-hidden shadow-[0px_0px_0px_14px_#1c1c1e,0px_0px_0px_16px_#111]">
        {/* Dynamic Island area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-b-[20px] z-50" />
        
        {/* Content area */}
        <div className="relative w-full h-full flex items-center justify-center">
          {showSplash ? (
            <StartPage />
          ) : (
            <>
              {currentPage === 1 && <WelcomePage1 onNext={handleNext} />}
              {currentPage === 2 && <WelcomePage2 onNext={handleNext} />}
              {currentPage === 3 && <WelcomePage3 onStart={handleStart} />}
              {currentPage === 4 && (
                <div onClick={handleSkipLogin} className="w-full h-full">
                  <OptionDeConnexion />
                </div>
              )}
              {currentPage === 5 && <HomeCategorie />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}