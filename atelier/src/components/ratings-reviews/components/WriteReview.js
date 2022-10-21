import {useState, useEffect} from 'react';
import axios from 'axios';


export default function WriteReview ({modalOpen, handleModalClose}) {

  return (
  <div className="modal" style={{display:`${modalOpen}`}}>
    <div className="modal-content">
      <form>
        <span>Do you recommend this product?</span>
        <input type="radio" id="recommend-yes" name="recommend" value="Yes"></input>
        <label htmlFor="recommend-yes">Yes</label>
        <input type="radio" id="recommend-no" name="not-recommend" value="No"></input>
        <label htmlFor="recommend-no">No</label>

        <br></br>
        <label htmlFor="review-summary">Review Summary</label>
        <input type="text" id="review-summary" placeholder="Example: Best purchase ever!" maxlength="60"></input>
        <br></br>

        <label htmlFor="review-body">Review Body</label>
        <input type="text" id="review-body" placeholder="Why did you like the product or not?" minlength="50" maxlength="1000"></input>


      </form>>
      <button className="close-modal" onClick={handleModalClose}>Close</button>
    </div>>
  </div>)
}