import React from 'react';

export default function SessionLength(props) {
  function increaseSession() {
    if(props.sessionLength === 60) {
      return;
    }

    props.increaseSession();
  }

  function decreaseSession() {
    if(props.sessionLength === 1) {
      return;
    }

    props.decreaseSession();
  }
  return(
    <section>
    <h4>Session Length</h4>
    <section className="interval-container">
    <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseSession}>DOWN</button>
    <p className="interval-length">{props.sessionLength}</p>
    <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSession}>UP</button>
    </section>
    </section>
  );
}