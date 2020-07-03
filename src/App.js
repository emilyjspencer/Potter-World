import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './potter/components/Home';


import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
