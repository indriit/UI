import React, { useState, useEffect } from 'react';

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

const PossibleDishes: React.FC = () => {
  const [possibleDishes, setPossibleDishes] = useState<Dish[]>([]);

  useEffect(() => {
    // Fetch possible dishes based on inventory
    // This is a placeholder and should be replaced with actual API call
    const fetchPossibleDishes = async () => {
      // const response = await fetch('/api/possible-dishes');
      // const data = await response.json();
      // setPossibleDishes(data);
      
      // Placeholder data
      setPossibleDishes([
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
        {
          id: 2,
          name: 'Caesar Salad',
          imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          ingredients: [
            { name: 'Romaine Lettuce', quantity: 1, unit: 'quantity' },
            { name: 'Croutons', quantity: 100, unit: 'weight' },
            { name: 'Parmesan Cheese', quantity: 50, unit: 'weight' },
            { name: 'Caesar Dressing', quantity: 1, unit: 'quantity' },
          ],
        },
        // Add more placeholder dishes as needed
      ]);
    };

    fetchPossibleDishes();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-primary-600">Possible Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {possibleDishes.map((dish) => (
          <div key={dish.id} className="bg-white p-6 rounded-lg shadow-soft hover-lift">
            <img src={dish.imageUrl} alt={dish.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary-600">{dish.name}</h3>
            <h4 className="text-lg font-medium mb-2 text-gray-700">Ingredients:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {dish.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name}: {ingredient.quantity} {ingredient.unit === 'weight' ? 'grams' : 'items'}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PossibleDishes;