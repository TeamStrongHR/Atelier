import React, { useState } from "react";

export default function QuestionsList ({question, answer}) {
const [isActive , setIsActive] = useState(false);


  return (
    <li className="question-item">
    <div className="question-toggle" onClick={() => setIsActive(!isActive)}>
      <h5><b>Q:</b>  {question}</h5><span>{isActive ? "-" : "+"}</span>
    </div>
    {isActive && <div className="answer-item"><b>A:</b>  {answer}</div>}
  </li>
  )
}

