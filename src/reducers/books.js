import { createBook, removeBook } from '../actions/index';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case createBook:
      return [...state, action.payload];
    case removeBook:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default booksReducer;
