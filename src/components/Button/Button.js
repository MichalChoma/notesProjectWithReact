import React from "react";
import styles from './Button.module.scss';

const Button = ({children, secondary, ...props}) => (
    <button {...props} className={secondary ? styles.secondary : styles.btn}>{children}</button>
)

export default Button;