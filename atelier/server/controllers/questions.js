// require("dotenv").config();
const express = require('express')
// const { join } = require('path');
// router instance = middleware
const router = express.Router()
const axios = require('axios');

const getProductId = (req, res) => {
  console.log('testing this works', req.query)
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
    headers: {"Authorization": process.env.AUTH},
    params: {
      product_id: req.query.product_id
    },
    method: 'get'
  }
   axios(options)
  .then((result)=>{
    // console.log(result, 'from api call server ')
    res.send(JSON.stringify(result.data))

  })
  .catch((error)=>{
   res.send(error, 'error making request ')
  })
}

  // take client post request
  //add options
  // add params


  // const postQuestion = (req, res) => {

  // }

// router.get( function (req, res ) {
//   console.log(req.params.product_id,'testing ')
//   const options = {
//     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
//     headers: {"Authorization": process.env.AUTH},
//     params: {
//       product_id: req.params.product_id
//     },
//     method: 'get'
//   }
//    axios(options)
//    .then((result)=>{
//      res.send(result)
//      console.log(result, 'from api call server ')
//    })
//    .catch((error)=>{
//     res.send(error, 'error making request ')
//    })


// })

  //create an endpoint for post in index.js


// use router file and create middleware to add base url and auth key for every request

  // then it goes to all the get/post/put routes
    // tack the last part of url  to base

    module.exports = {
      router: getProductId
    };