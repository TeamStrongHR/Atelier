import no_url from '../../../images/no_url.jpg'

const Thumbnail= ({thumbnail, showImage, id})=>{
  return (
    <div className="thumbnail" onClick={()=>{showImage(id)}}>
      <img  src={thumbnail} alt={no_url}></img>
    </div>
  )
}

export default Thumbnail