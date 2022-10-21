import {useState} from 'react';
import SizeSelector from './SizeSelector.js'
const ShoppingCart = ({}) => {
  const [cartDetail, setCartDetail] = useState({});
  return (
    <div className="shopping-cart">
      <div className="size-quantity">
        <select className="size">
          <option value="">SELECT SIZE</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          {/*mapping over size options*/}
        </select>
        <select className="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          {/* mapping over quantity whenver size changes */}
        </select>
      </div>
      <div>
        <button>ADD TO BAG<span>+</span></button>
        <button>⭐</button>
      </div>
    </div>
  )
}

export default ShoppingCart;