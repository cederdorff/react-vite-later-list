import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserProvider from "./providers/UserProvider";

function App() {
    return (
        <UserProvider>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </main>
        </UserProvider>
    );
}

export default App;
