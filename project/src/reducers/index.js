import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
  item: itemsReducer,
});

export default rootReducer;
