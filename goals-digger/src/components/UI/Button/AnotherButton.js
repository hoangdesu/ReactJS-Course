import React from 'react'
import styles from './AnotherButton.module.css';

const AnotherButton = (props) => {
    return (
        <button type={props.type} onClick={props.onClick} className={styles.button}>
            {props.children}
        </button>
    )
}

export default AnotherButton;