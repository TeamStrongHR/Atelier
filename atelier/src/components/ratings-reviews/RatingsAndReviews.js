import ReviewsList from './components/ReviewsList.js';
import Ratings from './components/Ratings.js';
import {useState, useEffect} from 'react';
import axios from 'axios';

//this component should render based on the product_id provided
export default function RatingsAndReviews ({productName, product_id}) {

  const [breakdown, setBreakdown] = useState(null);

  //used to trigger re-render on submit
  const [render, setRender] = useState(false);
  var rerender = () => {
    setRender(prev=> !prev);
  }

  const [reviews, setReviews] = useState(null);
  //get reviews and ratings from server
  useEffect(()=> {
    var options1 = {
      url: "http://localhost:3000/api/reviews/base",
      params: {
        page: 1,
        count: 100,
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

      setBreakdown(result.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [render])


  const [addHelpful, setAddHelpful] = useState(true);
  var handleHelpful = (id) => {
    console.log('REVIEW ID', id)
    axios.put(`http://localhost:3000/api/reviews/helpful?review_id=${id}`)
    .then(result => {
      setRender(prev => !prev);
      console.log('SUCCESS');
    })
  }

  return (
    <div data-testid="ratings-reviews-comp" className="ratings-reviews">
      {breakdown && <Ratings breakdown={breakdown}/>}
      {breakdown && reviews && <ReviewsList rerender={rerender} handleHelpful={handleHelpful} productName={"NICE"} reviews={reviews} breakdown={breakdown}/>}
    </div>
  )
}