import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";
import { DetailPage } from "./pages/DetailPage";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:id" element={<DetailPage />} />
            </Routes>
        </>
    )
}

export default App