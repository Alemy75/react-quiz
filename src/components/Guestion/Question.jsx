import React from "react"
import Button from "../UI/Button"
import s from './Question.module.scss'
import {useSelector} from 'react-redux'
import {useDispatch} from "react-redux";
import {closeBtnHandler, questionCountHandler} from './../../store/quizSlice.js'


const Question = () => {

    const INITIAL_QUESTIONS = useSelector(state => state.quiz.questions)
    const questionCount = useSelector(state => state.quiz.questionCount)
    const showScore = useSelector(state => state.quiz.showScore)
    const score = useSelector(state => state.quiz.score)
    const progress = useSelector(state => state.quiz.progress)

    const dispatch = useDispatch()
    const endQuiz = () => dispatch(closeBtnHandler())

    const questionHandler = (isCorrect) => {
        dispatch(questionCountHandler(isCorrect))
    }

    return (
        <React.Fragment>
            {!showScore &&
                <section className={s.question}>
                    <div className={s.question__title}>Question {questionCount + 1}: {INITIAL_QUESTIONS[questionCount].question}</div>
                    <span className={s.question__bar}>
                        <span className={s.question__bar__inner} style={{width: progress + "%"}}></span>
                    </span>
                    <div className={s.question__list}>
                        {
                            INITIAL_QUESTIONS[questionCount].variants.map((el) => (
                                <div key={el.id} className={s.question__item}>
                                    <Button onStart={() => questionHandler(el.isCorrect)}>
                                        {el.answer}
                                    </Button>
                                </div>
                            ))
                        }
                    </div>
                </section>
            }
            {showScore &&
                <section className={s.finish}>
                    <h1>Finish!</h1>
                    <p>Your score is {score} of {INITIAL_QUESTIONS.length}</p>
                    <h3>Right answers:</h3>
                    {
                        INITIAL_QUESTIONS.map(el => (
                            <div key={el.id}>
                                <p className={s.finish__text}>Question {el.id + 1}: {el.question}</p>
                                <div className={s.finish__right}>{el.variants[el.right].answer}</div>
                            </div>
                            
                        ))
                    }
                    <Button className={s.finish__btn} onStart={endQuiz}>Pass again</Button>
                </section>            
            }
        </React.Fragment>
    )
}

export default Question
