import React, { useState } from 'react';

function SearchBar({  searchbook , handleSubmit }) {



  return (
    <div className='searchForm'>
    <form  onSubmit={(event)=>handleSubmit(event)}>
      <input
      className='search' 
      type="text"
      placeholder="Search..."
        
        onChange={(e)=>searchbook(e)}
      />
      <button className='searchButton' type="submit">Search</button>
    </form>
    </div>
  );
}

export default SearchBar;
