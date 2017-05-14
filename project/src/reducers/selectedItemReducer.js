import { SELECT_ITEM } from '../actions';

export default (selectedItem = null , action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return action.payload.data;
    default:
      return selectedItem;
  }
}
