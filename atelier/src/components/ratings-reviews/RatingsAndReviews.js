import ReviewsList from './components/ReviewsList.js';
import Ratings from './components/Ratings.js';
import {useState, useEffect} from 'react';
import axios from 'axios';

//this component should render based on the product_id provided
export default function RatingsAndReviews ({productName, product_id}) {
  const [reviews, setReviews] = useState(null);
  const [ratings, setRatings] = useState(null);

  //get reviews and ratings from server
  useEffect(()=> {
    var options1 = {
      url: "http://localhost:3000/api/reviews/base",
      params: {
        page: 1,
        count: 6,
        sort: "newest",
        product_id: product_id
      },
      method: "get",
    }
    axios(options1)
    .then(result => {
      console.log(result.data.results)
      setReviews(result.data.results);
    })
    .catch(err => {
      console.log(err);
    })
    var options2 = {
      url: "http://localhost:3000/api/reviews/meta",
      params: {
        product_id: product_id
      },
      method: "get",
    }
    axios(options2)
    .then(result => {

      setRatings(result.data.ratings)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div data-testid="ratings-reviews-comp" className="ratings-reviews">
      {ratings && <Ratings ratings={ratings}/>}
      {reviews && <ReviewsList productName={"NICE"} reviews={reviews}/>}
    </div>
  )
}