import {useState, useEffect} from 'react';
import RelatedList from './RelatedList.js';
import YourOutfit from './YourOutfit.js';
import {testProduct, testProductArr, testProductInfo, testProductStyles} from './testData.js';
import axios from 'axios';

export default function RelatedAndComparison (props) {
  const [currProduct, setCurrProduct] = useState(testProduct);

  useEffect(()=> {
    var options = {
      url: `http://localhost:${process.env.PORT}/api/related`,
      method: "get",
    }
    axios(options)
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  })
  return (
    <div className='related-comparison'>
      <RelatedList currentProduct={currProduct} />
      <YourOutfit data-testid='YourOutfit' currentProduct={currProduct}/>
    </div>
  )
}