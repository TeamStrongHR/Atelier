
export default function StarRating ({rating}) {
  //average stars
  //divide by 5
  var percent = (rating/parseFloat(5))*100;
  var style = {width:`${percent}%`}
  return (
    <div className="star-rating">
      <div class="empty-stars"></div>
      <div class="full-stars" style={style}></div>
    </div>
  )
}