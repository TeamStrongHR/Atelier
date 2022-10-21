import {useState, useEffect} from 'react';
import StarRating from '../../shared/StarRating.js';
import {format, parseISO} from 'date-fns'

export default function Review ({review}) {
  var date = format(parseISO(review.date), "MMMM dd, yyyy")
  console.log(date)


  return (
    <div className="review">
      <div className="star-user">
      <StarRating rating={review.rating}/>
      <span id="user-date"> {review.reviewer_name}, {date}</span>
      </div>
      <h4>{review.summary}</h4>
      <p>{review.body}</p>
      <div>
      <span id="helpful"> Helpful?  <a>Yes</a> ({review.helpfulness}) | <u>Report</u> </span>
      </div>
      <hr className="break"></hr>
    </div>
  )
}


