import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import RatingsAndReviews from './components/ratings-reviews/RatingsAndReviews.js'
import QuestionsAndAnswersMain from './components/question-answer/questionsAnswersMain.js';
import axios from 'axios'
import {useState, useEffect} from 'react';



function App() {

  const [currentProduct, setCurrentProduct] = useState('37313');
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let options = {
        url: `http://localhost:3000/api/related/${currentProduct}`,
        method: 'get'
    }
    axios(options)
        .then((data) => {
            setCurrentData(data.data);
            setLoading(false);
        })
        .catch(err => { console.log('APP JS ', err) })
}, [currentProduct]);


if (isLoading) {
  return <div>Retrieving Related Productzzzzz</div>
}
  return (
    <div className="App">
      <Overview setCurrentProduct={setCurrentProduct} currentData={currentData}/>
      <RelatedAndComparison currentData={currentData} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
      <RatingsAndReviews product_id={37317}/>
      <section></section>
      <aside></aside>
      <section></section>
      <aside></aside>
      < QuestionsAndAnswersMain product_id={37313}/>
    </div>
  );
}

export default App;
