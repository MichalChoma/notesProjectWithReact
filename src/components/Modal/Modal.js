import React from "react";
import styles from "./Modal.module.scss"
import Form from "../Form/Form";

const Modal = ({closeModalFunction}) => (
    <div className={styles.wrapper}>
        <button onClick={closeModalFunction} className={styles.btn}>x</button>
        <Form />
    </div>
)

export default Modal