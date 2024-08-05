import React, { useEffect } from "react";
import Questions from "./Questions";
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
export default function Quiz() {
  const { trace, queue } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(trace);
  });

  function onNext() {
    console.log(" clicked Next");
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
    }
  }
  function onPrev() {
    console.log(" clicked prev");
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }
  return (
    <div className="container">
      <h1 className="title text-light"> نرم افزار کوییز</h1>
      <Questions />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
