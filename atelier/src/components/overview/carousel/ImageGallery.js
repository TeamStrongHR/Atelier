import axios from 'axios';
import {useState, useEffect} from 'react';
import MainImage from './MainImage.js'
import Thumbnail from './Thumbnail.js'
import image1 from '../../../images/image1.jpeg'
import image2 from '../../../images/image2.jpeg'
import image3 from '../../../images/image3.jpeg'
import image4 from '../../../images/image4.jpeg'
function ImageGallery() {
  let imageIndex =0;
  let imageArr = [image1, image2, image3, image4];

  // helper function for carousel
  const showImage = (num)=>{
    let imageArr = document.getElementsByClassName('main-image')
    console.log(imageArr);
    if (num > imageArr.length -1) {imageIndex = 0;}
    else if (num < 0) {imageIndex = imageArr.length-1}
    else {imageIndex = num};
    for (let i = 0; i < imageArr.length; i++) {
      if (i === imageIndex) {
        imageArr[i].style.display ="flex";
      } else {
        imageArr[i].style.display="none";
      }
    }
  }
  const moveImage = (num)=> {
    showImage(imageIndex+=num);
  };
  useEffect(()=>{
    showImage(0);
  },[])

  return (<section className="image-gallery">
    <div className="thumbnails">
      {/*map through each image*/}
      {[1,2,3,4].map((ele, i)=>{
        return <Thumbnail key={i}/>;
      })}
    </div>
    <div className="main">
    <div className="main-image">
      <img src={image3}></img>
    </div>
    {imageArr.map((ele, i)=>{
      return <MainImage image={ele} id={i} key={i}/>;
    })}
    <div className="main-image">
      <img src={image2}></img>
    </div>
    <a className="previous" onClick={()=>{moveImage(-1)}}> prev </a>
    <a className="next" onClick={()=>{moveImage(1)}}> next </a>
    </div>
  </section>)
}

export default ImageGallery;