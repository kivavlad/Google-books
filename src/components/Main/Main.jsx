import React, {useEffect, useState} from "react";
import style from "./main.module.scss";
import Form from "../Form/Form";
import ResultBooksCards from "../ResultBookCards/ResultBooksCards";
import { Loader } from "../Loader/Loader";
import { MAX_RESULTS } from "../../params";
import api from "../../axios/api";

import heroImage from "../../assets/images/hero-image.jpg"; 
import bgImage from "../../assets/images/bg-image.png";


const Main = (props) => {
    const {books, setBooks} = props;
    const [totalResults, setTotalResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState({});
    
    function reset() {
        setTotalResults([]);
        setBooks([]);
        localStorage.clear();
    }

    useEffect(() => {
        if(localStorage.getItem("total") !== null) {
            setTotalResults(localStorage.getItem("total"))
        }
    }, [setTotalResults])

    async function getMoreBooks() {
        const startIndex = books.length + MAX_RESULTS;
        await
        api.get(`/v1/volumes?q=${info.title}+subject:${info.category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${info.sorting}&key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
            setBooks([...books, ...response.data.items]);
        })
        .catch((error) => {
            console.log(error);
        })
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
                    <Form 
                        setTotalResults={setTotalResults}
                        setBooks={setBooks}
                        setLoading={setLoading}
                        setInfo={setInfo}
                    />
                </div>
            </section>

            <section className={style.result_section}>
                <div className="container">
                    <div className={style.result_section_container}>

                        {books.length > 0 ?
                            <>
                                {!loading ?
                                    <div>
                                        <div className={style.search_result_params}>
                                            <div>
                                                <h2 className={style.result_section_title}>Search results</h2>
                                                <h4 className={style.result_section_subtitle}>
                                                    <span>{totalResults ? totalResults : 0}</span> books found for your request
                                                </h4>
                                            </div>
                                                <button onClick={() => reset()} className={style.reset_button}>Reset</button>
                                        </div>

                                        <div className={style.search_result_books}>
                                            <ResultBooksCards books={books} />
                                        </div>

                                        {(localStorage.getItem("total") > MAX_RESULTS) && 
                                            <div className={style.search_result_button_container}>
                                                <button onClick={() => getMoreBooks()} type='submit'>Load more</button>
                                            </div>
                                        }

                                    </div>
                                :
                                    <div className={style.loader}>
                                        <Loader />
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

export default Main