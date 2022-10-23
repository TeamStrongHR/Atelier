// import axios from 'axios';
import { useState, useEffect } from 'react';
import MainImage from './MainImage.js';
import Thumbnail from './Thumbnail.js'
import image1 from '../../../images/image1.jpeg';
import image2 from '../../../images/image2.jpeg';
import image3 from '../../../images/image3.jpeg';
import image4 from '../../../images/image4.jpeg';
function ImageGallery({ data }) {
  const [index, setIndex] = useState([0, 0]);

  // helper function for carousel
  const showImage = (num) => {
    let imageArr = document.getElementsByClassName('main-image');
    let slides = document.getElementsByClassName('slides');
    let thumbArr = document.getElementsByClassName('thumbnail');
    let indexCopy = index

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
    // getting count from first image to the current index

    let count = index[0];

    // calculate percent index
    let distance = 80 * count

    console.log(index[0]);
    slides[0].style.transition = "transform 0.4s ease-in-out";
    slides[0].style.transform = `translateX(${-distance}vh)`;

    for (let i = 0; i < thumbArr.length; i++) {
      if (i === index[0]) {
        thumbArr[i].style.border = "thick rgb(177, 150, 108) solid";
      } else {
        thumbArr[i].style.border = "none";
      }
    }
  };

  // thumbnail initiation;
  const showThumbnails = (num) => {
    let thumbArr = document.getElementsByClassName('thumbnail');
    let thumbnails = document.getElementsByClassName('thumbnails-container');
    let previous = document.getElementsByClassName('thumbnail-previous');
    let next = document.getElementsByClassName("thumbnail-next");
    let indexCopy = index;
    console.log(thumbnails);
    if (thumbArr.length < 7) {
      next[0].style.opacity = "0";
      previous[0].style.opacity = "0";
      return;
    }
    if (num + 6 >= thumbArr.length - 1) {
      next[0].style.opacity = "0";
      previous[0].style.opacity ="1";
      indexCopy[1] = thumbArr.length - 7;
    } else if (num <= 0) {
      next[0].style.opacity = "1";
      previous[0].style.opacity ="0";
      indexCopy[1] = 0;
    } else {
      next[0].style.opacity = "1";
      previous[0].style.opacity ="1";
      indexCopy[1] = num;
    };
    setIndex(indexCopy);
    let distance = index[1] * 6;
    thumbnails[0].style.transition = "transform 0.4s ease-in-out";
    thumbnails[0].style.transform = `translateY(${-distance}vh)`;
  };

  const moveThumbnail = (num) => {
    showThumbnails(index[1]+num);
  };

  const moveImage = (num) => {
    showImage(index[0] + num);
  };

  useEffect(() => {
    showImage(0);
    showThumbnails(0);
  }, [data])

  return (
    <section className="image-gallery" data-testid="image-gallery">
      <div className="slider">
        <a className="thumbnail-previous" onClick={() => { moveThumbnail(-1) }}>&#8963;</a>
        <div className="thumbnails">
        <div className="thumbnails-container">
          {typeof data[1][data[2]] === 'object' ? data[1][data[2]].photos.map((ele, i) => {
            return <Thumbnail thumbnail={ele.thumbnail_url} id={i} showImage={showImage} />;
          }) : null}
        </div>
        </div>
        <a className="thumbnail-next" onClick={() => { moveThumbnail(1) }}>&#8964;</a>
        <div className="slides">
          {typeof data[1][data[2]] === 'object' ? data[1][data[2]].photos.map((ele, i) => {
            console.log(ele);
            return <MainImage image={ele.thumbnail_url} id={i} key={i} />;
          }) : null}
        </div>
        <a className="main-previous" onClick={() => { moveImage(-1) }}>&#10094;</a>
        <a className="main-next" onClick={() => { moveImage(1) }}>&#10095;</a>
      </div>
    </section>)
}

export default ImageGallery;