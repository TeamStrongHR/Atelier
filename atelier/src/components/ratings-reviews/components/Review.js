import {useState, useEffect} from 'react';
import StarRating from '../../shared/StarRating.js';
import {format, parseISO} from 'date-fns'

export default function Review ({review}) {
  var date = format(parseISO(review.date), "MMMM dd, yyyy")
  // console.log(date)


  const [imgOpen, setImgOpen] = useState("none");
  const [image, setImage] = useState(null);

  var handleOpenImg = (e)=> {
    setImgOpen("block");
    setImage(e.target.getAttribute('src'));
  }
  var handleCloseImg = () => {
    setImgOpen("none");
  }


  return (
    <div className="review">
      <div className="star-user">
      <StarRating rating={review.rating}/>
      <span id="user-date"> {review.reviewer_name}, {date}</span>
      </div>
      <h4>{review.summary}</h4>

      <p>{review.body}
      <br/>
      {review.photos.map(photo=> {
        return (<img className="thumbs" src={photo.url} onClick={(e)=>handleOpenImg(e)}></img>)
      })}
      <div className="img-modal" style={{display:`${imgOpen}`}}>
        <div className="img-modal-content">
          <img src={image}></img>
          <button onClick={handleCloseImg}>CLOSE</button>
        </div>
      </div>
      </p>
      <div>
      <span id="helpful"> Helpful?  <a>Yes</a> ({review.helpfulness}) | <u>Report</u> </span>
      </div>
      {review.recommend ? (<span id="recommend-product">I recommend this product ✓</span>): null}
      <hr className="break"></hr>
    </div>
  )
}


