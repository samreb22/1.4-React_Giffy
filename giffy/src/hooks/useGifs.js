import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      // Recuperamos la keyword del localStorage
      const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";
      
      // Utilizo la función "getGifs()" que he importado para realizar las llamadas a la API
      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        // Guardamos la keyword en el localStorage
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword]
  );

  return { loading, gifs };
}
