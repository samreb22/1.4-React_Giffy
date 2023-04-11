import React, { useEffect, useState } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import getGifs from "../../services/getGifs";
import { MoonLoader } from "react-spinners";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      // Utilizo la función "getGifs()" que he importado para realizar las llamadas a la API
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

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
