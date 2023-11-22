import useUser from "../hooks/useUser";

export default function Profile() {
    const { user } = useUser();

    return (
        <>
            <h1>Profile</h1>
            <h2>{user.name}</h2>
            <img src={user.image} width="200" />
        </>
    );
}
