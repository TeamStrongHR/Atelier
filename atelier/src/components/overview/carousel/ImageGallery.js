// import axios from 'axios';
import {useState, useEffect} from 'react';
import MainImage from './MainImage.js';
import Thumbnail from './Thumbnail.js'
import image1 from '../../../images/image1.jpeg';
import image2 from '../../../images/image2.jpeg';
import image3 from '../../../images/image3.jpeg';
import image4 from '../../../images/image4.jpeg';
function ImageGallery() {
  const [index, setIndex] = useState([0,0]);

  let imageArr = [image1, image2, image3, image4, image2, image3];

  // helper function for carousel
  const showImage = (num)=>{
    let imageArr = document.getElementsByClassName('main-image');
    let slider = document.getElementsByClassName('slides');
    let thumbArr = document.getElementsByClassName('thumbnail');
    let indexCopy = index
    let distance = 0;
    // console.log(imageArr);
    // set index according to num input
    if (num > imageArr.length -1) {
      indexCopy[0] = 0;
      setIndex(indexCopy);}
    else if (num < 0) {
      indexCopy[0] = imageArr.length -1;
      setIndex(indexCopy);}
    else {
      indexCopy[0] = num;
      setIndex(indexCopy);
    };
    // getting distance from first image to the current index
    for (let i = 0; i < index[0]; i++) {
      distance+=imageArr[i].clientWidth;
    }
    console.log(index[0]);
    slider[0].style.transition = "transform 0.4s ease-in-out";
    slider[0].style.transform =`translateX(${-distance}px)`;

    for (let i = 0; i < thumbArr.length; i++) {
      if (i === index) {
        thumbArr[i].style.border = "thick solid";
      } else {
        thumbArr[i].style.border = "none";
      }
    }
  };

  const showThumbnails = (num) => {
    let thumbArr = document.getElementsByClassName('thumbnail');
    if (num+3 > thumbArr.length-1) {
      num = thumbArr.length-4;
    }
    if (num < 0) {
      num = 0;
    }
    // thumbnailIndex = num;
    for (let i = 0; i < thumbArr.length; i++) {
      if (i >= num && i <num+4) {
        thumbArr[i].style.display ="flex";
      } else {
        thumbArr[i].style.display="none";
      }
    }

  };

  const moveThumbnail = (num)=>{

  };

  const moveImage = (num)=> {
    showImage(index[0]+num);
  };

  useEffect(()=>{
    //  showImage(0);
    //  showThumbnails(0);
  },[])

  return (
  <section className="image-gallery" data-testid="image-gallery">
    <div className="slider">
      <div className="thumbnails">
        {imageArr.map((ele, i)=>{
          return <Thumbnail thumbnail={ele}/>;
        })}
      </div>
      <div className="slides">
      {imageArr.map((ele, i)=>{
      return <MainImage image={ele} id={i} key={i}/>;
      })}
      </div>
      <a className="main-previous" onClick={()=>{moveImage(-1)}}>&#10094;</a>
      <a className="main-next" onClick={()=>{moveImage(1)}}>&#10095;</a>
    </div>
  </section>)
}
// slides = main slider = image gallery main-imag = slide

//<div className="thumbnails">
      // {/*map through each image*/}
      // <a className="thumbnail-previous" onClick={()=>{moveThumbnail(-1)}}>prev</a>

      // {[1,2,3,4,5,6].map((ele, i)=>{
      //   return <Thumbnail key={i}/>;
      // })}

      // <a className="thumbnail-next" onClick={()=>{moveThumbnail(1)}}>next</a>
    // </div>

    // <div className="main">
    // {imageArr.map((ele, i)=>{
    //   return <MainImage image={ele} id={i} key={i}/>;
    // })}

    // <a className="previous" onClick={()=>{moveImage(-1)}}> prev </a>

    // <a className="next" onClick={()=>{moveImage(1)}}> next </a>

    // </div>

export default ImageGallery;