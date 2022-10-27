const axios = require('axios');

const fetchProductInfo = (req, res)=>{
  let productId = parseInt(req.params.product_id);
  console.log(`Fetching info for product ID ${productId}`);
  var option = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}`,
    headers: {"Authorization": process.env.AUTH},
    method: 'get'
  }
  var option1 = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/styles`,
    headers: {"Authorization": process.env.AUTH},
    method: 'get'
  }
  var option2 = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta',
    headers: {"Authorization": process.env.AUTH},
    params: {
      product_id: productId
    },
    method: 'get'
  }

  Promise.all([
    axios(option).then((data)=> {return data.data;}),
    axios(option1)
    .then((data)=>{
    let styles = data.data.results;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i]['default?'] === true) {
        styles.unshift(styles.splice(i,1)[0]);
      }
    }
    return styles;
  }),
  axios(option2)
  .then((response)=>{
    let count = 0;
    let sum = 0;
    for (let num in response.data.ratings) {
      count+=parseInt(response.data.ratings[num]);
      sum += parseInt(response.data.ratings[num])*parseInt(num);
    }

    return Math.round(100* sum /count)/100;
  })
])
  .then((response)=>{
    console.log('where', response)
    res.send(response)
  })
  .catch((err)=>{
    console.log('err', err.response.status);
    res.status(err.response.status).end();
  })
}

const addToCart = (req, res) => {
  let skuID = parseInt(req.params.sku_id);
  console.log(`adding ${skuID} to cart`);
  console.log(skuID);
  var option = {
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart/",
    headers: {"Authorization": process.env.AUTH},
    data: {
      sku_id: skuID
    },
    method: 'post'
  }
  axios(option)
  .then((response)=>{
    console.log(response)
    res.status(201).end(response.data);
  })
  .catch((err)=>{
    res.status(err.response.status).send(err);
  })

}


module.exports = {
  fetchProductInfo: fetchProductInfo,
  addToCart: addToCart
}