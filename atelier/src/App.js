import Navbar from './components/Navbar.js';
import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import RatingsAndReviews from './components/ratings-reviews/RatingsAndReviews.js'
import QuestionsAndAnswers from './components/question-answer/QuestionsAndAnswers.js';
import {useState} from 'react';


function App() {
  const [currentProduct, setCurrentProduct] = useState('37313');

  return (
    <div className="App">
      <Overview/>
      <RelatedAndComparison currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
      <RatingsAndReviews product_id={37317}/>
      <section></section>
      <aside></aside>
      <section></section>
      <aside></aside>
      <QuestionsAndAnswers/>
    </div>
  );
}

export default App;
