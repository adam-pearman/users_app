import styles from './BaseButton.module.css'

const BaseButton = (props) => {
    return (
        <button className={styles.button} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default BaseButton