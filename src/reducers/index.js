/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import booksReducer from './books';

const allReducers = combineReducers({ booksReducer });

export default allReducers;
