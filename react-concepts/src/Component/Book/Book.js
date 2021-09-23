import React from 'react';

const Book = (props) => {
    return (
        <div>
            <h4>BookName = {props.bookName}</h4>
            <h6>Writter = {props.writter}</h6>
        </div>
    );
};

export default Book;