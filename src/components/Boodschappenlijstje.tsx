import React, { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface ShoppingItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

const ShoppingList: React.FC = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1, unit: 'item' });

  useEffect(() => {
    // Fetch shopping list from the backend
    // This is a placeholder and should be replaced with actual API call
    const fetchShoppingList = async () => {
      // const response = await fetch('/api/shopping-list');
      // const data = await response.json();
      // setShoppingList(data);
      
      // Placeholder data
      setShoppingList([
        { id: 1, name: 'Eggs', quantity: 12, unit: 'item' },
        { id: 2, name: 'Milk', quantity: 1, unit: 'liter' },
        // Add more placeholder items as needed
      ]);
    };

    fetchShoppingList();
  }, []);

  const addItem = () => {
    if (newItem.name.trim() === '') return;
    const item = { ...newItem, id: Date.now() };
    setShoppingList([...shoppingList, item]);
    setNewItem({ name: '', quantity: 1, unit: 'item' });
    // Here you would also send a POST request to the backend to add the item
  };

  const removeItem = (id: number) => {
    setShoppingList(shoppingList.filter(item => item.id !== id));
    // Here you would also send a DELETE request to the backend to remove the item
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-primary-600">Shopping List</h2>
      <div className="mb-6 flex space-x-2">
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Item name"
          className="border rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <input
          type="number"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
          min="1"
          className="border rounded-lg p-2 w-20 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <select
          value={newItem.unit}
          onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="item">Item</option>
          <option value="kg">Kg</option>
          <option value="liter">Liter</option>
        </select>
        <button
          onClick={addItem}
          className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition-colors duration-200"
        >
          <Plus size={20} className="mr-2" />
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {shoppingList.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-soft hover-lift">
            <span className="text-gray-700">{item.name} - {item.quantity} {item.unit}</span>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-600 transition-colors duration-200"
            >
              <Trash2 size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;