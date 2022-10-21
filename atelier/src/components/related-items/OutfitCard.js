import Price from './Price.js';

export default function OutfitCard (props) {
  const deleteHandle = () => {
    let tempList = props.outfitList.slice();
    let indx = tempList.indexOf(props.outfit);
    tempList.splice(indx,1);
    props.setOutfitList(tempList);
  };
  console.log('RELATEDCARD ', props)
  return (
    <div className='outfit-card'>
      <i class="fa fa-times-circle-o" onClick={deleteHandle}></i>
      <img className='card-image' src={props.outfit.default_style.photos[0].url} alt={props.outfit.name} ></img>
      <div className='card-info'>
        <i className='card-category'>{props.outfit.category}</i>
        <b className='card-name'>{props.outfit.name}</b>
        <Price original_price={props.outfit.default_style.original_price} sale_price={props.outfit.default_style.sale_price}/>
        {/* <small className='card-price'>{'$ ' + props.outfit.default_style.original_price}</small> */}
        <small className='card-stars'>{props.outfit.star_rating}</small>
      </div>

    </div>
  )
}