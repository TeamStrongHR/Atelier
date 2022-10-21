import ImageGallery from './carousel/ImageGallery.js'
import ProductSummary from './product-info/ProductSummary.js'
import Slogan from './product-info/Slogan.js'
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Overview () {
  const [data, setData] = useState({productInfo:{}, styles: {}})
  // helper function intiator
  const getProductInfo = () => {
    var option = {
      url: "http://localhost:3000/api/products/37311",
      method: "get",
    }
    axios(option)
    .then((res)=>{
      console.log('response data', res.data)
      let dataCopy = data;
      dataCopy.productInfo=res.data[0];
      dataCopy.styles= res.data[1];
      setData(dataCopy);
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
      <ImageGallery data={data}/>
      <ProductSummary data={data}/>
      </div>
      <Slogan/>
    </div>
  )
}