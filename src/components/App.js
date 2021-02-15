import React from 'react';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

function App() {
  return (
    <div>
      <BooksList />
      <hr className="padding" />
      <h3 className="h3-style">Add New Book</h3>
      <BookForm />
    </div>
  );
}

export default App;
