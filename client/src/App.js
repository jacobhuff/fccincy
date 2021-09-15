import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './styles/main.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Roster from "./components/Roster";
import atlantasep15ratings from "./components/ArticleLinks/atlantasep15ratings";
import atlantasep15preview from "./components/ArticleLinks/atlantasep15preview";
import torontosep11ratings from "./components/ArticleLinks/torontosep11ratings";

// PLAYER RATINGS

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/schedule' component={Schedule} />
        <Route exact path='/roster' component={Roster} />
        <Route exact path='/atlantasep15ratings' component={atlantasep15ratings} />
        <Route exact path='/atlantasep15preview' component={atlantasep15preview} />
        <Route exact path='/torontosep11ratings' component={torontosep11ratings} />
      </Router>
    </div>
  );
}

export default App;
