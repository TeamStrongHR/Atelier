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

  let imageArr = [image1, image2, image3, image4, image2, image4];

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
    // calculate percent index
    let percent = 100 * distance / slides[0].clientWidth;

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

  // thumbnail initiation;
  const showThumbnails = (num) => {
    let thumbArr = document.getElementsByClassName('thumbnail');
    let thumbnails = document.getElementsByClassName('thumbnails');
    thumbnails[0].style.height = "40%";
    let indexCopy = index;
    if (num + 3 > thumbArr.length - 1) {
      indexCopy[1] = thumbArr.length - 4;
    } else if (num < 0) {
      indexCopy[1] = 0;
    } else {
      indexCopy[1] = num;
    };
    setIndex(indexCopy);
    for (let i = 0; i < thumbArr.length; i++) {
      if (num + 4 > i) {
        thumbArr[i].style.height = "100%";
      } else {
        thumbArr[i].style.height = "0%";
      }
    }
  };

  const moveThumbnail = (num) => {
    let thumbArr = document.getElementsByClassName('thumbnail');
    let indexCopy = index;
    // when at the end of the array;
    if (index[1] + num < 0) {
      return
    } else if (index[1] + num > thumbArr.length - 4) {
      return
    } else {
      indexCopy[1] = index[1] + num;
    }
    setIndex(indexCopy);
    if (num < 0) {
      // when num is -1 (previous)
      // the previous one gets rendered
      // the one rendered at the end gets 0% height
      thumbArr[index[1]].style.transition = "0.2s ease-in-out";
      thumbArr[index[1] + 4].style.transition = "0.2s ease-in-out";
      thumbArr[index[1]].style.height = "100%";
      thumbArr[index[1] + 4].style.height = "0%";
    }
    if (num > 0) {
      // when num is +1 (next)
      // the next one gets rendered
      // the one rendered in front gets 0% height;
      thumbArr[index[1] - 1].style.transition = "0.2s ease-in-out";
      thumbArr[index[1] + 3].style.transition = "0.2s ease-in-out";
      thumbArr[index[1] - 1].style.height = "0%";
      thumbArr[index[1] + 3].style.height = "100%";
    }
  };

  const moveImage = (num) => {
    showImage(index[0] + num);
  };

  useEffect(() => {
    showImage(0);
    showThumbnails(0);
  }, [])

  return (
    <section className="image-gallery" data-testid="image-gallery">
      <div className="slider">
        <div className="thumbnails">
          <a className="thumbnail-previous" onClick={() => { moveThumbnail(-1) }}>&#8963;</a>
          {imageArr.map((ele, i) => {
            return <Thumbnail thumbnail={ele} id={i} showImage={showImage}/>;
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

export default ImageGallery;