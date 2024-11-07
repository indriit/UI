import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Nav from './components/Nav';
import Home from './components/Home';
import Inventory from './components/Inventaris';
import Dishes from './components/Borden';
import ExpirationList from './components/Vervallijst';
import ShoppingList from './components/Boodschappenlijstje';
import PossibleDishes from './components/MogelijkeGerechten';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex overflow-hidden">
        <Nav isMenuOpen={isMenuOpen} />
        <div className="flex-1 flex flex-col">
          <div className="md:hidden p-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <Menu size={24} />
            </button>
          </div>
          <main className="flex-1 p-6 sm:p-10 overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/dishes" element={<Dishes />} />
              <Route path="/expiration" element={<ExpirationList />} />
              <Route path="/shopping" element={<ShoppingList />} />
              <Route path="/possible-dishes" element={<PossibleDishes />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
