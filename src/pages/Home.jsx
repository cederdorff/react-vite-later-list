import { useState } from "react";
import reactLogo from "../assets/react.svg";
import HelloWorld from "../components/HelloWorld";
import Variables from "../components/Variables";
import { useUser } from "../providers/UserProvider";
import viteLogo from "/vite.svg";

export default function Home() {
    const [count, setCount] = useState(0);

    const { user } = useUser();

    console.log(user);

    return (
        <>
            <h1>Home</h1>
            <h2>{user.name}</h2>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <HelloWorld />

            <Variables />
        </>
    );
}
