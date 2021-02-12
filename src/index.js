import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';

export const initState = {
  books: [
    {
      author: 'JK Rowlings',
      id: Math.random(),
      title: 'Harry Potter',
      category: 'Sci-Fi',
    },
    {
      author: 'Ross James',
      id: Math.random(),
      title: 'Survivor',
      category: 'Action',
    },
  ],
};

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);