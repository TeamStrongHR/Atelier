import {useState, useEffect} from 'react';
import StarRating from '../../shared/StarRating.js';
export default function Ratings () {

  return (
    <div className="ratings">
      <h5>RATINGS & REVIEWS</h5>

      {/*RATING STARS*/}
      <div id="num-stars">
        <span id="num"><strong>3.5</strong></span>
        <StarRating rating={2.7}/>
      </div>
      <p>100% of reviews recommend this product</p>
      {/*RATING BARS*/}
      <div className="progress-bar">
        <div><u>5 stars</u></div>
        <div className="whole-bar">
          <div className="partial-bar five"></div>
        </div>
      </div>
      <div className="progress-bar">
        <div><u>4 stars</u></div>
        <div className="whole-bar">
          <div className="partial-bar four"></div>
        </div>
      </div>
      <div className="progress-bar">
        <div><u>3 stars</u></div>
        <div className="whole-bar">
          <div className="partial-bar three"></div>
        </div>
      </div>
      <div className="progress-bar">
        <div><u>2 stars</u></div>
        <div className="whole-bar">
          <div className="partial-bar two"></div>
        </div>
      </div>
      <div className="progress-bar">
        <div><u>1 stars</u></div>
        <div className="whole-bar">
          <div className="partial-bar one"></div>
        </div>
      </div>

    {/*RANGE BARS*/}

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

