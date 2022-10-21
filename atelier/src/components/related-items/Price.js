export default function Price(props) {
  //if (props.sale_price)
  let sale_price = '20';
  if (sale_price===null) {
    return <small className='card-price'>{'$ ' + props.original_price}</small>
  } else {
    return (
      <div className='on-sale'>
        <small className='stroke-price'>{'$ ' + props.original_price}</small>
        <small className='sale-price'>{' $ ' + sale_price}</small>
      </div>
    )
  }

}