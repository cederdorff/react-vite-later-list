import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function getUser() {
            const response = await fetch(
                "https://expo-post-app-default-rtdb.firebaseio.com/users/fTs84KRoYw5pRZEWCq2Z.json"
            );
            const json = await response.json();
            setUser(json);
        }
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
}
