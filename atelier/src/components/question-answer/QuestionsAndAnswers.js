import Search from "./Search.js";
import QuestionsList from "./QuestionsList";
import { Data } from "./data.js";
import AddQuestion from "./AddButton.js"


export default function QuestionsAndAnswers () {

  return (
    <>
<section id ="questionsAnswers">
  <header>
  <h4 className ="qa-title">Questions & Answers</h4>
  </header>
  <Search/>
  <div className="questions-list-container">
    <ul><li className ="question-item list-item"> {Data.map(({ question, index }) => (
        <QuestionsList  question={question} />
      ))}</li>
    </ul>
    <div className="answers-list-container">
      <ul> <li className="answer-item list-item">answer</li></ul>
      <div className="helpful-container">
        <div className="user-date"> by User 1234, January 2, 2022 &nbsp;&nbsp;|</div>
        <div className="helpfull-counter"> <b>Helpful?</b> <u>Yes</u>(2) &nbsp; &nbsp;|</div>
        <div className="report-btn"><u><b>Report</b></u></div>
      </div>
    </div>
  </div>

  <div className="add-question-container">
  <AddQuestion/>
  <button>load more answers</button>
  </div>

</section>
</>

  )
}



// <ul className="question-item">
//       {Data.map(({ question, answer }) => (
//         <QuestionsList question={question} answer={answer} />
//       ))}
//     </ul>