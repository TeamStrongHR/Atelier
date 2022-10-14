import StarRating from '../../shared/StarRating.js';


export default function ProductSummary () {
  return (
    <aside className="product-summary">
    <StarRating/>
      <h1>Product Category</h1>
      <h1>Product Title</h1>
      <h1>Product Price</h1>
    </aside>

  )
}