import React from "react";
import Questions from "./Questions";

export default function Quiz() {
  function onNext() {
    console.log(" clicked Next");
  }
  function onPrev() {
    console.log(" clicked prev");
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
