import styles from './ErrorModal.module.css'
import BaseCard from "./BaseCard";
import BaseButton from "./BaseButton";
import {createPortal} from "react-dom";

const ModalBackdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onDismissModal}/>
    )
}

const ModalOverlay = (props) => {
    return (
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
    )
}

const ErrorModal = (props) => {
    return (
        <>
            {createPortal(<ModalBackdrop onDismissModal={props.onDismissModal}/>, document.getElementById('backdrop-root'))}
            {createPortal(<ModalOverlay title={props.title} message={props.message} onDismissModal={props.onDismissModal}/>, document.getElementById('overlay-root'))}
        </>
    )
}

export default ErrorModal