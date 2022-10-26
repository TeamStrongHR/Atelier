import Review from './Review.js';
import WriteReview from './WriteReview.js';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function ReviewsList ({handleHelpful, rerender, productName, reviews, breakdown}) {
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

  //write reviews modal
  const [modalOpen, setModalOpen] = useState("none");
  var handleModalOpen = () => {
    setModalOpen("block");
  }
  var handleModalClose = ()=> {
    setModalOpen("none");
  }

  const [sortedReviews, setSortedReviews] = useState(null);
  useEffect(()=> {
    var sortByRelevance = reviews.sort((a, b) => {
      var dateA=new Date(a.date);
      var dateB=new Date(b.date);
      return dateB-dateA;
    }).sort((a, b) => {
      return a.helpfulness - b.helpfulness
      })
    setSortedReviews(sortByRelevance);
  }, [reviews])



  console.log('THIS IS RERENDERING')




  //handles sorting the reviews
  var selectedSort = (e) => {
    console.log("FIRED!", e.target.value)
    switch (e.target.value) {
      case "Helpful":
        setSortedReviews((prev)=>
          [...prev.sort((b, a) => {
          return a.helpfulness - b.helpfulness
          })])
        break;
      case "Newest":
        setSortedReviews((prev)=>
          [...prev.sort((a, b) => {
          var dateA=new Date(a.date);
          var dateB=new Date(b.date);
          return dateB-dateA;
        })])
        break;
      default:
        setSortedReviews(prev=>
          [...prev.sort((a, b) => {
            var dateA=new Date(a.date);
            var dateB=new Date(b.date);
            return dateB-dateA;
          }).sort((a, b) => {
            return a.helpfulness - b.helpfulness
            })]);
          break;
    }
  }

  return (
    <div>
      <div data-testid="ratings-reviews-comp" className="reviews-list">
        <div className="sort-options">
          <span>{reviews.length} reviews, sorted by
            <select onChange={function(e) {
              selectedSort(e)
            }} className="sort-dropdown">
              <option value="Helpful" >Helpful</option>
              <option value="Newest" >Newest</option>
              <option value="Relevant" defaultValue>Relevant</option>
            </select>
          </span>
        </div>
        {sortedReviews && sortedReviews.slice(0, showAmount).map((review, i) => {
          return (<Review handleHelpful={handleHelpful} key={i} review={review}/>)
        })}
      </div>
      <div className="more-write-buttons">
      {sortedReviews && sortedReviews.length > 2 ?
        (<button className="more-reviews" onClick={function(e){handleClick(e);
        }}>More Reviews</button>) : null}

        <button className="write-reviews" onClick={handleModalOpen}>Write Review</button>
        <WriteReview rerender={rerender} productName={productName} breakdown={breakdown} modalOpen={modalOpen} handleModalClose={handleModalClose}/>
      </div>

    </div>
  )
}