import { createBook, removeBook } from '../actions/index';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case createBook:
      return [...state, action.payload];
    case removeBook:
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
