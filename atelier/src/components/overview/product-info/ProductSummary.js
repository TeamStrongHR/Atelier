import StarRating from '../../shared/StarRating.js';
import StyleSelector from '../style-selector/StyleSelector.js'
import ShoppingCart from '../shopping-cart/ShoppingCart.js'

export default function ProductSummary ({}) {
  let sample = {name:"wow", category: "backgrounds", price: 100, salePrice: 80};
  return (
    <aside className="product-summary" data-testid="product-summary">
    <StarRating/>
      <h5>{sample.category}</h5>
      <h1>{sample.name}</h1>
      <h5>${sample.salePrice ? <span>{sample.salePrice}</span>: <span>{sample.price}</span>}</h5>
    <StyleSelector />
    <ShoppingCart />
    </aside>
  )
}