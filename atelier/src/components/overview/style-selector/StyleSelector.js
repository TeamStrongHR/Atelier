import StyleThumbnail from './StyleThumbnail.js'
// dummy data to test on
import image1 from '../../../images/image1.jpeg';
import image2 from '../../../images/image2.jpeg';
import image3 from '../../../images/image3.jpeg';
import image4 from '../../../images/image4.jpeg';


const StyleSelector = ({data, setData}) =>{
  // helper function

  return (
    <div className="style-selector">
      <h4>STYLE> <span>SELECTED STYLE</span></h4>
      <div className="style-thumbnails">
      {Array.isArray(data[1]) ? data[1].map((style)=>{
        console.log(style.photos[0]['thumbnail_url'])
        return <StyleThumbnail thumbnailURL={style.photos[0]['thumbnail_url']}/>
      }): null}
      </div>
      {/* <div className="style-selector1">
      <span style={{width:50, height:50,borderRadius:'50%', backgroundColor:'green'}}></span>
      <span style={{width:50, height:50,borderRadius:'50%', backgroundColor:'green'}}></span>
      <span style={{width:50, height:50,borderRadius:'50%', backgroundColor:'green'}}></span>
      </div>
      <div className="style-selector2">
      <span style={{width:50, height:50,borderRadius:'50%', backgroundColor:'green'}}></span>
      <span style={{width:50, height:50,borderRadius:'50%', backgroundColor:'green'}}></span>
      <span style={{width:50, height:50,borderRadius:'50%', backgroundColor:'green'}}></span>
      <span style={{width:50, height:50,borderRadius:'50%', backgroundColor:'green'}}></span>
      </div> */}
    </div>
  )
}

export default StyleSelector;

