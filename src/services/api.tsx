import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://localhost:5001/api';
console.log(API_URL); // Check wat hier wordt gelogd


const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getInventory = () => api.get('/inventory');
export const addInventoryItem = (item: any) => api.post('/inventory', item);
export const deleteInventoryItem = (id: number) => api.delete(`/inventory/${id}`);
export const getDishes = () => api.get('/dishes');
export const getShoppingList = () => api.get('/shoppinglist');
export const addShoppingListItem = (item: any) => api.post('/shoppinglist', item);
export const deleteShoppingListItem = (id: number) => api.delete(`/shoppinglist/${id}`);

export default api;