import { useUser } from "../providers/UserProvider";

export default function Profile() {
    const { user } = useUser();

    return (
        <>
            <h1>Profile</h1>
            <h2>{user.name}</h2>
        </>
    );
}
