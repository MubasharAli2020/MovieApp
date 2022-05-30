import React from "react";
import './Popup.css';
function Popup({ selected, closePopUp }) {
  return (
    <div></div>
    // <section className="popup">
    //   <div className="popup_topContent">
    //     <h2>
    //       {selected.Title} <span>({selected.Year})</span>
    //     </h2>

    //     <h2>Rating : {selected.imdbRating}</h2>
    //   </div>

    //   <div className="popup_main_content">
    //     <div className="popup_leftContent">
    //       <img className="popup_poster" src={selected.Poster} alt="sorry" />
    //       <button onClick={closePopUp}>Close</button>
    //     </div>
    //     <div className="popup_rightContent">
    //       <p>Story : {selected.Plot}</p>
    //       <h4>Director : {selected.Director}</h4>
    //       <h4>Genre : {selected.Genre}</h4>
    //       <h4> Runtime : {selected.Runtime}</h4>
    //       <h3>Actors : {selected.Actors}</h3>
    //       <h5>Production : {selected.Production}</h5>
    //       <h4>Awards : {selected.Awards}</h4>
    //     </div>
    //   </div>
    // </section>
  );
}
export default Popup;
