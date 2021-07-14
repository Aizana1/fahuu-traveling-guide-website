import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tours from './components/pages/Tours';
import Products from './components/pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tours' component={Tours} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
