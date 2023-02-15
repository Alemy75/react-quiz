import React, { useState } from "react"
import Button from "../UI/Button"
import s from './Question.module.scss'

const INITIAL_QUESTIONS = [
    {
        id: 0,
        question: 'What is React?',
        right: 0,
        variants: [
            {
                id: 0,
                answer: 'Library',
                isCorrect: 1
            },
            {
                id: 1,
                answer: 'Framework',
                isCorrect: 0
            },
            {
                id: 2,
                answer: 'Plug-in',
                isCorrect: 0
            }
        ]
    },
    {
        id: 1,
        question: 'What is Redux?',
        right: 2,
        variants: [
            {
                id: 0,
                answer: 'Plugin',
                isCorrect: 0
            },
            {
                id: 1,
                answer: 'Framework',
                isCorrect: 0
            },
            {
                id: 2,
                answer: 'State management library',
                isCorrect: 1
            }
        ]
    },
    {
        id: 2,
        question: 'How reducer in Redux gets action?',
        right: 2,
        variants: [
            {
                id: 0,
                answer: 'useSelector sends it',
                isCorrect: 0
            },
            {
                id: 1,
                answer: 'useContect sends it',
                isCorrect: 0
            },
            {
                id: 2,
                answer: 'useDispatch sends it',
                isCorrect: 1
            }
        ]
    },
    {
        id: 3,
        question: 'What Redux method allows to group reducers',
        right: 1,
        variants: [
            {
                id: 0,
                answer: 'groupReducer',
                isCorrect: 0
            },
            {
                id: 1,
                answer: 'combineReducer',
                isCorrect: 1
            },
            {
                id: 2,
                answer: 'rootReducer',
                isCorrect: 0
            }
        ]
    },
];

const progressStep = 100 / INITIAL_QUESTIONS.length

const Question = (props) => {
    const [questionCount, setQuestionCount] = useState(0);
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false);
    const [progress, setProgress] = useState(progressStep)

    let nextQuestion = 0

    const questionCountHandler = (isCorrect) => {
        if (isCorrect === 1) {
            setScore(prev =>
                prev + 1
            )
        }
        nextQuestion = questionCount + 1

        setProgress(prev => prev + progressStep)

        if (nextQuestion < INITIAL_QUESTIONS.length) {
            setQuestionCount(nextQuestion)
        } else {
            setShowScore(true)
        }

    }; 

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
                                    <Button onStart={() => questionCountHandler(el.isCorrect)}>
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
                            <div>
                                <p className={s.finish__text}>Question {el.id + 1}: {el.question}</p>
                                <div className={s.finish__right}>{el.variants[el.right].answer}</div>
                            </div>
                            
                        ))
                    }
                    <Button className={s.finish_button} onStart={props.onClose}>Pass again</Button>   
                </section>            
            }
        </React.Fragment>
    )
}

export default Question