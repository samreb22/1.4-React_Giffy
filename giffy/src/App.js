import React from "react";
import { Link, Route } from "wouter";
import "./App.css";
// import GifForm from "./components/GifForm/GifForm";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults/index.js";
import StaticContext from "./context/StaticContext";
import Detail from "./Pages/Detail/Detail";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider
      value={{ name: "midudev", suscribeteAlCanal: true }}
    >
      <div className="App">
        <section className="App-content">
          <h1>
            <Link to="/">App Giffy</Link>
          </h1>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
