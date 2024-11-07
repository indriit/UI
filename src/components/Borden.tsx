import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  imageUrl: string;
  ingredients: {
    name: string;
    quantity: number;
    unit: 'quantity' | 'weight';
  }[];
}

const Dishes: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  useEffect(() => {
    // Fetch dishes data from the backend
    // This is a placeholder and should be replaced with actual API call
    const fetchDishes = async () => {
      // const response = await fetch('/api/dishes');
      // const data = await response.json();
      // setDishes(data);
      
      // Placeholder data
      setDishes([
        {
          id: 1,
          name: 'Spaghetti Bolognese',
          imageUrl: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          ingredients: [
            { name: 'Spaghetti', quantity: 500, unit: 'weight' },
            { name: 'Ground Beef', quantity: 400, unit: 'weight' },
            { name: 'Tomato Sauce', quantity: 2, unit: 'quantity' },
            { name: 'Onion', quantity: 1, unit: 'quantity' },
          ],
        },
        // Add more placeholder dishes as needed
      ]);
    };

    fetchDishes();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-primary-600">Dishes</h2>
        <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition-colors duration-200">
          <Plus size={20} className="mr-2" />
          Add Dish
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white p-6 rounded-lg shadow-soft cursor-pointer hover-lift"
            onClick={() => setSelectedDish(dish)}
          >
            <img src={dish.imageUrl} alt={dish.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary-600">{dish.name}</h3>
            <p className="text-gray-600">{dish.ingredients.length} ingredients</p>
          </div>
        ))}
      </div>
      {selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-4 text-primary-600">{selectedDish.name}</h3>
            <img src={selectedDish.imageUrl} alt={selectedDish.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-700">Ingredients:</h4>
            <ul className="space-y-2">
              {selectedDish.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">
                  {ingredient.name}: {ingredient.quantity} {ingredient.unit === 'weight' ? 'grams' : 'items'}
                </li>
              ))}
            </ul>
            <button
              className="mt-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              onClick={() => setSelectedDish(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dishes;