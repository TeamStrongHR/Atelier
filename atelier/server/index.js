require("dotenv").config();
const express = require('express');
const path = require('path');
const app = express();
const {reviews} = require('./controllers/reviews.js');

//middleware
app.use(express.json());

//serve up REACT static assets, static assets are created during build.
app.use(express.static(path.join(__dirname, "../build")))

<<<<<<< HEAD





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
=======
app.all('/api/reviews/:endpoint', reviews)
>>>>>>> 09f218eb391b7e32e4e7a7fb7522e42cdd1fbba2


//listen at environment PORT 3000 (see .env)
app.listen(process.env.PORT, () => {
  console.log('LISTENING AT PORT', process.env.PORT);
});
