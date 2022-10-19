import ReviewsList from './components/ReviewsList.js';
import Ratings from './components/Ratings.js';
import axios from 'axios';
import {useState, useEffect} from 'react';


export default function RatingsAndReviews () {

  useEffect(()=> {
    var options = {
      url: "http://localhost:3000/api/reviews",
      params: {
        page: 1,
        count: 6,
        sort: "newest",
        product_id: 37311
      },
      method: "get",
    }
    axios(options)
    .then(result => {
      console.log(result);
    })
  })

  return (
    <div data-testid="ratings-reviews-comp" className="ratings-reviews">
      <Ratings/>
      <ReviewsList />
    </div>
  )
}