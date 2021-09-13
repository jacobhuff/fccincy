import React from "react";
import './App.css';
import './styles/main.css';

import CompletedMatch from "./components/CompletedMatch";

function App() {

  return (
    <div className="App">
      <div className="container">
        <CompletedMatch 
          isHome="false"
          teamTwo="Nashville"
          teamOneScore="2"
          teamTwoScore="2"
          matchResult="Tie"
          matchDate="Saturday, April 17th"
         />
         <CompletedMatch 
          isHome="false"
          teamTwo="New York City"
          teamOneScore="0"
          teamTwoScore="5"
          matchResult="Loss"
          matchDate="Saturday, April 24th"
         />
      </div>
    </div>
  );
}

export default App;
