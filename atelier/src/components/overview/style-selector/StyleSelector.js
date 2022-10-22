import StyleThumbnail from './StyleThumbnail.js'
// dummy data to test on
import image1 from '../../../images/image1.jpeg';
import image2 from '../../../images/image2.jpeg';
import image3 from '../../../images/image3.jpeg';
import image4 from '../../../images/image4.jpeg';


const StyleSelector = ({data, setData}) =>{
  // helper function
  const defaultToFront = (arr)=>{
    let arrCopy = arr.slice();
    for (let i = 0; i < arrCopy.length; i++) {
      if (arrCopy[i]['default?'] === true) {
        arrCopy.unshift(arrCopy.splice(i,1)[0])
      }
    }
    return arrCopy;
  }
  return (
    <div className="style-selector">
      <h4>STYLE> <span>SELECTED STYLE</span></h4>
      <div className="style-thumbnails">
      {}
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

