import React, { useEffect, useState } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import getGifs from "../../services/getGifs";

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

  if (loading) return <i>Cargando resultados ...</i>;

  return (
    <>
      <ListOfGifs gifs={gifs}></ListOfGifs>
    </>
  );
}
