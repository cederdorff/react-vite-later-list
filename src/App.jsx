import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    );
}

export default App;
