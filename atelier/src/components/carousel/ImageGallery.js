
import axios from 'axios';
import {useState, useEffect} from 'react';
function Test() {

  const [data, setData] = useState(null)
  useEffect(()=> {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/HR-RFE/')
    .then(result => {
      console.log(result)
      setData(result.data[0]);
    })

  }, [])



  return (<h1>HELLOO
    <p>{data?.url}</p>

  </h1>)
}

export default Test;