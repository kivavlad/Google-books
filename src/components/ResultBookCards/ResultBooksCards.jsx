import React from "react";
import BookCard from "../BookCard/BookCard";


const ResultBooksCards = (props) => {
    const {books} = props;

    return (
        <>
            {books && 
                <>
                    {books.map((book) => {
                        return (
                            <BookCard
                                key={book.id}
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