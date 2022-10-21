// import axios from 'axios';
import { useState, useEffect } from 'react';
import MainImage from './MainImage.js';
import Thumbnail from './Thumbnail.js'
import image1 from '../../../images/image1.jpeg';
import image2 from '../../../images/image2.jpeg';
import image3 from '../../../images/image3.jpeg';
import image4 from '../../../images/image4.jpeg';
function ImageGallery() {
  const [index, setIndex] = useState([0, 0]);

  let imageArr = [image1, image2, image3, image4, image2, image3];

  // helper function for carousel
  const showImage = (num) => {
    let imageArr = document.getElementsByClassName('main-image');
    let slides = document.getElementsByClassName('slides');
    let thumbArr = document.getElementsByClassName('thumbnail');

    console.log(thumbArr);
    let indexCopy = index
    let distance = 0;
    // console.log(imageArr);
    // set index according to num input
    if (num > imageArr.length - 1) {
      indexCopy[0] = 0;
      setIndex(indexCopy);
    }
    else if (num < 0) {
      indexCopy[0] = imageArr.length - 1;
      setIndex(indexCopy);
    }
    else {
      indexCopy[0] = num;
      setIndex(indexCopy);
    };
    // getting distance from first image to the current index
    for (let i = 0; i < index[0]; i++) {
      distance += imageArr[i].clientWidth;
    }
    let percent = 100 *distance/ slides[0].clientWidth;

    console.log(index[0]);
    slides[0].style.transition = "transform 0.4s ease-in-out";
    slides[0].style.transform = `translateX(${-percent}%)`;

    for (let i = 0; i < thumbArr.length; i++) {
      if (i === index[0]) {
        thumbArr[i].style.border = "thick solid";
      } else {
        thumbArr[i].style.border = "none";
      }
    }
  };

  const showThumbnails = (num) => {
    let thumbArr = document.getElementsByClassName('thumbnail');
    let indexCopy = index;
    // if (num+3 > thumbArr.length-1) {
    //   num = thumbArr.length-4;
    // }
    // if (num < 0) {
    //   num = 0;
    // }
    if (num + 3 > thumbArr.length - 1) {
      indexCopy[1] = thumbArr.length - 4;
    } else if (num < 0) {
      indexCopy[1] = 0;
    } else {
      indexCopy[1] = num;
    };
    setIndex(indexCopy);
    // slider[0].style.transition = "transform 0.4s ease-in-out";
    // slider[0].style.transform = `translateX(${-distance}px)`;
  };

const moveThumbnail = (num) => {
  showThumbnails(index[1] += num);
};

const moveImage = (num) => {
  showImage(index[0] + num);
};

useEffect(() => {
  //  showImage(0);
  showThumbnails(0);
}, [])

return (
  <section className="image-gallery" data-testid="image-gallery">
    <div className="slider">
      <div className="thumbnails">
        <a className="thumbnail-previous" onClick={() => { moveThumbnail(-1) }}>&#8963;</a>
        {imageArr.map((ele, i) => {
          return <Thumbnail thumbnail={ele} />;
        })}
        <a className="thumbnail-next" onClick={() => { moveThumbnail(1) }}>&#8964;</a>
      </div>
      <div className="slides">
        {imageArr.map((ele, i) => {
          return <MainImage image={ele} id={i} key={i} />;
        })}
      </div>
      <a className="main-previous" onClick={() => { moveImage(-1) }}>&#10094;</a>
      <a className="main-next" onClick={() => { moveImage(1) }}>&#10095;</a>
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