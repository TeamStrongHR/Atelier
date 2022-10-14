import axios from 'axios';
import {useState, useEffect} from 'react';
import main_image from '../../../images/main-image.jpeg'
function ImageGallery() {


  return (<section className="image-gallery">
    <div className="thumbnail">
      {/*map through each image*/}
      <img src={main_image}></img>
    </div>
    <div className="main-image">
    </div>
  </section>)
}

export default ImageGallery;