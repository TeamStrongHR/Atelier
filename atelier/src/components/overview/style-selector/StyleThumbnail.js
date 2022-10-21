import no_url from '../../../images/no_url.jpg';

const StyleThumbnail = ({thumbnail}) => {
  return (
      <img className="style-thumbnail" src={thumbnail} alt={no_url}></img>
  )
};

export default StyleThumbnail;