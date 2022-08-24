import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}
      {
        !Number.isInteger( rating) && (
          <FontAwesomeIcon icon="star-half-alt" />
        ) //&& prints statement: if book.rating is not an integer print half-star
      }
    </div>
  );
};

export default Rating;
