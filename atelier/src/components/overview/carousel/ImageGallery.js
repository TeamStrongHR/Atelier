import axios from 'axios';
import {useState, useEffect} from 'react';
import main_image from '../../../images/main-image.jpeg'
import logo from '../../../images/logo.png'

function ImageGallery() {


  return (<section className="image-gallery">
    <div className="thumbnail">
      {/*map through each image*/}
      <img src={logo}></img>
      <img src={logo}></img>
      <img src={logo}></img>
      <img src={logo}></img>
    </div>
    <div className="main-image">
    <img src={main_image}></img>
    </div>
  </section>)
}

export default ImageGallery;