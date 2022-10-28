import no_url from '../../../images/no_url.jpg'

const MainImage = ({id, image,expanded, expandOnClick}) => {
  return (
    <div className={expanded ? "expanded-main-image": "main-image"} data-testid="main-image">
      <img src={image} id={id} alt={no_url} onClick={expandOnClick}></img>
    </div>
  )
}

export default MainImage;
