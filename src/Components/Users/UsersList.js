import styles from './UsersList.module.css'
import BaseCard from "../UI/BaseCard"

const UsersList = (props) => {
    return (
        <BaseCard className={styles.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </BaseCard>
    )
}

export default UsersList