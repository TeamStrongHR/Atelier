import {useState, useEffect} from 'react';
import StarRating from '../../shared/StarRating.js';
export default function Review () {



  return (
    <div className="review">
      <div className="star-user">
      <StarRating rating={3.7}/>
      <span id="user-date"> Verified Purchaser, January 1, 2019</span>
      </div>
      <h4>REVIEW TITLE LONG TO TEST THE WRAPPPINGFS HASHDAHSDHAHSDHAHDSAHSADASDSADS</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis nibh cursus, dictum elit in, ultricies augue. Curabitur quis dui risus. Integer sed hendrerit enim. Sed sed lobortis nibh. Proin metus arcu, interdum ut massa a, elementum porta eros.</p>
      <div>
      <span id="helpful"> Helpful?  <a>Yes</a> (10) | <u>Report</u> </span>
      </div>
      <hr className="break"></hr>
    </div>
  )
}


