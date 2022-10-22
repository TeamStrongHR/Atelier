import no_url from '../../../images/no_url.jpg';

const StyleThumbnail = ({thumbnailURL}) => {
  console.log(thumbnailURL);
  return (
    <div className="style-thumbnail" style={{backgroundImage: 'url'+thumbnailURL+')'}}></div>
  )
};

export default StyleThumbnail;