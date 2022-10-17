import main_image from '../../../images/main-image.jpeg'

const MainImage = ({id}) => {
  return (
    <div className="main-image">
      <img src={main_image} id={id}></img>
    </div>
  )
}

export default MainImage;
