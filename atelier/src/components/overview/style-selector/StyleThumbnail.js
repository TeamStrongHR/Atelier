import { useEffect } from 'react';

const StyleThumbnail = ({ thumbnailURL, setData, id, data }) => {
  // on click helper to set the style
  let style;
  if(id === data[2]){
    style ={
      border: "thick rgb(177, 150, 108) solid"
    };
  } else {
    style ={border: 'none'};
  }
  const styleOnClick = (e) => {
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
  return (
    <div className="style-thumbnail" onClick={styleOnClick} style={style}>
      <img src={thumbnailURL} ></img>
    </div>
  );
};

export default StyleThumbnail;