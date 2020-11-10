import { createStore } from 'redux';
import pizzaCounterReducer from './reducers/pizzaCounter';

export default createStore(
  pizzaCounterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //For Redux Dev Tools
);
