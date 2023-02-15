import React from "react";
import Button from "../UI/Button";
import s from "./Starter.module.scss";
import {useDispatch} from "react-redux";
import {startBtnHandler} from './../../store/quizSlice.js'


const Starter = (props) => {
    const dispatch = useDispatch()
    const startQuiz = () => dispatch(startBtnHandler())

    return (
        <section className={s.starter}>
            <h1>JavaScript Grade Test</h1>
            <Button onStart={startQuiz}>Start</Button>
        </section>
    );
};

export default Starter;
