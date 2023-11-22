import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            name: "John Doe",
            mail: "j@doe.dk"
        });
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
}
export const useUser = () => useContext(UserContext);
