import {useState, useEffect} from 'react';
import {CloudinaryContext, Image} from 'cloudinary-react';
import { fetchPhotos, openUploadWidget } from "../../../CloudinaryService.js";
import axios from 'axios';


export default function WriteReview ({product_id=37311, productName, modalOpen, handleModalClose}) {

  //for collecting uploaded images
  const [images, setImages] = useState([]);
  //functions to handle upload onClick
  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "dvijvlkad",
      tags: [tag],
      uploadPreset: "upload"
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if(photos.event === 'success'){
          setImages([...images, `https://res.cloudinary.com/dvijvlkad/image/upload/${photos.info.public_id}`])
        }
      } else {
        console.log(error);
      }
    })
  }

  useEffect( () => {
    fetchPhotos("image", setImages);
  }, [])


  //states to hold form data;
  const [rating, setRating] = useState(null);
  const[body, setBody] = useState('');
  const[summary, setSummary] = useState('');
  const [recommend, setRecommend] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState(0)
  const [quality, setQuality] = useState(0);
  const [width, setWidth] = useState(0)
  const [comfort, setComfort] = useState(0)
  const [fit, setFit] = useState(0)

  var handleRecommend =(e)=>{
    if(e.target.value === "true") {
      setRecommend(true);
    } else{
      setRecommend(false);
    }
  }

  var handleRating = (e) => {
    console.log(e.target.value)
    setRating(parseInt(e.target.value));
  }

  var handleSubmit = (e) => {
    var data = {
      product_id: product_id,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: name,
      email: email,
      photos: images,
      characteristics: {
        "1" : size,
        "2": width,
        "3" :comfort,
        "4" :quality,
        "5": fit
    }
    }
    e.preventDefault();
    axios.post('localhost:3000/post')
    console.log('SUBMITTED', data)
  }

  return (
  <CloudinaryContext cloudName="dvijvlkad">
  <div className="modal" style={{display:`${modalOpen}`}}>
    <div className="modal-content">
      <form>
        <h4>Write Your Review</h4>

        {/*About Product*/}
        <h5>About the {productName}</h5>

        {/*recommended yes or no*/}
        <span>Do you recommend this product?</span>

        <div onChange={handleRecommend}><input type="radio" id="recommend-yes" name="recommend" value="true"></input>
        <label htmlFor="recommend-yes">Yes</label>
        <input type="radio" id="recommend-no" name="recommend" value="false"></input>
        <label htmlFor="recommend-no">No</label></div>



        {/*star rating*/}
        <div onChange={handleRating} class="write-rating">
          <input id="rating1" type="radio" name="rating" value="1"/>
          <label for="rating1">1</label>
          <input id="rating2" type="radio" name="rating" value="2"/>
          <label for="rating2">2</label>
          <input id="rating3" type="radio" name="rating" value="3"/>
          <label for="rating3">3</label>
          <input id="rating4" type="radio" name="rating" value="4"/>
          <label for="rating4">4</label>
          <input id="rating5" type="radio" name="rating" value="5"/>
          <label for="rating5">5</label>
        </div>

        <br></br>
        {/*Review Summary*/}
        <label htmlFor="review-summary">Review Summary</label>
        <br/>
        <textarea onChange={(e)=> {
          e.preventDefault();
          setSummary(e.target.value);
        }} value={summary} id="review-summary" placeholder="Example: Best purchase ever!" maxlength="60"></textarea>
        <br></br>

        {/*Review Body*/}
        <label htmlFor="review-body">Review Body</label>
        <br/>
        <textarea onChange={(e)=> {
          e.preventDefault();
          setBody(e.target.value);
        }} value={body} id="review-body" placeholder="Why did you like the product or not?"></textarea><br/>

        {/*image upload*/}
        <label>Upload</label>
        <div className="image-upload">
        {images.map(i => <Image
              key={i}
              publicId={i}
              fetch-format="auto"
              quality="auto"
            />)}
          <button onClick={function(e) {
            e.preventDefault();
            beginUpload();
          }}>Upload Images</button>
        </div>

        {/*Characteristics Table*/}
        <table>
          <tr>
            <td>SIZE</td>
            <formfield onChange={(e)=>{
              setSize(parseInt(e.target.value));
            }}>
            <input id="s1" type="radio" name="size" value="1"/>
            <label htmlFor="s1">A size too small<br/></label>
            <input id="s2" type="radio" name="size" value="2"/>
            <label htmlFor="s2">1/2 size too small<br/></label>
            <input id="s3" type="radio" name="size" value="3"/>
            <label htmlFor="s3">Perfect<br/></label>
            <input id="s4" type="radio" name="size" value="4"/>
            <label htmlFor="s4">1/2 size too big<br/></label>
            <input id="s5" type="radio" name="size" value="5"/>
            <label htmlFor="s5">A size too wide<br/></label>
            </formfield>
          </tr>
          <tr>
            <td>WIDTH</td>
            <formfield onChange={(e)=> {
              setWidth(parseInt(e.target.value));
            }}>
            <input id="w1" type="radio" name="width" value="1"/>
            <label htmlFor="w1">Too Narrow<br/></label>
            <input id="w2" type="radio" name="width" value="2"/>
            <label htmlFor="w2">Slightly Narrow<br/></label>
            <input id="w3" type="radio" name="width" value="3"/>
            <label htmlFor="w3">Perfect<br/></label>
            <input id="w4" type="radio" name="width" value="4"/>
            <label htmlFor="w4">Slightly Wide<br/></label>
            <input id="w5" type="radio" name="width" value="5"/>
            <label htmlFor="w5">Too Wide<br/></label>
            </formfield>
          </tr>
          <tr>
            <td>COMFORT</td>
            <formfield onChange={(e)=>{
              setComfort(parseInt(e.target.value));
            }}>
            <input id="c1" type="radio" name="comfort" value="1"/>
            <label htmlFor="c1">Uncomfortable<br/></label>
            <input id="c2" type="radio" name="comfort" value="2"/>
            <label htmlFor="c2">Slightly Comfortable<br/></label>
            <input id="c3" type="radio" name="comfort" value="3"/>
            <label htmlFor="c3">OK<br/></label>
            <input id="c4" type="radio" name="comfort" value="4"/>
            <label htmlFor="c4">Comfortable<br/></label>
            <input id="c5" type="radio" name="comfort" value="5"/>
            <label htmlFor="c5">Perfect<br/></label>
            </formfield>
          </tr>
          <tr>
            <td>QUALITY</td>
            <formfield onChange={e=> {
              setQuality(parseInt(e.target.value));
            }}>
            <input id="q1" type="radio" name="quality" value="1"/>
            <label htmlFor="q1">Poor<br/></label>
            <input id="q2" type="radio" name="quality" value="2"/>
            <label htmlFor="q2">Below Average<br/></label>
            <input id="q3" type="radio" name="quality" value="3"/>
            <label htmlFor="q3">What I Expected<br/></label>
            <input id="q4" type="radio" name="quality" value="4"/>
            <label htmlFor="q4">Pretty Great<br/></label>
            <input id="q5" type="radio" name="quality" value="5"/>
            <label htmlFor="q5">Perfect<br/></label>
            </formfield>
          </tr>
          <tr>
            <td>FIT</td>
            <formfield onChange={e=> {
              setFit(parseInt(e.target.value));
            }}>
            <input id="f1" type="radio" name="fit" value="1"/>
            <label htmlFor="f1">Runs Tight<br/></label>
            <input id="f2" type="radio" name="fit" value="2"/>
            <label htmlFor="f2">Runs Slightly Tight<br/></label><input id="f3" type="radio" name="fit" value="3"/>
            <label htmlFor="f3">Perfect<br/></label>
            <input id="f4" type="radio" name="fit" value="4"/>
            <label htmlFor="f4">Runs Slightly Long<br/></label>
            <input id="f5" type="radio" name="fit" value="5"/>
            <label htmlFor="f5">Runs Long<br/></label>
            </formfield>
          </tr>
        </table>
        <label>NAME</label>
        <br/>
        <input type="text" onChange={(e)=>{
          e.preventDefault();
          setName(e.target.value);
          }} value={name}/>
        <br/>
        <label>EMAIL</label>
        <br/>
        <input type="text" onChange={(e)=> {
          e.preventDefault();
          setEmail(e.target.value);
        }} value={email}/>
        <br/>
        <button type="submit" className="submit" onClick={handleSubmit}>Submit Review</button>
      </form>
      <button className="close-modal" onClick={handleModalClose}> Close</button>
    </div>
  </div>
  </CloudinaryContext>)
}