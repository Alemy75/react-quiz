import {createSlice} from '@reduxjs/toolkit';

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        isTestStarted: false,
        questionCount: 0,
        score: 0,
        showScore: false,
        questions: [
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
            {
                id: 4,
                question: 'How to get data from store?',
                right: 0,
                variants: [
                    {
                        id: 0,
                        answer: 'useSelector',
                        isCorrect: 1
                    },
                    {
                        id: 1,
                        answer: 'getSelector',
                        isCorrect: 0
                    },
                    {
                        id: 2,
                        answer: 'useParameter',
                        isCorrect: 0
                    }
                ]
            },
            {
                id: 3,
                question: 'What is a Event loop',
                right: 0,
                variants: [
                    {
                        id: 0,
                        answer: 'JavaSript mechanics of task spliting',
                        isCorrect: 1
                    },
                    {
                        id: 1,
                        answer: 'JS plug-in',
                        isCorrect: 0
                    },
                    {
                        id: 2,
                        answer: 'JS data render cycle',
                        isCorrect: 0
                    }
                ]
            },
            {
                id: 3,
                question: 'What is a Polyfill',
                right: 2,
                variants: [
                    {
                        id: 0,
                        answer: 'JavaScript linter',
                        isCorrect: 0
                    },
                    {
                        id: 1,
                        answer: 'JavaScript async operator',
                        isCorrect: 0
                    },
                    {
                        id: 2,
                        answer: 'Mechanics that\'s allows to use new features with old lang standart',
                        isCorrect: 1
                    }
                ]
            },
        ],
        progress: 0,
        newCount: 0
    },
    reducers: {
        closeBtnHandler(state, action) {
            state.isTestStarted = false
            state.progress = 0
            state.score = 0
            state.questionCount = 0
            state.showScore = false
            state.newCount = 0
        },
        startBtnHandler(state, action) {
            state.isTestStarted = true
            state.progress = 100 / state.questions.length
        },
        questionCountHandler(state, action) {
            if (action.payload === 1) {
                state.score = state.score + 1
            }

            state.newCount = state.questionCount + 1

            state.progress = state.progress + 100 / state.questions.length

            if (state.newCount < state.questions.length) {
                state.questionCount = state.newCount
            } else {
                state.showScore = true
            }
        },
    }
})

export const {closeBtnHandler, startBtnHandler, questionCountHandler} = quizSlice.actions

export default quizSlice.reducer;