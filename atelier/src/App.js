import Navbar from './components/Navbar.js';
import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import RatingsAndReviews from './components/ratings-reviews/RatingsAndReviews.js'
import QuestionsAndAnswers from './components/question-answer/QuestionsAndAnswers.js';
import axios from 'axios'
import {useState, useEffect} from 'react';



function App() {
  const [currentProduct, setCurrentProduct] = useState('37313');
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let options = {
        url: `http://localhost:3000/api/related/${currentProduct}`,
        method: 'get',
    }
    axios(options)
        .then((data) => {
            setCurrentData(data.data);
            // setStarRating(calStar(data.data.ratings));
            setLoading(false);
            console.log('RENDERED ', currentProduct)

        })
        .catch(err => { console.log('APP JS ', err) })

}, [currentProduct]);

if (isLoading) {
  return <div>Retrieving Related Products</div>
}
  return (
    <div className="App">
      {currentData && <Overview setCurrentProduct={setCurrentProduct} currentData={currentData}/>}
      <RelatedAndComparison currentData={currentData} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
      <RatingsAndReviews product_id={currentProduct}/>
      <section></section>
      <aside></aside>
      <section></section>
      <aside></aside>
      <QuestionsAndAnswers/>
    </div>
  );
}

export default App;
