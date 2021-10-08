import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import ClearanceReducer from './Components/Reducer/ClearanceReducer';
import TaxReducer from './Components/Reducer/TaxCalculatorReducer'
const store = createStore(combineReducers({
  ClearanceReducer,
  TaxReducer
}))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
