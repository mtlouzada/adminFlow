import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchItems = () => api.get('/items');
export const createItem = (data: any) => api.post('/items', data);
export const updateItem = (id: string, data: any) => api.put(`/items/${id}`, data);
export const deleteItem = (id: string) => api.delete(`/items/${id}`);
