import React from 'react';
import { Link, Route } from 'wouter';
import './App.css';
import ListOfGifs from './components/ListOfGifs';


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App Giffy</h1>
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
