import RelatedCard from './RelatedCard.js';
import {useState, useEffect} from 'react';

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

  // console.log(props.currentData.relatedProducts)

  // const cardHandler = () => {
  //   console.log('card clicked');
  // }
  // useEffect(() => {
  //   console.log('RELATED LIST CURRENT PRODUCT ', props.currentProduct)
  // }, [props.currentProduct]);

  return (
    <div className='related-list' >
      <h1 className='related-title'> Related Products</h1>
      {showLeftArrow ? <i className='left-arrow' onClick={prevHandler}>
        <i className="fa-solid fa-chevron-left"></i>
      </i> : null}
      {showRightArrow ? <i className='right-arrow' >
        <i className="fa-solid fa-chevron-right" onClick={nextHandler}></i>
      </i> : null}
      <div className='related-carousel' id='slider'>
        {//relatedProduct is product_id
          props.currentData.relatedProducts.map((relatedProduct, index) => {
            return <RelatedCard currentData={props.currentData} relatedProduct={relatedProduct} currentProduct={props.currentProduct} setCurrentProduct={props.setCurrentProduct}/>
          })}
      </div>
    </div>
  )

}