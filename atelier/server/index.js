require("dotenv").config();
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');


//middleware
app.use(express.json());

//serve up REACT static assets, static assets are created during build.
app.use(express.static(path.join(__dirname, "../build")))






app.all('/api/:endpoint', (req, res, next) => {
  var end = req.params.endpoint;
  switch (req.method) {
    case "GET":
      if (end === "reviews") {
        var options = {
          url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews",
          params: {
            page: parseInt(req.query.page),
            count: parseInt(req.query.count),
            sort: req.query.sort,
            product_id: parseInt(req.query.product_id)
          },
          method: "get",
          headers: { "Authorization": process.env.AUTH }
        }
        axios(options)
          .then(result => {
            res.send(result.data)
          })
      }
      break;
  }
})


//listen at environment PORT 3000 (see .env)
app.listen(process.env.PORT, () => {
  console.log('LISTENING AT PORT', process.env.PORT);
});
