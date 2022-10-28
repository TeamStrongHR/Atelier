import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import RatingsAndReviews from './components/ratings-reviews/RatingsAndReviews.js'
import QuestionsAndAnswers from './components/question-answer/QuestionsAndAnswers.js';
import axios from 'axios'
import { useState, useEffect } from 'react';



function App() {

  const [currentProduct, setCurrentProduct] = useState('37320');
  const [currentData, setCurrentData] = useState(null);
  const [viewedProduct, setViewedProduct] = useState({}); //{product_id: product-data-retrieved-from-server}

  useEffect(() => {
<<<<<<< HEAD
    let options = {
      url: `/api/related/${currentProduct}`,
      method: 'get',
=======
    if (viewedProduct.hasOwnProperty(currentProduct)) {
      console.log('BEFORE ', viewedProduct, currentData);
      setCurrentData(viewedProduct[currentProduct]);
      console.log('APP JS NO AXIOS USED', currentProduct, currentData);
    } else {
      let options = {
        //url: `http://localhost:3000/api/related/${currentProduct}`,
        url: `/api/related/${currentProduct}`,
        method: 'get',
      };
      axios.get(options.url)
        .then((data) => {
          setCurrentData(data.data);
          let temp = viewedProduct;
          temp[data.data.product_id] = data.data;
          setViewedProduct(temp);
        })
        .catch(err => { console.log(err) })
>>>>>>> fae0c2c52352aec0f3a9dc499f4dfac4a22f2335
    }
  }, [currentProduct, currentData]);
  console.log('INSIDE APP JS', viewedProduct);
  return (
    <div className="App" data-testid="App">
      {currentData && <Overview setCurrentProduct={setCurrentProduct} currentData={currentData} />}
      {currentData && currentProduct && viewedProduct &&<RelatedAndComparison currentData={currentData}
      currentProduct={currentProduct}
      setCurrentProduct={setCurrentProduct}
      viewedProduct={viewedProduct}
      setViewedProduct={setViewedProduct}/>}
      {currentProduct && <RatingsAndReviews product_id={currentProduct} />}
      <section></section>
      <aside></aside>
      <section></section>
      <aside></aside>
      {<QuestionsAndAnswers />}
    </div>
  );
}

export default App;
