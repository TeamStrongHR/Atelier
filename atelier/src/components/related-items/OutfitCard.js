/*
const testOutfit = {
  'product_id': '37319',
  'name': testDataInfo.name,
  'category': testDataInfo.category,
  'price': testDataStyles.results[0].sale_price,
  'photos': testDataStyles.results[0].photos[0].url,
  'star_rating': '*****'
};
*/

export default function RelatedCard (props) {
  const deleteHandle = () => {
    let tempList = props.outfitList.slice();
    let indx = tempList.indexOf(props.outfit);
    tempList.splice(indx,1);
    props.setOutfitList(tempList);
  };

  return (
    <div className='outfit-card'>
      <i class="fa fa-times-circle-o" onClick={deleteHandle}></i>
      <img className='card-image' src={props.outfit.photos} alt='NO IMG FOUND' ></img>
      <div className='card-info'>
        <i className='card-category'>{props.outfit.category}</i>
        <b className='card-name'>{props.outfit.name}</b>
        <small className='card-price'>{'$ ' + props.outfit.price}</small>
        <small className='card-stars'>{props.outfit.star_rating}</small>
      </div>

    </div>
  )
}