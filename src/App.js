import React, { useState,Component } from "react";
import "./styles.css";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
// import Particles from "react-particles-js";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import {Switch} from 'react-router-dom';
export default function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiUrl = "https://www.omdbapi.com/?apikey=145599a0";

  const fetchData = (e) => {

    if (e.key === "Enter") {  
        axios(apiUrl + "&s=" + state.s).then(({ data }) => {
          // console.log(data);
          console.log(state.selected);
          if(data.Response === 'True'){
            setState((prevState) => {
              const SearchArray = data.Search;
    
              return { ...prevState, results: SearchArray, s: "" };
            });
          }
          else{
            setState({s:'',results:[],selected:{}});
            // console.log('Kindly provide the valid Movie')
          }
        }) // may throw three types of exceptions
     

    } 
     
  };

  const openPopUp = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      setState((prevState) => {
        return { ...prevState, selected: data };
      });
      // console.log(state.selected);
    });
  };

  const closePopUp = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    let s = e.target.value;
    // .replace(/[^A-Za-z'']/ig, '')
    setState((prevState) => {
      // console.log(prevState);

      return { ...prevState, s: s };
    });
    // console.log(state.search);
  };
  return (
    
    <Router>
    <div className="App">
      {/* <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1000
              }
            }
          }
        }}
      /> */}

      <div className="App">
     
        <header>
          <h1>Movies List</h1>
        </header>
       
        <main>
        
          <Search
            value={state.s}
            handleChnage={handleChange}
            fetchData={fetchData}
          />
         
          <Results selected={state.selected} results={state.results} openPopUp={openPopUp} />
           
          {typeof state.selected.Title !== "undefined" ? (
            
            <Popup selected={state.selected} closePopUp={closePopUp} />
         
          ) : (
            false
          )}
        </main>
      </div>
    </div>
    </Router>
  

  );
}
