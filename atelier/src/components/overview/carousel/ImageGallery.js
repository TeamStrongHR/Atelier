
import axios from 'axios';
import {useState, useEffect} from 'react';
function ImageGallery() {

  const [data, setData] = useState(null)
  useEffect(()=> {
    var options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
      params: {
        page: 2,
        count: 6,
        sort : "newest",
        product_id: 37311
      },
      method: 'get',
      headers: {"Authorization" : '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'}
    }
    axios(options)
    .then(result => {
      console.log(result)
    })
  }, [])



  return (<h1>HELLOO
    <p>{data?.url}</p>

  </h1>)
}

export default ImageGallery;