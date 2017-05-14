import { GET_ITEMS, NEW_ITEM } from '../actions';

export default (items = [], action) => {
  switch (action.type) {
    case (GET_ITEMS):
      return action.payload.data;
    case (NEW_ITEM):
      return items.concat([action.payload.data]);
    default:
      return items;
  }
};
