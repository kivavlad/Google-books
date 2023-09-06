import React, { useState } from "react";
import style from "./form.module.scss";
import api from "../../axios/api";
import { useForm } from "react-hook-form";


const Form = (props) => {
    const {setTotalResults, setBooks, setLoading, setResults} = props;
    const [textValue, setTextValue] = useState('');
    const MAX_RESULTS = 32;
    const { register, handleSubmit, formState: { errors } } = useForm();


    function onSubmit() {
        getBooks();
    }

    async function getBooks() {
        setLoading(true);
        await
        api.get(`/v1/volumes?q=${textValue}&maxResults=${MAX_RESULTS}&key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
            console.log(response.data.items);
            setBooks(response.data.items);
            setTotalResults(response.data.totalItems);
            setLoading(false);
            setResults(true);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
            setResults(false);
        })
    }

    const handleOnChange = (e) => {
        setTextValue(e.target.value);
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
                    value={textValue}
                    onChange={handleOnChange}
                    type="search" 
                    autoComplete="off"
                    placeholder="Enter book title ..."
                />

                <button className={style.button} type='submit'>Search</button>
            </form>

            <div className={style.errors_container}>
                {errors.title?.type === 'required' && <div style={errorFormStyle} role="alert">Enter book title</div>}
            </div>
        </div>
    )
}

export default Form