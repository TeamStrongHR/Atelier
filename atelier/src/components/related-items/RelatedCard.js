import axios from 'axios';
import {useState, useEffect} from 'react';
import RelatedModal from './RelatedModal.js';

const testDataInfo = {
  "id": 37319,
  "campus": "hr-rfe",
  "name": "Summer Shoes",
  "slogan": "A risky call in the spring or fall",
  "description": "Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.",
  "category": "Kicks",
  "default_price": "59.00",
  "created_at": "2021-08-13T14:37:33.145Z",
  "updated_at": "2021-08-13T14:37:33.145Z",
  "features": [
      {
          "feature": "Sole",
          "value": "Rubber"
      },
      {
          "feature": "Material",
          "value": "FullControlSkin"
      },
      {
          "feature": "Mid-Sole",
          "value": "ControlSupport Arch Bridge"
      },
      {
          "feature": "Stitching",
          "value": "Double Stitch"
      }
  ]
};

const testDataStyles = {
  "product_id": "37319",
  "results": [
      {
          "style_id": 221043,
          "name": "White",
          "original_price": "59.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1500699889581-a7f97ec155d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1500699889581-a7f97ec155d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1558118070-09ba9a9efb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1558118070-09ba9a9efb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=662&q=80"
              }
          ],
          "skus": {
              "1281378": {
                  "quantity": 14,
                  "size": "7"
              },
              "1281379": {
                  "quantity": 25,
                  "size": "7.5"
              },
              "1281380": {
                  "quantity": 9,
                  "size": "8"
              },
              "1281381": {
                  "quantity": 2,
                  "size": "8.5"
              },
              "1281382": {
                  "quantity": 18,
                  "size": "9"
              },
              "1281383": {
                  "quantity": 12,
                  "size": "9.5"
              },
              "1281384": {
                  "quantity": 10,
                  "size": "10"
              },
              "1281385": {
                  "quantity": 18,
                  "size": "10.5"
              },
              "1281386": {
                  "quantity": 11,
                  "size": "11"
              },
              "1281387": {
                  "quantity": 35,
                  "size": "11.5"
              },
              "1281388": {
                  "quantity": 25,
                  "size": "12"
              }
          }
      }
  ]
};

//In props
//related product id
//current product name, features
export default function RelatedCard (props) {
  //retrieve product info and styles axios.get()

  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [starRating, setStarRating] = useState('*****');
  //Make sure to show sales price

  const [showModal, setShowModal] = useState(false);

  useEffect(()=> {
    setCategory(testDataInfo.category);
    setProductName(testDataInfo.name);
    setProductPrice(testDataStyles.results[0].original_price);
  }, []);

  const handleModal = () => {
    if (showModal === true) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }

  return (
    <div className='related-card'>
      <div className='card-modal'>
         <i class="fa-regular fa-star" onClick={handleModal}></i>
         <RelatedModal showModal={showModal} onClose={handleModal} currentProduct={props.currentProduct} relatedProduct={testDataInfo}/>
      </div>
      <img className='card-image' src={testDataStyles.results[0].photos[0].url} alt='NO IMG FOUND' ></img>
      <div className='card-info'>
        <i className='card-category'>{category}</i>
        <b className='card-name'>{productName}</b>
        <small className='card-price'>{'$ ' + productPrice}</small>
        <small className='card-stars'>{starRating}</small>
      </div>

    </div>
  )
}