require("dotenv").config();
const express = require('express');
const path = require('path');
const app = express();
const {reviews} = require('./controllers/reviews.js');
const {fetchProductInfo, addToCart} = require('./controllers/overview.js');
const {related} = require('./controllers/related.js');

//middleware
app.use(express.json());

//serve up REACT static assets, static assets are created during build.
app.use(express.static(path.join(__dirname, "../build")))

app.all('/api/reviews/:endpoint', reviews);

// overview
app.post('/api/cart/:sku_id', addToCart);

app.all('/api/related/:endpoint', related);

//listen at environment PORT 3000 (see .env)
app.listen(process.env.PORT, () => {
  console.log('LISTENING AT PORT', process.env.PORT);
});
