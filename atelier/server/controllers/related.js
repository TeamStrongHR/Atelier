const axios = require('axios');

module.exports.related = (req, res) => {
  console.log('RECEVIED', typeof parseInt(req.params.endpoint));

  switch (req.method) {
    case 'GET':
      console.log('GET REQ MADE TO 4 API ENDPOINTS');
      let relatedProductsGet = {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.endpoint}/related`,
        method: 'get',
        headers: { "Authorization": process.env.AUTH }
      };

      let productInfoGet = {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.endpoint}`,
        method: 'get',
        headers: { "Authorization": process.env.AUTH }
      };

      let productStylesGet = {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.endpoint}/styles`,
        method: 'get',
        headers: { "Authorization": process.env.AUTH }
      };

      let productReviewGet = {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta`,
        params: {
          product_id: parseInt(req.params.endpoint)
        },
        method: "get",
        headers: { "Authorization": process.env.AUTH }
      };

      let result = {};

      Promise.all([axios(relatedProductsGet), axios(productInfoGet), axios(productStylesGet), axios(productReviewGet)])
        .then((data) => {
          //only res.json() data needed in client components
          // let relatedProducts= data[0].data;
          // let productInfo = data[1].data;
          // let productStyle = data[2].data;
          result['relatedProducts'] = data[0].data;
          result['product_id'] = data[1].data.id;
          result['name'] = data[1].data.name;
          result['category'] = data[1].data.category;
          result['features'] = data[1].data.features;
          result.slogan = data[1].data.slogan;
          result.description = data[1].data.description;
          let default_style = data[2].data.results;
          console.log('PRINT HERE ',data[2].headers['x-ratelimit-remaining']);
          for (let i = 0; i < default_style.length; i++) {
            if (default_style[i]['default?'] === true) {
              default_style.unshift(default_style.splice(i, 1)[0]);
            }
          }
          result.default_style = default_style;
          //calculating average rating
          let count = 0;
          let sum = 0;
          for (let num in data[3].data.ratings) {
            count += parseInt(data[3].data.ratings[num]);
            sum += parseInt(data[3].data.ratings[num]) * parseInt(num);
          }
          result['ratings'] = (sum / parseFloat(count)).toFixed(1);

          // console.log(result);
          // send response
          // if (data[2].headers['x-ratelimit-remaining'] < 60) {

          //   let seconds = 10 * 60 * 120/data[2].headers['x-ratelimit-remaining'];
          //   console.log('SLOWING DOWN THE REQUEST', seconds);
          //   // seconds = seconds.toString();
          //   setTimeout(() => {

          //     res.json(result)
          //   }, seconds)
          // } else {
          //   res.json(result);
          // }
          res.json(result);
        })
      break

    default:
  }
}
