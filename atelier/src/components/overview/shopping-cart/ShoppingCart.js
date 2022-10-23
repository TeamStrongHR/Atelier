import { useState } from 'react';
import SizeSelector from './SizeSelector.js'
import axios from 'axios';

const ShoppingCart = ({ data }) => {
  const [cartDetail, setCartDetail] = useState(['', "0"]);
  // quantity array maker
  const ArrayMaker = (str)=> {
    if (str === undefined || str === '') {
      return ['-'];
    }
    let num = parseInt(str);
    if (num > 15) {num = 15;}
    let result = [];
    for (let i = 1; i <= num; i++) {result.push(i);}
    return result;
  }
  // select onChange helper functions
  const sizeOnChange = (e) => {
    let cartDetailCopy = cartDetail.slice();
    cartDetailCopy[0] = e.target.value;
    cartDetailCopy[1] = "0";
    setCartDetail(cartDetailCopy);
  }
  const quantityOnChange = (e) => {
    let cartDetailCopy = cartDetail.slice();
    cartDetailCopy[1] = e.target.value;
    setCartDetail(cartDetailCopy);
  }
  // request handler
  const addToCart = ()=>{
    if (cartDetail[1] === "0") {
      return;
    }
    let option = {
      url: `http://localhost:3000/api/cart/${parseInt(cartDetail[0].split(',')[0])}`,
      method: "post",
    }
    axios(option)
    .then((response)=>{
      console.log('added to cart');
    })
    .catch((err)=>{
      console.log('failed to add to cart');
    })
  }
  return (
    <div className="shopping-cart">
      <div className="size-quantity">
        <select className="size" value={cartDetail[0]} onChange={sizeOnChange}>
          <option value="">SELECT SIZE</option>
          {typeof data[1][data[2]] === 'object' ? Object.entries(data[1][data[2]].skus).map((sku, i) => {
            return <SizeSelector size={sku[1].size} sku={sku[0]}maxQuantity={sku[1].quantity} setCartDetail={setCartDetail} />
          }) : null}
        </select>

        <select className="quantity" value={cartDetail[2]} onChange={quantityOnChange}>
          {typeof data[1][data[2]] === 'object' ? ArrayMaker(cartDetail[0].split(',')[1]).map((quantity)=>{
            return <option value={quantity}>{quantity}</option>;
          }): null}
        </select>
      </div>
      <div>
        <button className="add-to-bag-button" onClick={addToCart}>ADD TO BAG<span>+</span></button>
        <button>⭐</button>
      </div>
    </div>
  )
}

export default ShoppingCart;