import Review from './Review.js';
import {useState, useEffect} from 'react';
export default function ReviewsList () {
  return (
    <div className="reviews-list">
      <div className="sort-options">

      </div>
      {/*MAP REVIEWS*/}
      <Review />
      <Review />
      <Review />


    </div>
  )
}