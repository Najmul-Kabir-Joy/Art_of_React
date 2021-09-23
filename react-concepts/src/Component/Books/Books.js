import React from 'react';
import Book from '../Book/Book';

const Books = (props) => {
    const books = props.books
    return (
        <div>
            {
                books.map((book) => <Book key={book.bookName} bookName={book.bookName} writter={book.writter}></Book>)
            }
        </div>
    );
};

export default Books;