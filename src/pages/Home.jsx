import reactLogo from "../assets/react.svg";
import useFetch from "../hooks/useFetch";
import viteLogo from "/vite.svg";

export default function Home() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(data);

    return (
        <>
            <h1>Home</h1>
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
            <h2>Todo</h2>
            <p>{data?.title}</p>
        </>
    );
}
