const axios = require('axios');

const related = (req, res) => {
  console.log(req.body);
  res.json();
}

exports.related = related;