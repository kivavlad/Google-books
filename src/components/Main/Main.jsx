import React, {useState} from "react";
import style from "./main.module.scss";

import Form from "../Form/Form";
import ResultBooksCards from "../ResultBookCards/ResultBooksCards";
import { Loader } from "../Loader/Loader";

import heroImage from "../../assets/images/hero-image.jpg"; 
import bgImage from "../../assets/images/bg-image.png";



const Main = () => {
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(null);
    const [books, setBooks] = useState([]);
    const [results, setResults] = useState(false);

    function reset() {
        setTotalResults([]);
        setBooks([]);
        setResults(false);
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
                        setBooks={setBooks}
                        setTotalResults={setTotalResults}
                        setLoading={setLoading}
                        setResults={setResults}
                    />
                </div>
            </section>

            <section className={style.result_section}>
                <div className="container">
                    <div className={style.result_section_container}>

                        {results ?
                            <>
                                {!loading ?
                                    <div>
                                        <div className={style.search_result_params}>
                                            <div>
                                                <h2 className={style.result_section_title}>Search results on demand</h2>
                                                <h4 className={style.result_section_subtitle}>
                                                    <span>{totalResults ? totalResults : 0}</span> books found for your request
                                                </h4>
                                            </div>
                                            <button onClick={() => reset()} className={style.reset_button}>Reset</button>
                                        </div>
                                        <div className={style.search_result_books}>
                                            {books &&
                                                <ResultBooksCards books={books} />
                                            }
                                        </div>
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