require("dotenv").config();
const express = require('express');
const path = require('path');
const app = express();
const {reviews} = require('./controllers/reviews.js');

//middleware
app.use(express.json());

//serve up REACT static assets, static assets are created during build.
app.use(express.static(path.join(__dirname, "../build")))

app.all('/api/reviews/:endpoint', reviews)


//listen at environment PORT 3000 (see .env)
app.listen(process.env.PORT, () => {
  console.log('LISTENING AT PORT', process.env.PORT);
});
