// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import Character from './components/Character';
import Houses from './components/Houses';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/characters" exact component={Characters} />
          <Route path="/characters/:id" component={Character} />
          <Route path="/houses" exact component={Houses} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;