import StarRating from '../../shared/StarRating.js';
import StyleSelector from '../style-selector/StyleSelector.js';
import ShoppingCart from '../shopping-cart/ShoppingCart.js';
import Price from '../../related-items/Price.js';


export default function ProductSummary ({data, setData}) {

  return (
    <aside className="product-summary" data-testid="product-summary">
    <StarRating rating={data[3]}/>
      <h5>{data[0].category}</h5>
      <h1>{typeof data[1][data[2]] === 'object' ? <span>{data[1][data[2]].name}</span>: null}</h1>
      <h5>{typeof data[1][data[2]] === 'object' ? <Price original_price={data[1][data[2]].original_price} sale_price={data[1][data[2]].sale_price}/>: null}</h5>
    <StyleSelector data={data} setData={setData}/>
    <ShoppingCart data={data}/>
    </aside>
  )
}