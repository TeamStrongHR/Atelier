import no_url from '../../../images/no_url.jpg'

const Thumbnail= ({thumbnail, showImage, id, index, expanded})=>{
  let thumbnailStyle;
  if (id === index) {
    thumbnailStyle = {
      border: "thick rgb(177, 150, 108) solid"
    }
  } else {
    thumbnailStyle = {
      border: "none"
    }
  }
  return (
    <div className={expanded ? "expanded-thumbnail": "thumbnail"} onClick={()=>{showImage(id)}} style={thumbnailStyle} data-testid="thumbnail">
      <img  src={thumbnail} alt={no_url}></img>
    </div>
  )
}

export default Thumbnail;