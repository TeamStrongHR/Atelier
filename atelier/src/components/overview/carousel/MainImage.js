import no_url from '../../../images/no_url.jpg'

const MainImage = ({id, image}) => {
  return (
    <div className="main-image">
      <img src={image} id={id} alt={no_url}></img>
    </div>
  )
}

export default MainImage;
