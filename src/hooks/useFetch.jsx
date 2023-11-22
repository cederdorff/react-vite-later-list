import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function init() {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        init();
    }, [url]);

    return [data, error, loading];
}
