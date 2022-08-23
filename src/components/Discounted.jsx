import React from "react";
import { books } from "../data";
import Book from "./ui/Book"

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discount <span className="purple"> Books</span>
          </h2>
          <div className="books">
            {books
            .filter(book => book.salePrice >0) // filter books that have a sale price
            .slice(0,8) //first 8 books in the data
            .map((book) => (         // maps to books.jsx
            <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
