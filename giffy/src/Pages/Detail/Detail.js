import React, { useContext } from "react";
import StaticContext from "../../context/StaticContext";

const Detail = ({ params }) => {
  const context = useContext(StaticContext);
  console.log(context);
  // console.log(params.id);

  return <h1>Gif con id {params.id}</h1>;
};

export default Detail;
