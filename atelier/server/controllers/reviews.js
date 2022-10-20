const axios = require('axios');

module.exports.reviews = (req, res) => {
  var end = req.params.endpoint;
  console.log('END POINT', end)
  switch (req.method) {
    case "GET":
      //to render Reviews-List component
      if(end === "base") {
        var options = {
          url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
          params: {
            page: parseInt(req.query.page),
            count: parseInt(req.query.count),
            sort: req.query.sort,
            product_id: parseInt(req.query.product_id)
          },
          method: "get",
          headers: {"Authorization": process.env.AUTH}
        }
        axios(options)
        .then(result => {
          res.send(result.data)
        })
      }
      //to render the Ratings component
      if(end === "meta") {
        var options = {
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${end}`,
          params: {
            product_id: parseInt(req.query.product_id)
          },
          method: "get",
          headers: {"Authorization": process.env.AUTH}
        }
        axios(options)
        .then(result => {
          res.send(result.data)
        })
      }
      break;
  }
}
