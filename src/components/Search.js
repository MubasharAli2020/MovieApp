import React from "react";
import './Results.css';
const Search = ({ handleChnage, fetchData, value }) => {
  return (
    <section className="search_box_wrap search-bar">
       
      <input
        type="text"
        className="searchbox"
        placeholder="Serach for Movies"
        onChange={handleChnage}
        value={value}
        onKeyPress={fetchData}
      />
    
    </section>
  );
};
export default Search;
