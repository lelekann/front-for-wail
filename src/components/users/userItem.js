export const UserItem = (props) => {
    return (
        <li key={props.user.id}>
            {props.user.id && <p>{props.user.id}</p>}
            <p>{props.user.username}</p>
            {props.user.role && <p>Role: {props.user.role}</p>}
        </li>
    )
}