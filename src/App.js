import React from 'react';
import Home from './components/home'
import CategoryPage from './components/CategoryPage'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/CategoryPage/:id">
            <Navbar />
            <CategoryPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
