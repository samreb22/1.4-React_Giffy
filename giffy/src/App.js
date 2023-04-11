import React from "react";
import { Link, Route } from "wouter";
import "./App.css";
import GifForm from "./components/GifForm/GifForm";
//import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults/index.js";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>
          <Link to="/">App Giffy</Link>
        </h1>
        <GifForm />
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
      </section>
    </div>
  );
}

export default App;
