import axios from 'axios';

export const GET_ITEMS = 'GET_ITEMS';
export const SELECT_ITEM = 'SELECT_ITEM';
export const NEW_ITEM = 'NEW_ITEM';

export const getItems = () => {
  const promise = axios.get('http://localhost:5000/items');
  return {
    type: GET_ITEMS,
    payload: promise,
  };
};

export const selectItem = (id) => {
  const promise = axios.get(`http://localhost:5000/items/${id}`);
  return {
    type: SELECT_ITEM,
    payload: promise,
  };
};

export const newItem = (item) => {
  const promise = axios.post('http://localhost:5000/items', item);
  return {
    type: NEW_ITEM,
    payload: promise,
  };
};
