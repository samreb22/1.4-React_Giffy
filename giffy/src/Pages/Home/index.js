import React from "react";
import { Link } from "wouter";
import GifForm from "../../components/GifForm/GifForm";

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"];

export default function Home() {
  return (
    <>
      <GifForm />
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
