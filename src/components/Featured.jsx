import React from 'react';
import Book from './ui/Book';
import { books } from '../data'

const Featured = () => {
    console.log(books);
    console.log();
    function getFiveStarBooks(){
    }
    return (
        <section id = 'features'>
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {books
                        .filter((book) => book.rating === 5) //filter through books with 5 stars
                        .slice(0,4)  //First 4 books with 5 stars
                        .map((book) =>  //map out the books img,title and content bases on books.jsx
                        <Book book = {book} key = {book.id}/>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
