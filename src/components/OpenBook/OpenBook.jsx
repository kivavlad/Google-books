import React from "react";
import style from "./book.module.scss";
import bookImage from "../../assets/images/book.jpg";
import closeIcon from "../../assets/images/close_icon.svg";
import { useNavigate, useParams } from "react-router-dom";


const OpenBook = (props) => {
    const {books} = props;
    const navigate = useNavigate();
    let {id} = useParams();
    const currentBook = books.find((e) => e.id === id);

    const authors = currentBook.volumeInfo.authors?.join(', ');
    const imageUrl = currentBook.volumeInfo.imageLinks?.thumbnail;
    const bookTitle = currentBook.volumeInfo?.title;
    const categories = currentBook.volumeInfo?.categories;
    const description = currentBook.volumeInfo?.description;

    return (
        <div className={style.container}>

            <div onClick={() => navigate(-1, {replace: true})} className={style.close_container}>
                <img src={closeIcon} alt="x"/>
            </div>

            <div className={style.image_container}>
                <img src={imageUrl ? imageUrl : bookImage} alt=""/>
            </div>

            <div className={style.text_container}>
                <div className={style.text_container_header}>
                    <p>Categories: <span>{categories}</span></p>
                    <p>Authors: <span>{authors ? authors : ''}</span></p>
                </div>
                <h2>{bookTitle}</h2>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default OpenBook