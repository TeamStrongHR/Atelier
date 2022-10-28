import RelatedCard from './RelatedCard.js';
import {useState, useEffect} from 'react';
import axios from 'axios';
// const testCurrentProductInfo = {
//   "id": 37317,
//   "campus": "hr-rfe",
//   "name": "Blues Suede Shoes",
//   "slogan": "2019 Stanley Cup Limited Edition",
//   "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
//   "category": "Dress Shoes",
//   "default_price": "120.00",
//   "created_at": "2021-08-13T14:37:33.145Z",
//   "updated_at": "2021-08-13T14:37:33.145Z",
//   "features": [
//       {
//           "feature": "Sole",
//           "value": "Rubber"
//       },
//       {
//           "feature": "Material",
//           "value": "FullControlSkin"
//       },
//       {
//           "feature": "Stitching",
//           "value": "Double Stitch"
//       }
//   ]
// }
//In props
//current product id and features / related product arr
export default function RelatedList (props) {
  const [showLeftArrow, setLeftArrow] = useState(false);
  const [showRightArrow, setRightArrow] = useState(true);
  console.log('TESTING PROPS IN RELATED LIST ', props)
  //slide value in px
  const slideWindow = 280;

  const prevHandler = () => {
    let prevSlide = document.getElementById('slider');
    prevSlide.scrollLeft -= slideWindow;
    if (prevSlide.scrollLeft === 0) {
      setLeftArrow(false);
    }
    setRightArrow(true);
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
    <div className='related-list' data-testid='related-list'>
      <h1 className='related-title'> Related Products</h1>
      {showLeftArrow ? <i className='left-arrow' onClick={prevHandler}>
        <i className="fa-solid fa-chevron-left" data-testid='left-arrow'></i>
      </i> : null}
      {showRightArrow ? <i className='right-arrow' >
        <i className="fa-solid fa-chevron-right" onClick={nextHandler} data-testid='right-arrow'></i>
      </i> : null}
      <div className='related-carousel' id='slider'>
        {//relatedProduct is product_id
          props.currentData.relatedProducts.map((relatedProduct, index) => {
            return <RelatedCard
            currentData={props.currentData}
            relatedProduct={relatedProduct}
            currentProduct={props.currentProduct} setCurrentProduct={props.setCurrentProduct}
            viewedProduct={props.viewedProduct}
            setViewedProduct={props.setViewedProduct}
            data-testid='related-card'/>
          })
        }
      </div>
    </div>
  )

}