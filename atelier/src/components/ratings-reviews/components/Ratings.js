import {useState, useEffect} from 'react';
import StarRating from '../../shared/StarRating.js';
import axios from 'axios';
export default function Ratings ({ratings}) {

  //math to determine average rating...
  var totalNumOfRatings = 0;
  var total = 0;
  for(const num in ratings) {
    var val = parseInt(num);
    var count = parseInt(ratings[num]);
    totalNumOfRatings+=count;
    total+=(val*count)
  }
  var averageRating = Math.round(((total/parseFloat(totalNumOfRatings)) * 100)/100).toFixed(1);

  //for use in printing out the progress bars
  //reverse to start array from 5 stars...
  var ratingsKeys = Object.keys(ratings).reverse();
  var ratingsValues = Object.values(ratings).reverse();

  return (
    <div className="ratings">
      <h5>RATINGS & REVIEWS</h5>

      {/*RATING STARS*/}
      <div id="num-stars">
        <span id="num"><strong>{averageRating}</strong></span>
        <StarRating rating={averageRating}/>
      </div>
      <p>100% of reviews recommend this product</p>

      {/*RATING BARS*/}
      {ratingsKeys.map((key, i) => {
        return (
        <div className="progress-bar">
        <div><u>{key} stars</u></div>
        <div className="whole-bar">
          <div className="partial-bar" style={{width:`${Math.round((parseInt(ratingsValues[i])/parseFloat(totalNumOfRatings))*100)}%`}}></div>
        </div>
      </div>)
      })}

    {/*COMFORT/SIZE RANGES*/}
    <div className="range">

      <h6>Size</h6>
      <div className="size">
      <input type="range" min="0" max="100" value="70" list="ticks-size"/>
      <datalist id="ticks-size">
        <option value="33"></option>
        <option value="66"></option>
      </datalist>
      </div>

      <h6>Comfort</h6>
      <div className="comfort">
      <input type="range" min="0" max="100" value="30" list="ticks-comfort"/>
      <datalist id="ticks-comfort">
        <option value="25"></option>
        <option value="75"></option>
      </datalist>
      </div>

    </div>
    </div>
  )
}

