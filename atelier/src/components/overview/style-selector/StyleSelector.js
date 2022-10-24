import StyleThumbnail from './StyleThumbnail.js';
import {useEffect} from 'react';

const StyleSelector = ({data, setData}) =>{
  // helper function


  return (
    <div className="style-selector">
      <h4>STYLE><span>SELECTED STYLE</span></h4>
      <div className="style-thumbnails">
      {typeof data[1][data[2]] === 'object' ? data[1].map((ele, i) => {
            console.log(ele);
            return <StyleThumbnail data={data} thumbnailURL={ele.photos[0].thumbnail_url} id={i} key={i} setData={setData}/>;
          }): null}
      </div>
    </div>
  )
}

export default StyleSelector;

