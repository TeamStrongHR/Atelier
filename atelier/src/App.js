import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import RatingsAndReviews from './components/ratings-reviews/RatingsAndReviews.js'
import QuestionsAndAnswers from './components/question-answer/QuestionsAndAnswers.js';
import axios from 'axios'
import { useState, useEffect } from 'react';



function App() {

  const [currentProduct, setCurrentProduct] = useState('37320');
  const [currentData, setCurrentData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let options = {
      url: `/api/related/${currentProduct}`,
      method: 'get',
    }
    axios.get(options.url)
      .then((data) => {
        setCurrentData(data.data);
      })
      .catch(err => { console.log(err) })
  }, [currentProduct]);

  return (
    <div className="App" data-testid="App">
      {currentData && <Overview setCurrentProduct={setCurrentProduct} currentData={currentData} />}
      {currentData && currentProduct && <RelatedAndComparison currentData={currentData} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>}
      {currentProduct && <RatingsAndReviews product_id={currentProduct} />}
      <section></section>
      <aside></aside>
      <section></section>
      <aside></aside>
      <QuestionsAndAnswers />
    </div>
  );
}

export default App;
