import styles from './ErrorModal.module.css'
import BaseCard from "./BaseCard";
import BaseButton from "./BaseButton";

const ErrorModal = (props) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onDismissModal}/>
            <BaseCard className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    {props.message}
                </div>
                <footer className={styles.actions}>
                    <BaseButton type="button" onClick={props.onDismissModal}>Okay</BaseButton>
                </footer>
            </BaseCard>
        </div>

    )
}

export default ErrorModal