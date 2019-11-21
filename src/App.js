import React from 'react';
import './App.css';
import "./components/DogsList";
import DogsList from './components/DogsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DogsList />
      </header>
    </div>
  );
}

export default App;
