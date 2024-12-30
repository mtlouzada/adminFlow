import { useEffect, useState } from 'react';
import { fetchItems, deleteItem } from '../services/api';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then((res) => setItems(res.data));
  }, []);

  const handleDelete = (id: string) => {
    deleteItem(id).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
