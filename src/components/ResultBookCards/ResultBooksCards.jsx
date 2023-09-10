import React from "react";
import BookCard from "../BookCard/BookCard";


const ResultBooksCards = (props) => {
    const {books} = props;

    return (
        <>
            {books && 
                <>
                    {books.map((book, index) => {
                        return (
                            <BookCard
                                key={index}
                                book={book}
                            />
                        )
                    })}
                </>
            }
        </>
    )
}

export default ResultBooksCards