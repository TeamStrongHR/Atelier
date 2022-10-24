import {useEffect} from 'react';

const StyleThumbnail = ({thumbnailURL, setData, id, data}) => {
  // on click helper to set the style
  const styleOnClick = (e)=>{
    let dataCopy = data.slice();
    dataCopy[2] = id;
    setData(dataCopy);
    let thumbnail = document.getElementsByClassName("style-thumbnail");
    for (let i = 0; i < thumbnail.length; i++) {
      if (i === id) {
        thumbnail[i].style.border = "thick rgb(177, 150, 108) solid";
      } else {
        thumbnail[i].style.border = "none";
      }
    }
  }
  if (id === 0) {
    return (
      <div className="style-thumbnail" style={{border: "thick rgb(177, 150, 108) solid"}}>
        <img src={thumbnailURL} onClick={styleOnClick}></img>
      </div>
    );
  }
  return (
    <div className="style-thumbnail">
      <img src={thumbnailURL} onClick={styleOnClick}></img>
    </div>
  );
};

export default StyleThumbnail;