import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import './Home.css'

export default function Home({ data : books }) {
  return (
    <>
      <Header />
      <div className='main-container'>
        <div className="grid-container">
          {books && books.map(book => (
            <div key={book.id} className="grid-item">
              <img id='img' src={book.imageLinks.thumbnail} alt={book.title} />
              <h3 id='title'>{book.title}</h3>
              <p title='author'>Author: {book.authors}</p>
              <p id="rate">Rating:{book?.averageRating}/5</p>
              <p id="free-text">Free</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
