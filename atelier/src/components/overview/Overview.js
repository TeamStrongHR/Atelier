import ImageGallery from './carousel/ImageGallery.js'
import ProductSummary from './product-info/ProductSummary.js'
import Slogan from './product-info/Slogan.js'
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Overview () {
  const [data, setData] = useState(null)
  // helper function intiator
  const getProductInfo = () => {
    var option = {
      url: "http://localhost:3000/api/products/37311",
      method: "get",
    }
    axios(option)
    .then((res)=>{
      console.log('response data', res.data);

      setData([res.data[0], res.data[1]]);
    })
    .catch((err)=>{
      console.log('error data',err)
    })
  }
  useEffect(()=>{
    getProductInfo()
  },[])
  return (
    <div className="overview" data-testid="overview">
      <div className="image-summary">
      <ImageGallery />
      {data && <ProductSummary data={data}/>}
      </div>
      {data && <Slogan slogan={data[0].slogan} description={data[0].description}/>}
    </div>
  )
}