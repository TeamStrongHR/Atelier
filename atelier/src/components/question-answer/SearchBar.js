import { useState, useEffect } from 'react';


export default function SearchBar({questionsData, setSearchQuery, setFilteredList , handleFilter}){


  // function to filter based on search
  const handleSearchQuery = (event) => {
    event.preventDefault();
    setFilteredList(handleFilter(event.target.value))
  }



  return (
    <>
    <h3><b> Questions And Answers </b></h3>
    <form className="searchForm">
    <input defaultValue="default" type='text'placeholder ="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleSearchQuery}></input>
    <button>Seach</button>
  </form>

    </>
  )
}