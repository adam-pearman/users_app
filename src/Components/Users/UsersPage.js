import UsersForm from "./UsersForm";
import UsersList from "./UsersList";
import {useState} from "react";

const UsersPage = () => {
    const [users, setUsers] = useState([])

    const handleAddUser = (userData) => {
        const id = getNewId()
        setUsers((prevState) => {
            return [...prevState, {id, name: userData.username, age: userData.age}]
        })
    }

    const getNewId = () => {
        if (users.length) {
            return users[users.length - 1].id + 1
        }
        return 1;
    }

    return (
        <div>
            <UsersForm onAddUser={handleAddUser}/>
            {users.length && <UsersList users={users}/>}
        </div>
    )
}

export default UsersPage