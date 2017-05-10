import axios from 'axios';

export const GET_ITEMS = 'GET_ITEMS'

export const getItems = () => {
  const promise = axios.get('http://localhost:5000/items')
  return {
    type: GET_ITEMS,
    payload: promise,
  };
};
