import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Utensils, Calendar, ShoppingCart } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    { icon: Database, title: 'Inventory', description: 'Keep track of all your food items', link: '/inventory' },
    { icon: Utensils, title: 'Dishes', description: 'Manage your recipes and meal plans', link: '/dishes' },
    { icon: Calendar, title: 'Expiration Tracking', description: 'Never let food go to waste', link: '/expiration' },
    { icon: ShoppingCart, title: 'Shopping List', description: 'Easily create and manage your grocery list', link: '/shopping' },
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-r from-primary-800 to-primary-800 text-white pt-20   rounded-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-10">Nimble  it</h1>
          <p className="text-xl mb-8 max-w-2xl">
          Vereenvoudig je keukenorganisatie, verminder voedselverspilling en maak maaltijdplanning makkelijker met ons uitgebreide voedselbeheersysteem.
          </p>
          <Link to="/inventory" className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-primary-100 transition duration-300">
            Get Started
          </Link>
        </div>

          <div className="container mx-auto px-4 py-40">
            <h2 className="text-4xl font-bold text-center mb-10">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Link key={index} to={feature.link} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                  <feature.icon className="w-12 h-12 text-primary-500 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-center text-primary-600">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </Link>
              ))}
            </div>
          </div>
      </div>

    </div>
  );
};

export default Home;