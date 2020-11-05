import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';

function App() {
  return (
    <div className="app">
      <Route exact path='/' component={Home} />
      <Route exact path='/search' component={Search} />
    </div>
  );
}

export default App;
