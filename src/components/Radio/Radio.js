import React from "react";
import style from './Radio.module.scss'

const Radio = ({type,checked,changeFn, children}) => {


    return (
    <div className={style.wrapper}>
    <label htmlFor={type} className={style.label}>
        <input
            id={type}
            type="radio" 
            checked={checked} 
            onChange={changeFn} 
        />
        {children}</label>
    </div>
    )
}

export default Radio;