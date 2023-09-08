import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DetailPage } from "./pages/DetailPage";
import Header from "./components/Header/Header";



const App = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("books") !== null) {
            setBooks(JSON.parse(localStorage.getItem("books")))
        }
    }, [setBooks])
    
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage books={books} setBooks={setBooks} />} />
                <Route path="/:id" element={<DetailPage books={books} />} />
            </Routes>
            
        </>
    )
}

export default App