import React, {Fragment, useState} from "react";
import './App.css'
import Question from "./components/Guestion/Question.jsx";
import Starter from "./components/Starter/Starter";
import {useSelector} from "react-redux";

const App = () => {
  const  isTestStarted = useSelector(state => state.quiz.isTestStarted)


  return (
    <Fragment>
      {!isTestStarted && <Starter/>}
      {isTestStarted && <Question/>}
    </Fragment>
  )
;}

export default App;