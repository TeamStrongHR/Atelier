const axios = require('axios');

const fetchProductInfo = (req, res)=>{
  let productId = parseInt(req.params.product_id)
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

  Promise.all([axios(option).then((data)=> {return data.data;}), axios(option1).then((data)=>{
    let styles = data.data.results;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i]['default?'] === true) {
        styles.unshift(styles.splice(i,1)[0]);
      }
    }
    return styles;
  })])
  .then((response)=>{
    res.send(response)
  })
  .catch((err)=>{
    console.log('err', err);
    res.send(err);
  })
}



module.exports = {
  fetchProductInfo: fetchProductInfo
}