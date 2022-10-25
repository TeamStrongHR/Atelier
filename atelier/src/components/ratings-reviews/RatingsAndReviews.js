import ReviewsList from './components/ReviewsList.js';
import Ratings from './components/Ratings.js';
import {useState, useEffect} from 'react';
import axios from 'axios';

//this component should render based on the product_id provided
export default function RatingsAndReviews ({productName, product_id}) {

  const [breakdown, setBreakdown] = useState({
    "product_id": "37311",
    "ratings": {
        "1": "50",
        "2": "27",
        "3": "79",
        "4": "113",
        "5": "281"
    },
    "recommended": {
        "false": "92",
        "true": "458"
    },
    "characteristics": {
        "Fit": {
            "id": 125031,
            "value": "3.0668604651162791"
        },
        "Length": {
            "id": 125032,
            "value": "3.1400560224089636"
        },
        "Comfort": {
            "id": 125033,
            "value": "3.2272727272727273"
        },
        "Quality": {
            "id": 125034,
            "value": "3.2741433021806854"
        }
    }
});

  var reviews1 = [
    {
        "review_id": 1276660,
        "rating": 4,
        "summary": "",
        "recommend": true,
        "response": null,
        "body": "dfsgdgkieglonsgsdjnlgsngklsdngklsdngkdjlsknjsdgnkdsjgdsgdsg",
        "date": "2022-09-08T00:00:00.000Z",
        "reviewer_name": "asdsad",
        "helpfulness": 1,
        "photos": []
    },
    {
        "review_id": 1276961,
        "rating": 5,
        "summary": "50 minimum?",
        "recommend": true,
        "response": null,
        "body": "50 minimum?",
        "date": "2022-10-21T00:00:00.000Z",
        "reviewer_name": "frodo",
        "helpfulness": 0,
        "photos": [
            {
                "id": 2456382,
                "url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666363123/phish_wk6zcz.webp"
            }
        ]
    },
    {
        "review_id": 1276960,
        "rating": 5,
        "summary": "",
        "recommend": true,
        "response": null,
        "body": "The void is comfortable this time of year",
        "date": "2022-10-21T00:00:00.000Z",
        "reviewer_name": "Idaho ",
        "helpfulness": 0,
        "photos": [
            {
                "id": 2456381,
                "url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666362887/DALL_E_2022-10-08_10.49.59_1_tsbdss.png"
            }
        ]
    },
    {
        "review_id": 1276959,
        "rating": 5,
        "summary": "here we go",
        "recommend": false,
        "response": null,
        "body": "here i go again on my own going down the only road ive ever known",
        "date": "2022-10-21T00:00:00.000Z",
        "reviewer_name": "frodo",
        "helpfulness": 0,
        "photos": [
            {
                "id": 2456380,
                "url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666361582/departed_aoswy6.jpg"
            }
        ]
    },
    {
        "review_id": 1276642,
        "rating": 2,
        "summary": "Yes",
        "recommend": true,
        "response": null,
        "body": "asfsdfdfdssgsgdsgdsgdsgsgsgdsgsdsgsgdsgdsgdsgsdgsdgsdgds",
        "date": "2022-09-08T00:00:00.000Z",
        "reviewer_name": "asfsf",
        "helpfulness": 0,
        "photos": []
    }];


  const [reviews, setReviews] = useState(reviews1);
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

      setBreakdown(result.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div data-testid="ratings-reviews-comp" className="ratings-reviews">
      {breakdown && <Ratings breakdown={breakdown}/>}
      {reviews && <ReviewsList productName={"NICE"} reviews={reviews}/>}
    </div>
  )
}