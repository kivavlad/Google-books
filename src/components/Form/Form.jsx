import React from "react";
import style from "./form.module.scss";
import { useForm } from "react-hook-form";
import api from "../../axios/api";
import { MAX_RESULTS, CATEGORY_SELECT_OPTIONS, SORT_SELECT_OPTIONS } from "../../params";



const Form = (props) => {
    const {setTotalResults, books, setBooks, setLoading} = props;
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        getBooks(data);
    }

    async function getBooks(data) {
        const startIndex = books.length + MAX_RESULTS;
        setLoading(true);
        await
        api.get(`/v1/volumes?q=${data.title}+subject:${data.category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${data.sorting}&key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
            console.log(response.data.items);
            setBooks(response.data.items);
            setTotalResults(response.data.totalItems);
            localStorage.setItem("books", JSON.stringify(response.data.items));
            localStorage.setItem("totalCount", response.data.totalItems);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        })
    }

    const errorFormStyle = {
        fontSize: '14px',
        color: 'var(--secondary-300)',
        textAlign: 'center',
        marginTop: '6px'
    };


    return (
        <div className={style.form_container}>

            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register('title', {required: true})}
                    aria-invalid={errors.title ? "true" : "false"} 
                    className={style.input} 
                    type="search" 
                    autoComplete="off"
                    placeholder="Enter book title ..."
                />

                <button className={style.button} type='submit'>Search</button>
            </form>

            <div className={style.errors_container}>
                {errors.title?.type === 'required' && <div style={errorFormStyle} role="alert">Enter book title</div>}
            </div>

            <div className={style.search_params}>
                <div className={style.categories}>
                    <h4>Categories:</h4>
                    <select 
                        {...register('category')}
                        className={style.select}
                    >
                        {CATEGORY_SELECT_OPTIONS.map((categoty) => {
                            return(
                                <option key={categoty.id} value={categoty.value}>{categoty.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div className={style.categories}>
                    <h4>Sorting by:</h4>
                    <select 
                        {...register('sorting')}
                        className={style.select}
                    >
                        {SORT_SELECT_OPTIONS.map((element) => {
                            return(
                                <option key={element.id} value={element.value}>{element.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Form