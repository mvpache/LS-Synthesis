import { combineReducers } from 'redux';
import ItemsReducer from './itemsReducer';
import SelectedItemReducer from './selectedItemReducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  items: ItemsReducer,
  selectedItem: SelectedItemReducer,
  form: FormReducer,
});

export default rootReducer;
