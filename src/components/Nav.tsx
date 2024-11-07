import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Database, Utensils, Calendar, ShoppingCart, BadgeInfo, Contact2 } from 'lucide-react';

const Nav = ({ isMenuOpen }) => {
  const navItems = [
    { to: "/", icon: HomeIcon, text: "Home" },
    { to: "/inventory", icon: Database, text: "Inventory" },
    { to: "/dishes", icon: Utensils, text: "Dishes" },
    { to: "/expiration", icon: Calendar, text: "Expiration List" },
    { to: "/shopping", icon: ShoppingCart, text: "Shopping List" },
  ];

  const additionalItems = [
    { to: "/about", icon: BadgeInfo, text: "About Us" },
    { to: "/contact", icon: Contact2, text: "Contact" }
  ];

  return (
    <nav className={`bg-white shadow-soft w-64 min-h-screen ${isMenuOpen ? '' : 'hidden'} md:block`}>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h1 className="text-2xl font-bold text-primary-600 mb-6">Nimble It</h1>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex items-center p-2 text-gray-500 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <item.icon size={20} className="mr-3" />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <ul className="space-y-2">
            {additionalItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex items-center p-2 text-gray-500 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <item.icon size={20} className="mr-3" />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

