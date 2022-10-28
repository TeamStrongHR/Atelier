// import axios from 'axios';
import { useState, useEffect } from 'react';
import MainImage from './MainImage.js';
import Thumbnail from './Thumbnail.js'

function ImageGallery({data}) {
  // index[0] = image index index[1] = thumbnail index
  const [index, setIndex] = useState([0, 0]);
  const [expanded, setExpanded] = useState(false)

  // helper function for carousel
  const showImage = (num) => {
    let imageArr = document.getElementsByClassName('main-image');
    let slides = document.getElementsByClassName('slides');
    let thumbArr = document.getElementsByClassName('thumbnail');
    let indexCopy = index

    // set index according to num input
    if (num > imageArr.length - 1) {
      indexCopy[0] = 0;
    }
    else if (num < 0) {
      indexCopy[0] = imageArr.length - 1;
    }
    else {
      indexCopy[0] = num;
    };
    setIndex(indexCopy);
    // getting count from first image to the current index

    let count = index[0];

    // calculate percent index
    let distance = 80 * count

    // console.log(index[0]);
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
  // expand on click
  const expandOnClick =()=>{
    setExpanded(!expanded);
  }

  // thumbnail navigation
  const showThumbnails = (num) => {
    let thumbArr = document.getElementsByClassName('thumbnail');
    let thumbnails = document.getElementsByClassName('thumbnails-container');
    let previous = document.getElementsByClassName('thumbnail-previous');
    let next = document.getElementsByClassName("thumbnail-next");
    let indexCopy = index.slice();

    if (thumbArr.length < 7) {
      next[0].style.opacity = "0";
      previous[0].style.opacity = "0";
      return;
    }
    if (num < 0) {
      num = 0;
    }
    if (num > thumbArr.length - 7) {
      num = thumbArr.length -7;
    }
    if (num === 0) {
      previous[0].style.opacity="0";
      next[0].style.opacity="1";
    } else if (num === thumbArr.length - 7) {
      previous[0].style.opacity="1";
      next[0].style.opacity="0";
    } else {
      previous[0].style.opacity="1";
      next[0].style.opacity="1";
    }
    indexCopy[1] = num;
    setIndex(indexCopy);
    let distance = num * 6;
    thumbnails[0].style.transition = "transform 0.4s ease-in-out";
    thumbnails[0].style.transform = `translateY(${-distance}vh)`;
  };

  const moveThumbnail = (num) => {
    showThumbnails(index[1]+num);
  };

  const moveImage = (num) => {
    showImage(index[0] + num);
  };
  useEffect(()=>{
    let thumbnailContainer = document.getElementsByClassName('thumbnails-container');
    if (thumbnailContainer.length !== 0) {
      thumbnailContainer[0].style.transform = 'translateY(0vh)';
    }
    setIndex([0,0])
    showImage(0);
    showThumbnails(0)
  },[data[0]])

  return (
    <section className={expanded ? "expanded-image-gallery": "image-gallery"} data-testid="image-gallery">
      <button onClick={expandOnClick} className={expanded ? "expanded-expand-button": "expand-button"}>expand</button>
      <div className={expanded ? "expanded-slider": "slider"}>
        <a data-testid="thumbnail-previous" className={expanded ? "expanded-thumbnail-previous": "thumbnail-previous"} onClick={() => { moveThumbnail(-1) }}>&#8963;</a>
        <div className={expanded ? "expanded-thumbnails": "thumbnails"}>
        <div className={expanded ? "expanded-thumbnails-container": "thumbnails-container"} data-testid="thumbnails-container">
          {typeof data[1][data[2]] === 'object' ? data[1][data[2]].photos.map((ele, i) => {
            return <Thumbnail thumbnail={ele.thumbnail_url} expanded={expanded} index={index[0]} id={i} showImage={showImage} key={i}/>;
          }) : null}
        </div>
        </div>
        <a data-testid="thumbnail-next" className={expanded ? "expanded-thumbnail-next": "thumbnail-next"} onClick={() => { moveThumbnail(1) }}>&#8964;</a>
        <div className={expanded ? "expanded-slides": "slides"} data-testid="slides">
          {typeof data[1][data[2]] === 'object' ? data[1][data[2]].photos.map((ele, i) => {
            // console.log(ele);
            return <MainImage image={ele.thumbnail_url} id={i} key={i} expanded={expanded} expandOnClick={expandOnClick}/>;
          }) : null}
        </div>
        <a className={expanded ? "expanded-main-previous": "main-previous"} data-testid="main-previous" onClick={() => { moveImage(-1) }}>&#10094;</a>
        <a className={expanded ? "expanded-main-next": "main-next"} data-testid="main-next" onClick={() => { moveImage(1) }}>&#10095;</a>
      </div>
    </section>)
}

export default ImageGallery;

