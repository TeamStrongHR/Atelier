import RelatedCard from './RelatedCard.js';
import {testProductArr, testProductInfo, testProductStyles} from './testData.js';
import {useState, useEffect} from 'react';

export default function RelatedList (props) {
  const [relatedProductInfo, setRelatedProductInfo] = useState(testProductInfo);
  const [relatedProductStyles, setRelatedProductStyles] = useState(testProductStyles);
  const [relatedProductArr, setRelatedProductArr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [showLeftArrow, setLeftArrow] = useState(false);
  const [showRightArrow, setRightArrow] = useState(true);
  //slide value in px
  const slideWindow = 280;

  const prevHandler = () => {
    let prevSlide = document.getElementById('slider');
    prevSlide.scrollLeft -= slideWindow;
    if (prevSlide.scrollLeft === 0) {
      setLeftArrow(false);
    }
  }

  const nextHandler = () => {
    let nextSlide = document.getElementById('slider');
    nextSlide.scrollLeft += slideWindow;
    setLeftArrow(true);
    if (nextSlide.scrollLeft === (nextSlide.scrollWidth - nextSlide.clientWidth)) {
      setRightArrow(false);
    }
  }

  return (
    <div className='related-list' >
      <h1 className='related-title'> Related Products</h1>
      {showLeftArrow ? <i className='left-arrow' onClick={prevHandler}>
        <i class="fa-solid fa-chevron-left"></i>
      </i> : null}
      {showRightArrow ? <i className='right-arrow' >
        <i class="fa-solid fa-chevron-right" onClick={nextHandler}></i>
      </i> : null}
      <div className='related-carousel' id='slider'>
        {//relatedProduct is product_id
          relatedProductArr.map((((relatedProduct, index) => {
            return <RelatedCard relatedProduct={relatedProduct} />
          })))}
      </div>
    </div>
  )
}