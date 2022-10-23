import ImageGallery from './carousel/ImageGallery.js'
import ProductSummary from './product-info/ProductSummary.js'
import Slogan from './product-info/Slogan.js'
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Overview () {
  const [data, setData] = useState([{},[],0, 0])
  // helper function intiator
  const getProductInfo = (id) => {
    var option = {
      url: `http://localhost:3000/api/products/${id}`,
      method: "get",
    }
    axios(option)
    .then((res)=>{
      console.log('response data', res.data);

      setData([res.data[0], res.data[1], 0, res.data[2]]);
    })
    .catch((err)=>{
      console.log('error data',err)
    })
  };
  useEffect(()=>{
    getProductInfo(37311)
  },[]);

  return (
    <div className="overview" data-testid="overview">
      <div className="image-summary">
      <ImageGallery data={data}/>
      <ProductSummary data={data} setData={setData}/>
      </div>
      <Slogan slogan={data[0].slogan} description={data[0].description} features={data[0].features}/>
    </div>
  )
}