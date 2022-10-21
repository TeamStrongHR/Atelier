const axios = require('axios');

const fetchProductInfo = (req, res)=>{
  console.log(req.params);
  let productId = parseInt(req.params.product_id)
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
  console.log(option)
  console.log(option.url);
  Promise.all([axios(option).then((data)=> {return data.data;}), axios(option1).then((data)=>{return data.data})])
  .then((response)=>{
    console.log('response', response);
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