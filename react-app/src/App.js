import React from 'react';
import logo from './logo.svg';
import { RecipesGrid } from './recipes-grid/RecipesGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>ReceipeHelper</label>
      </header>
      <RecipesGrid />
    </div>
  );
}

export default App;
