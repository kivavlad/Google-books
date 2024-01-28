import { useNavigate } from "react-router-dom";
import style from "./card.module.scss";
import bookImage from "../../assets/images/book.jpg";

export const BookCard = (props) => {
    const { book } = props;
    const navigate = useNavigate();

    const authors = book.volumeInfo.authors?.join(', ');
    const imageUrl = book.volumeInfo.imageLinks?.thumbnail;
    const bookTitle = book.volumeInfo.title;
    const categories = book.volumeInfo?.categories;

    return (
        <div key={book.id} onClick={() => navigate(`/${book.id}`)}  className={style.card_container}>

            <div className={style.image_container}>
                <img src={imageUrl ? imageUrl : bookImage} alt="" />
            </div>

            <div className={style.text_container}>
                <p>Categoties: <span>{categories}</span></p>
                <h2>{bookTitle}</h2>
                <p>{authors}</p>
            </div>

        </div>
    )
}