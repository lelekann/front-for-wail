import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../api/api";

export const Users = () => {
    const {loading, error, data} = useQuery(GET_ALL_USERS);
    console.log(data, error)

    if(loading) {
        return <p>Loading ...</p>
    }

    if(error) {
        return <p>Error...{error.message}</p>
    }

    return (
        <ul>
            {data.getAllUsers.map(user => <li>{user.username}</li>)}
        </ul>
    )
}