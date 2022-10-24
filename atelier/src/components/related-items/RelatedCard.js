import axios from 'axios';
import { useState, useEffect } from 'react';
import RelatedModal from './RelatedModal.js';
import Price from './Price.js';
import StarRating from '../shared/StarRating.js';
//In props
//related product id
//current product name, features
export default function RelatedCard(props) {
    //retrieve product info and styles axios.get()

    const [isLoading, setLoading] = useState(true);
    const [relatedProduct, setRelatedProduct] = useState(null);
    // const [url, setUrl] = useState('../images/no_url.jpg');
    const [showModal, setShowModal] = useState(false);
    const [starRating, setStarRating] = useState(0);

    const calStar = (ratings) => {
        let totalNumOfRatings = 0;
        let total = 0;
        for (const num in ratings) {
            var val = parseInt(num);
            var count = parseInt(ratings[num]);
            totalNumOfRatings += count;
            total += (val * count);
        }
        let averageRating = ((total / parseFloat(totalNumOfRatings)) * 100) / 100;
        return averageRating.toFixed(1);
    };

    //Make sure to show sales price
    // useEffect(() => {
    //     let options = {
    //         url: `http://localhost:3000/api/related/${props.relatedProduct}`,
    //         method: 'get',
    //     }
    //     axios(options)
    //         .then((data) => {
    //             setRelatedProduct(data.data);
    //             setStarRating(calStar(data.data.ratings));
    //             setLoading(false);

    //         })
    //         .catch(err => { console.log(err) })

    // }, []);

    const handleModal = () => {
        if (showModal === true) {
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    }
    if (isLoading) {
        return (<div className='related-card'>Loading Production Information</div>)
    }

    return (
        <div className='related-card'>
            <div className='card-modal'>
                <i class="fa-regular fa-star" onClick={handleModal}></i>
                <RelatedModal showModal={showModal} onClose={handleModal} currentProduct={props.currentProduct} relatedProduct={relatedProduct} />
            </div>
            <img className='card-image' src={relatedProduct.default_style.photos[0].url} alt={relatedProduct.name} ></img>
            <div className='card-info'>
                <i className='card-category'>{relatedProduct.category}</i>
                <b className='card-name'>{relatedProduct.name}</b>
                <Price original_price={relatedProduct.default_style.original_price} sale_price={relatedProduct.default_style.sale_price} />
                {/* <small className='card-price'>{'$ ' + relatedProduct.default_style.original_price}</small>
                <small className='card-sale-price'>{'$ ' + relatedProduct.default_style.sale_price}</small> */}
                <small className='card-stars'>
                    <StarRating rating={starRating}/>
                </small>
            </div>

        </div>
    )
}