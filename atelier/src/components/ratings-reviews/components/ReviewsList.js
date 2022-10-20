import Review from './Review.js';
import WriteReview from './WriteReview.js';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function ReviewsList ({reviews}) {

  //show 2 initially
  const [showAmount, setShowAmount] = useState(2);
  //edge case, if less than 2 reviews
  if(reviews.length<2) {
    setShowAmount(reviews.length);
  }
  var handleClick = (e) => {
    //adds 2 to the previous show amount, caps at the length of reviews.
    e.preventDefault();
    if(showAmount < reviews.length-1) {
      setShowAmount(prev => prev + 2);
    } else {
      setShowAmount(reviews.length);
    }
  }

  return (
    <div>
      <div className="reviews-list">
        <div className="sort-options">
        </div>
        {reviews.slice(0, showAmount).map((review, i) => {
          return (<Review key={i} review={review}/>)
        })}
      </div>
      {reviews.length > 2 ?
      (<button className="more-reviews" onClick={function(e){handleClick(e);
      }}>More Reviews</button>) : null}
      <br></br>
      <button className="write-reviews" onClick={function(){}}>Write Review</button>
      <WriteReview/>
    </div>
  )
}