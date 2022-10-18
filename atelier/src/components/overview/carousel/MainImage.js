import main_image from '../../../images/main-image.jpeg'

const MainImage = ({id, image}) => {
  return (
    <div className="main-image">
      <img src={image} id={id}></img>
    </div>
  )
}

export default MainImage;
