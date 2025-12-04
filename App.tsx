
import React, { useState } from 'react';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { RestaurantDetailsScreen } from './screens/RestaurantDetailsScreen';
import { CategoryScreen } from './screens/CategoryScreen';
import { Sidebar } from './components/Sidebar';
import { ProductModal } from './components/ProductModal';
import { Restaurant, MenuItem, Category } from './types';

type Screen = 'login' | 'home' | 'details' | 'category';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const navigateToDetails = (restaurant: Restaurant) => {
    setSelectedRestaurantId(restaurant.id);
    setCurrentScreen('details');
    window.scrollTo(0, 0);
  };

  const navigateToCategory = (category: Category) => {
    setSelectedCategory(category);
    setCurrentScreen('category');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
    window.scrollTo(0, 0);
  };

  const handleSkipLogin = () => {
    setCurrentScreen('home');
  };

  return (
    <div className="max-w-md mx-auto bg-black min-h-screen shadow-2xl overflow-hidden relative font-sans text-white">
      
      {/* Sidebar Navigation */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onNavigate={navigateToHome}
      />

      {/* Product Details Modal */}
      {selectedItem && (
        <ProductModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}

      {/* Main Screen Content */}
      <div className={`transition-transform duration-300 ${isSidebarOpen ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
        
        {currentScreen === 'login' && (
          <LoginScreen onSkip={handleSkipLogin} />
        )}

        {currentScreen === 'home' && (
          <HomeScreen 
            onRestaurantClick={navigateToDetails} 
            onCategoryClick={navigateToCategory}
            onOpenSidebar={() => setIsSidebarOpen(true)}
          />
        )}

        {currentScreen === 'category' && selectedCategory && (
          <CategoryScreen 
            category={selectedCategory} 
            onBack={navigateToHome} 
          />
        )}

        {currentScreen === 'details' && (
          <RestaurantDetailsScreen 
            onBack={navigateToHome} 
            restaurantId={selectedRestaurantId}
            onItemClick={(item) => setSelectedItem(item)}
          />
        )}
      </div>

    </div>
  );
};

export default App;
