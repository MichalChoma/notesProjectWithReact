import React from "react";
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = ({tag: Tag, placeholder, name, ...props}) => (
    <Tag type="text" {...props} required placeholder={placeholder} name={name} className={Tag === 'input' ? styles.input : styles.textarea}/>
)

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
}

Input.defaultProps = {
    tag:'input',
}

export default Input;