import React from 'react';
import { Link, Route } from 'wouter';
import './App.css';
import GifForm from './components/GifForm';
import ListOfGifs from './components/ListOfGifs';


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1><Link to='/'>App Giffy</Link></h1>
        <GifForm />
        <Link to='/gif/marvel'>Gifs de Marvel</Link>
        <Link to='/gif/f1'>Gifs de Fórmula 1</Link>
        <Link to='/gif/futbol'>Gifs de Fútbol</Link>
        <Link to='/gif/messi'>Gifs de Messi</Link>
        <Route
          path='/gif/:keyword' 
          component={ListOfGifs}>
        </Route>
      </section>
    </div>
  );
}

export default App;
