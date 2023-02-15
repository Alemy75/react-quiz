import React, {Fragment, useState} from "react";
import './App.css'
import Question from "./components/Guestion/Question.jsx";
import Starter from "./components/Starter/Starter";

const App = () => {
  const [isTestStarted, setIsTestStarted] = useState(false)

  const startBtnHandler = () => {
    setIsTestStarted(prev => prev = true)
  }

  const closeBtnHandler = () => {
    setIsTestStarted(prev => prev = false)
  }

  return (
    <Fragment>
      {!isTestStarted && <Starter onStart={startBtnHandler}/>}
      {isTestStarted && <Question onClose={closeBtnHandler}/>}
    </Fragment>
  )
;}

export default App;