import React from "react";
import Gif from "../../components/Gif/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

const Detail = ({ params }) => {
  const gifs = useGlobalGifs();
  console.log(gifs);

  const gif = gifs.find((singleGif) => singleGif.id === params.id);
  console.log(gif);

  return <Gif {...gif} />;
};

export default Detail;
