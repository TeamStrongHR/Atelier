import no_url from '../../../images/no_url.jpg';

const StyleThumbnail = ({thumbnailURL, setData, id, data}) => {
  console.log(thumbnailURL);
  // on click helper to set the style
  const styleOnClick = (e)=>{
    let dataCopy = data.slice();
    dataCopy[2] = id;
    setData(dataCopy);
  }
  return (
    <div className="style-thumbnail">
      <img src={thumbnailURL} onClick={styleOnClick}></img>
    </div>
  )
};

export default StyleThumbnail;