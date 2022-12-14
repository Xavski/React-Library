import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const Book = ({ book }) => {
//   const [img, setImg] = useState(); //hook

//   useEffect(() => {
//     const image = new Image();
//     image.src = book.url;
//     image.onLoad = () => {
//       setImg(image);
//     };
//   });

  return (
    <div className="book">
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={book.url} alt="" className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
    </div>
  );
};

export default Book;
