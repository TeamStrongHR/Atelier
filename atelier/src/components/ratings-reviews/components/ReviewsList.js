import Review from './Review.js';
import {useState, useEffect} from 'react';
export default function ReviewsList () {



  var reviews = ["a", "b", "c", "d", "e", "f", "g", "h"];
  var reviewsLength = reviews.length;
  const [showAmount, setShowAmount] = useState(2);

  var handleClick = (e) => {
    //adds 2 to the previous show amount, caps at the length of reviews.
    e.preventDefault();
    if(showAmount < reviewsLength-1) {
      setShowAmount(prev => prev + 2);
    } else {
      setShowAmount(reviewsLength);
    }
    console.log(showAmount)
  }


  return (
    <div className="reviews-list">
      <div className="sort-options">
      </div>
      {/*MAP REVIEWS up to the showAmount*/}
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />

      {/*display more reviews if there are more than 2 reviews*/}
      {reviews.length < 2 ? null: (<button onClick={(e)=> {
        handleClick(e)
      }
      }>MORE REVIEWS</button>)}
    </div>
  )
}