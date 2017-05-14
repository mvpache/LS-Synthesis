import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ItemDisplay from './components/itemDisplay'
import NewItem from './components/newItem';
import SelectedItem from './components/selectedItem';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import './index.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/items" component={ItemDisplay} />
        <Route path="/new-item" component={NewItem} />
        <Route path="/items/:id" component={SelectedItem} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
