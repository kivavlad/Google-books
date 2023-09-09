import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DetailPage } from "./pages/DetailPage";
import Header from "./components/Header/Header";



const App = () => {
    const [books, setBooks] = useState([]);
    
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