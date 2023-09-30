import React from "react";
import style from "./form.module.scss";
import { useForm } from "react-hook-form";
import api from "../../axios/api";
import { MAX_RESULTS, CATEGORY_SELECT_OPTIONS, SORT_SELECT_OPTIONS } from "../../params";



const Form = (props) => {
    const {setBooks, setLoading} = props;
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        setLoading(true);
        getBooks(data);
        localStorage.setItem('formData', JSON.stringify(data));
    }

    async function getBooks(data) {
        await
        api.get(`/v1/volumes?q=${data.title}+subject:${data.category}&maxResults=${MAX_RESULTS}&startIndex=0&orderBy=${data.sorting}&key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
            setBooks(response.data.items);
            localStorage.setItem("total", response.data.totalItems);
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
        <form onSubmit={handleSubmit(onSubmit)} className={style.form_container}>

            <div className={style.form}>
                <input 
                    {...register('title', {required: true})}
                    aria-invalid={errors.title ? "true" : "false"} 
                    className={style.input} 
                    type="search" 
                    autoComplete="off"
                    placeholder="Enter book title ..."
                />

                <button className={style.button} type='submit'>Search</button>
            </div>

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
                        {CATEGORY_SELECT_OPTIONS.map((categoty, index) => {
                            return(
                                <option key={index} value={categoty.value}>{categoty.name}</option>
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
                        {SORT_SELECT_OPTIONS.map((element, index) => {
                            return(
                                <option key={index} value={element.value}>{element.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>

        </form>
    )
}

export default Form