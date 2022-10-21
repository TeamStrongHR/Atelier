import {useState, useEffect} from 'react';
import RelatedList from './RelatedList.js';
import YourOutfit from './YourOutfit.js';
import axios from 'axios';

export default function RelatedAndComparison (props) {
  const currProduct = '37319';
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let options = {
      url: `http://localhost:3000/api/related/${currProduct}`,
      method: 'get',
    };
    axios(options)
    .then(data => {
      setCurrentProduct(data.data);
      setLoading(false);
    })
    .catch(err => console.log(err));
  }, [])

  if (isLoading) {
    return <div>Retrieving Related Products</div>
  }

  return (
    <div className='related-comparison'>
      <RelatedList currentProduct={currentProduct} />
      <YourOutfit data-testid='YourOutfit' currentProduct={currentProduct} />
    </div>
  )



}