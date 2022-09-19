import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../api/api";
import '../../App.css';
import { UserItem } from "./userItem";

export const Users = (props) => {
    const {loading, error, data} = useQuery(GET_ALL_USERS, {
        variables: {
            isAdmin: props.isAdmin
        }
    });

    if(loading) {
        return <p>Loading ...</p>
    }

    if(error) {
        return <p>Error...{error.message}</p>
    }

    return (
        <ul>
            {data.getAllUsers.map(user => <UserItem key={user.id} user={user} />)}
        </ul>
    )
}