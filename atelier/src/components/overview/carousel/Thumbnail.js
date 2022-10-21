import no_url from '../../../images/no_url.jpg'

const Thumbnail= ({thumbnail, showImage, id})=>{
  return (
    <img className="thumbnail" src={thumbnail} onClick={()=>{showImage(id)}} alt={no_url}></img>
  )
}

export default Thumbnail