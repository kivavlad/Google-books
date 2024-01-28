import { useDispatch, useSelector } from "react-redux";
import { MAX_RESULTS } from "../../config";
import { getBooks, resetBooks } from "../../store/slice/bookSlice";
import { Form } from "../Form/Form";
import { ResultBooksCards } from "../ResultBookCards/ResultBooksCards";
import { ButtonLoader } from "../Loader/ButtonLoader";

import style from "./main.module.scss";
import heroImage from "../../assets/images/hero-image.jpg"; 
import bgImage from "../../assets/images/bg-image.png";


export const Main = () => {
    const books = useSelector((state) => state.books.items);
    const totalResults = useSelector((state) => state.books.totalItems);
    const loading = useSelector((state) => state.books.loading);
    const data = JSON.parse(localStorage.getItem('data')) || null;
    const dispatch = useDispatch();

    function getMoreBooks() {
        const startIndex = books.length + MAX_RESULTS;
        dispatch(getBooks({...data, startIndex}));
    }

    return (
        <>
            <section className={style.hero_section}>
                <div className="container">
                    <div className={style.hero_section_content}>

                        <div className={style.text_content}>
                            <h1>Find your favorite books by title</h1>
                            <h4>Set search parameters to get more detailed results</h4>
                            <button>Get Started</button>
                        </div>

                        <div className={style.image_content}>
                            <img src={heroImage} alt="hero"/>
                        </div>

                    </div>
                </div>
            </section>

            <section className={style.form_section}>
                <div className="container">
                    <Form />
                </div>
            </section>

            <section className={style.result_section}>
                <div className="container">
                    <div className={style.result_section_container}>

                        {books?.length ?
                            <>
                                <div className={style.search_result_params}>
                                    <div>
                                        <h2 className={style.result_section_title}>Search results</h2>
                                        <h4 className={style.result_section_subtitle}>
                                            <span>{totalResults}</span> books found for your request
                                        </h4>
                                    </div>
                                        <button type='button' onClick={() => dispatch(resetBooks())} className={style.reset_button}>Reset</button>
                                </div>

                                <div className={style.search_result_books}>
                                    <ResultBooksCards />
                                </div>

                                {books.length > 30 && books.length < totalResults &&
                                    <div className={style.search_result_button_container}>
                                        <button 
                                            type='button' 
                                            onClick={getMoreBooks}
                                        >
                                            {loading ? <ButtonLoader /> : 'Load more'}
                                        </button>
                                    </div>
                                }
                            </>
                            :
                            <div className={style.image_section}>
                                <h2>Enter the title of the book to start searching</h2>
                                <img src={bgImage} alt=""/>
                            </div>
                        }

                    </div>
                </div>
            </section>
        </>
    )
}