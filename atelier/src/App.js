import Navbar from './components/Navbar.js';
import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import RatingsAndReviews from './components/ratings-reviews/RatingsAndReviews.js'
import QuestionsAndAnswers from './components/question-answer/QuestionsAndAnswers.js';
import axios from 'axios'
import {useState, useEffect} from 'react';



function App() {
  const [currentProduct, setCurrentProduct] = useState('37313');
  const [currentData, setCurrentData] = useState([])
  useEffect(() => {
    let options = {
        url: `http://localhost:3000/api/related/${currentProduct}`,
        method: 'get',
    }
    axios(options)
        .then((data) => {
            setCurrentData(data.data);
            // setStarRating(calStar(data.data.ratings));
            // setLoading(false);

        })
        .catch(err => { console.log(err) })

}, []);
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
