import Navbar from './components/Navbar.js';
import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import RatingsAndReviews from './components/ratings-reviews/RatingsAndReviews.js'
import QuestionsAndAnswers from './components/question-answer/QuestionsAndAnswers.js';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Overview/>
      <RelatedAndComparison />
      <RatingsAndReviews product_id={37316}/>
      <section></section>
      <aside></aside>
      <section></section>
      <aside></aside>
      <QuestionsAndAnswers/>
    </div>
  );
}

export default App;
