import React, { useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import { getInventory, addInventoryItem, deleteInventoryItem } from '../services/api';

interface InventoryItem {
  id: number;
  name: string;
  imageUrl: string;
  foodGroup: string;
  subcategory: string;
  quantity: number;
  dateAdded: string;
  expirationDate: string;
}

const Inventory: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [sortBy, setSortBy] = useState<'dateAdded' | 'expirationDate'>('dateAdded');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState<Partial<InventoryItem>>({
    name: '',
    imageUrl: '',
    foodGroup: '',
    subcategory: '',
    quantity: 1,
    expirationDate: '',
  });

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await getInventory();
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const sortedInventory = [...inventory].sort((a, b) => 
    new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime()
  );

  const handleAddItem = async () => {
    try {
      const response = await addInventoryItem(newItem);
      setInventory([...inventory, response.data]);
      setShowAddModal(false);
      setNewItem({
        name: '',
        imageUrl: '',
        foodGroup: '',
        subcategory: '',
        quantity: 1,
        expirationDate: '',
      });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await deleteInventoryItem(id);
      setInventory(inventory.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-primary-600">Inventory</h2>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <label htmlFor="sortBy" className="mr-2">Sort by:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'dateAdded' | 'expirationDate')}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="dateAdded">Date Added</option>
            <option value="expirationDate">Expiration Date</option>
          </select>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition-colors duration-200"
        >
          <Plus size={20} className="mr-2" />
          Add Item
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedInventory.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-soft hover-lift">
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary-600">{item.name}</h3>
            <p className="text-gray-600 mb-1">Food Group: {item.foodGroup}</p>
            <p className="text-gray-600 mb-1">Subcategory: {item.subcategory}</p>
            <p className="text-gray-600 mb-1">Quantity: {item.quantity}</p>
            <p className="text-gray-600 mb-1">Date Added: {new Date(item.dateAdded).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-4">Expiration Date: {new Date(item.expirationDate).toLocaleDateString()}</p>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="text-red-500 hover:text-red-600 transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-primary-600">Add New Item</h3>
            <input
              type="text"
              placeholder="Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newItem.imageUrl}
              onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Food Group"
              value={newItem.foodGroup}
              onChange={(e) => setNewItem({ ...newItem, foodGroup: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Subcategory"
              value={newItem.subcategory}
              onChange={(e) => setNewItem({ ...newItem, subcategory: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="date"
              placeholder="Expiration Date"
              value={newItem.expirationDate}
              onChange={(e) => setNewItem({ ...newItem, expirationDate: e.target.value })}
              className="w-full mb-4 p-2 border rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowAddModal(false)}
                className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;