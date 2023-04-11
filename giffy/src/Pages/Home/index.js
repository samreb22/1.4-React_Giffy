import React from "react";
import { Link } from "wouter";

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"];

export default function Home() {
  return (
    <>
      <p className="App-Title">Los gifs más populares</p>
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
