import BaseCard from "../UI/BaseCard";
import BaseButton from "../UI/BaseButton";
import styles from './UsersForm.module.css'
import {useRef, useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const UsersForm = (props) => {
    const [error, setError] = useState(null)

    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const handleAddUser = (e) => {
        e.preventDefault()
        const username = nameInputRef.current.value
        const age = ageInputRef.current.value
        if (!fieldValidation(username) || !fieldValidation(age)) {
            setError({title: 'Invalid Input', message: 'Please enter a valid name and age (non-empty values).'})
            return
        }
        if (!ageValidation(age)) {
            setError({title: 'Invalid Age', message: 'Please enter a valid age (>0).'})
            return
        }
        props.onAddUser({username, age})
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const handleDismissModal = () => {
        setError(null)
    }

    const ageValidation = (age) => {
        return age > 0
    }

    const fieldValidation = (field) => {
        return field.trim().length !== 0
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onDismissModal={handleDismissModal}/>}
            <BaseCard className={styles.input}>
                <form onSubmit={handleAddUser}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <BaseButton type="submit">Add User</BaseButton>
                </form>
            </BaseCard>
        </>
    )
}

export default UsersForm