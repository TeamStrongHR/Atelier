import { useState, useEffect} from 'react';
import axios from 'axios';
// import child component to parent
import SearchBar from "./SearchBar.js";
import QuestionsList from './QuestionsList.js';

// second level data entry point -- using data from app
// this component will be the top level of q-a module

export default function QuestionsAndAnswersMain ({product_id}) {
  // state for current product data
  const [questionsData, setQuestionsData] = useState([])
 // state for user input
 const [searchQuery, setSearchQuery] = useState("")
 // state for filtered list --cant make a copy any other way
 const [filteredList, setFilteredList] = useState([])

const handleFilter = (searchQuery) => {
  let filteredCopy =  questionsData.filter((questions)=>{
    let lowerCasedBody = questions.question_body.toLowerCase()
    if (lowerCasedBody.includes(searchQuery.toLowerCase())) {
      return true
    }
     return false
   })
   return filteredCopy
}
console.log(filteredList, 'this works')

  // axios request to get questions for current product
  useEffect(()=>{
  axios.get('/api/questions',{params:{product_id:product_id}})
  .then((result)=>{
    setQuestionsData(result.data.results)
    setFilteredList(result.data.results)
    console.log(result.data.results, 'this is result client side ')
  })
  .catch((error)=>{
    console.log(error, 'client error ')
  })
 }, [product_id])


  return (
    <>
    <section>
    <SearchBar setSearchQuery={setSearchQuery} setFilteredList={setFilteredList} handleFilter={handleFilter}/>
    <QuestionsList questionsData={questionsData} filteredList={filteredList} searchQuery={searchQuery}/>
    </section>
    </>
  )
}

