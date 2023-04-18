import React, { useState } from "react";

const Context = React.createContext({});

// Provider para proveer la información que nos interesa
export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);

  return (
    <Context.Provider value={{ gifs, setGifs }}>{children}</Context.Provider>
  );
}

export default Context;
