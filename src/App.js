import React from 'react';
import './App.css';
import "./components/DogsList";
import DogsListContainer from './components/DogsListContainer';
import DogBreedImages from "./components/DogBreedImages";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
        <Route exact path="/" component={DogsListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImages} />
        </main>
      </header>
    </div>
  );
}

export default App;
