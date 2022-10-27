import { useState } from 'react';

export default function SingleQuestion({question}) {

  const [isActive, setIsActive] = useState(false)
  // what data do i need here
    //answers list --
  // where is it coming from


  // account for the default req of 2 questions -- slice

  // slice by zero
  // event handler on clickk
    // slices by 2

  // questions answers list sliced by 2  || []




  return (
    <>
     <div className="questions" key={question.question_id}>{question.question_body}</div>

     <div className="answers-container">
      {
        Object.values(question.answers).map((answer)=>(
      <div className="single-answer">{answer.body}</div>
        ))
      }
     </div>
     {/* <button className="show-answers" onClick={()=>setIsActive(true)}>+</button> */}




    </>
  )
}