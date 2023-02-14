import React from "react";
import Button from "../UI/Button";
import s from "./Starter.module.scss";

const Starter = (props) => {
  return (
    <section className={s.starter}>
      <h1>JavaScript Grade Test</h1>
      <Button onStart={props.onStart}>Start</Button>
    </section>
  );
};

export default Starter;
