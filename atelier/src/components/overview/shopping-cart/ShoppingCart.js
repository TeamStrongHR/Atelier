
const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <div className="size-quantity">
        <select>
          <option value="">SELECT SIZE</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
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