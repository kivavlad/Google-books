import React, { useState } from "react";
import style from "./card.module.scss";
import bookImage from "../../assets/images/book.jpg";


const BookCard = (props) => {
    const {book} = props;
    const [bookAuthors] = useState(book.volumeInfo && book.volumeInfo.authors);
    const imageUrl = book.volumeInfo.imageLinks;
    const bookTitle = book.volumeInfo.title;
    const bookDescription = book.volumeInfo.description;
    const bookCategories = book.volumeInfo;
    

    return (
        <div key={book.id} className={style.card_container}>

            <div className={style.image_container}>
                <img src={imageUrl ? imageUrl.thumbnail : bookImage} alt="" />
            </div>

            <div className={style.text_container}>
                <div className={style.text_container_header}>
                    <p>Categoties: <span>{bookCategories && bookCategories.categories}</span></p>
                    <p>Author: <span>{bookAuthors}</span></p>
                </div>

                <h2>{bookTitle ? bookTitle.substr(0, 36) : 'Title'}</h2>
                <p>{bookDescription ? bookDescription.substr(0, 100) : 'not description'} ...</p>
            </div>

        </div>
    )
}

export default BookCard