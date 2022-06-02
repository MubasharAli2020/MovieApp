import React from "react";
import Result from "./Result";
import './Results.css';
function Results({ results, openPopUp,selected }) {
  return (
    <div className="results">
      {results.map((result) => {
        return (
          <Result key={result.imdbID} result={result} openPopUp={openPopUp} selected={selected}/>
        );
      })}
    </div>
  );
}
export default Results;
