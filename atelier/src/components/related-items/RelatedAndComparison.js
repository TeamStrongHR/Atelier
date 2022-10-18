import {useState, useEffect} from 'react';
import RelatedList from './RelatedList.js';
import YourOutfit from './YourOutfit.js';
import {testProduct, testProductArr, testProductInfo, testProductStyles} from './testData.js';


export default function RelatedAndComparison (props) {
  const [currProduct, setCurrProduct] = useState(testProduct);

  return (
    <div className='related-comparison'>
      <RelatedList testProduct={testProduct} />
      <YourOutfit />
    </div>
  )
}