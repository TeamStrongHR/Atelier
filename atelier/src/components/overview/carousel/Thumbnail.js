import logo from '../../../images/logo.png'

const Thumbnail= ({thumbnail, showImage, id})=>{
  return (
    <img className="thumbnail" src={thumbnail} onClick={()=>{showImage(id)}}></img>
  )
}

export default Thumbnail