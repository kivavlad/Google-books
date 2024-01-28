import { useSelector } from "react-redux";
import { BookCard } from "../BookCard/BookCard";


export const ResultBooksCards = () => {
    const books = useSelector((state) => state.books.items);

    return (
        <>
            {books?.length && 
                <>
                    {books.map((book, index) => <BookCard key={index} book={book} />)}
                </>
            }
        </>
    )
}