import React from "react";
import {  Link,NavLink } from 'react-router-dom';
import Popup from './Popup';

function Result({ result, openPopUp,selected }) {
 
  return (
    <div className="result" >
      {/*  */}
      <img src={result.Poster} alt="sorry" />
      <h3>{result.Title}</h3>
      {/* <!-- Trigger the modal with a button --> */}
      <button type="button" class="btn btn-info btn-lg" onClick={() => openPopUp(result.imdbID)} data-toggle="modal" data-target="#myModal">Open Details</button>

{/* <!-- Modal --> */}
<div id="myModal" class="modal fade" role="dialog">
<div class="modal-dialog">

  {/* <!-- Modal content--> */}
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h3 class="modal-title"> {selected.Title} ({selected.Year})</h3>
    </div>
    <div class="modal-body">
    
    <img className="popup_poster" src={selected.Poster} alt="sorry" style={{width:'100%',height:'100%',}}/>
    <h4>Rating : {selected.imdbRating}</h4>
    <h5>Story : {selected.Plot}</h5>
           <h4>Director : {selected.Director}</h4>
          <h4>Genre : {selected.Genre}</h4>
          <h4> Runtime : {selected.Runtime}</h4>
          <h3>Actors : {selected.Actors}</h3>
          {/* <h5>Production : {selected.Production}</h5> */}
           <h4>Awards : {selected.Awards}</h4>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
    </div>
  </div>

</div>
</div>

    </div>
  );
}
export default Result;
