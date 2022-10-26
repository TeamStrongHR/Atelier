import Navbar from './components/Navbar.js';
import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import RatingsAndReviews from './components/ratings-reviews/RatingsAndReviews.js'
import QuestionsAndAnswers from './components/question-answer/QuestionsAndAnswers.js';
import axios from 'axios'
import { useState, useEffect } from 'react';



function App() {
  const [currentProduct, setCurrentProduct] = useState('37313');
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let options = {
<<<<<<< HEAD
      url: `http://localhost:3000/api/related/${currentProduct}`,
      method: 'get'
    }
    axios.default.get(options.url)
      .then((data) => {
        setCurrentData(data.data);
      })
      .catch(err => { console.log(err) })
  }, [currentProduct]);

  return (
    <div className="App" data-testid="App">
      <Overview setCurrentProduct={setCurrentProduct} currentData={currentData} />
      <RelatedAndComparison />
      <RatingsAndReviews product_id={37317} />
=======
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
>>>>>>> 4f24abd2833719fcff83efc070ea72de34a553ea
      <section></section>
      <aside></aside>
      <section></section>
      <aside></aside>
      <QuestionsAndAnswers />
    </div>
  );
}

export default App;
