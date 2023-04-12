import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "../../components/GifForm/GifForm.css";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  // Extraemos los valores de loading y gifs llamando al custom hook
  const { loading, gifs } = useGifs();

  console.log({path, loading});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Search GIFs:
          <input
            placeholder="Search a gif here.."
            onChange={handleChange}
            type="text"
            required
            value={keyword}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <h3 className="App-Title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs}></ListOfGifs>
      <h3 className="App-Title">Los gifs más populares</h3>
      <ul className="Links-Gifs">
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
