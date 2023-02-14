import React from "react";
import s from './Button.module.scss'

const Button = (props) => {
    return (
        <button className={s.button} onClick={props.onStart}>{props.children}</button>
    )
};

export default Button