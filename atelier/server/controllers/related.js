const axios = require('axios');

module.exports.related = (req, res) => {
  console.log('RECEVIED', typeof parseInt(req.params.endpoint));

  switch(req.method) {
    case 'GET':
      console.log('GET REQ');
      let relatedProductsGet = {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.endpoint}/related`,
        method: 'get',
        headers: {"Authorization": process.env.AUTH}
      };

      let productInfoGet = {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.endpoint}`,
        method: 'get',
        headers: {"Authorization": process.env.AUTH}
      };

      let productStylesGet = {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.endpoint}/styles`,
        method: 'get',
        headers: {"Authorization": process.env.AUTH}
      };

      let productReviewGet = {
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta`,
          params: {
            product_id: parseInt(req.params.endpoint)
          },
          method: "get",
          headers: {"Authorization": process.env.AUTH}
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
        let default_style = data[2].data.results.filter((element => element['default?'] === true))[0];
        if (default_style) {
          result['default_style'] = default_style
        } else {
          result['default_style'] = data[2].data.results[0];
        }
        //calculating average rating
        result['ratings'] = data[3].data.ratings;
        console.log(result);
        // send response
        res.json(result);
      })
      break

  default:
  }
}
