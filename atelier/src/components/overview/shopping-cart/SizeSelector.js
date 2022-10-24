const SizeSelector = ({size, sku, maxQuantity, setCartDetail})=>{
  return (
    <option value={sku+','+maxQuantity}>{size}</option>
  )
}

export default SizeSelector;