import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Home, SortingHat, Spells, Characters, NavBar } from './components';



import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sortinghat" exact>
          <SortingHat />
        </Route>
        <Route path="/spells" exact>
          <Spells />
        </Route>
        <Route path="/characters" exact>
          <Characters />
        </Route>
      </Router>
    </div>
  );
}

export default App;
