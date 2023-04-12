import React from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { MoonLoader } from "react-spinners";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  // Extraemos los valores de loading y gifs llamando al custom hook
  const { loading, gifs } = useGifs({ keyword });

  return (
    <>
      {loading ? (
        <MoonLoader color="#367bd6"></MoonLoader>
      ) : (
        <ListOfGifs gifs={gifs}></ListOfGifs>
      )}
    </>
  );
}
