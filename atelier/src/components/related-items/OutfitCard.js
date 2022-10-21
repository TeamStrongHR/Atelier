import Price from './Price.js';
import { useState, useEffect } from 'react';
import StarRating from '../shared/StarRating.js';

export default function OutfitCard (props) {

  const [starRating, setStarRating] = useState(0);

  const deleteHandle = () => {
    let tempList = props.outfitList.slice();
    let indx = tempList.indexOf(props.outfit);
    tempList.splice(indx,1);
    props.setOutfitList(tempList);
  };

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
  console.log(props.outfit.ratings);
  useEffect(() => {
    setStarRating(calStar(props.outfit.ratings));
  }, [])

  return (
    <div className='outfit-card'>
      <i class="fa fa-times-circle-o" onClick={deleteHandle}></i>
      <img className='card-image' src={props.outfit.default_style.photos[0].url} alt={props.outfit.name} ></img>
      <div className='card-info'>
        <i className='card-category'>{props.outfit.category}</i>
        <b className='card-name'>{props.outfit.name}</b>
        <Price original_price={props.outfit.default_style.original_price} sale_price={props.outfit.default_style.sale_price}/>
        <small className='card-stars'>
          <StarRating rating={starRating}/>
        </small>
      </div>

    </div>
  )
}