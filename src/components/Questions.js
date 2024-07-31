import React, { useState } from "react";

export default function Questions() {
  const [checkes, setchecked] = useState(undefined);
  function onSelect() {
    console.log("radio button change");
  }
  return (
    <div className="questions">
      <h2 className="text-light">نمونه سوال اول</h2>

      <ul>
        <li>
          <input
            type="radio"
            value={false}
            name="options"
            id="q1-option"
            onChange={onSelect}
          />
          <label className="text-primary" htmlFor={`q1-option`}></label>
          <div className="check  checked"></div>
        </li>
      </ul>
    </div>
  );
}
