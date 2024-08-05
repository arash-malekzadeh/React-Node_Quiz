import React, { useEffect, useState } from "react";

import { useFetchQuestion } from "../hooks/FetchQuestion";
import { useSelector } from "react-redux";

export default function Questions() {
  const [checkes, setchecked] = useState(undefined);
  const [{ isloading, apiData, serverError }] = useFetchQuestion();
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  useEffect(() => {
    // console.log(questions);
  });

  function onSelect() {
    //console.log("radio button change");
  }
  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check  "></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
