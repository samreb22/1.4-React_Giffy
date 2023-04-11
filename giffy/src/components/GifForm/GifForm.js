import React, { useState } from "react";
import './GifForm.css'

function GifForm() {
  const [gif, setGif] = useState("");

  const handleInputChange = (event) => {
    setGif(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/search/${gif}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Buscar GIFs:
        <input type="text" placeholder="Introduce texto..." value={gif} onChange={handleInputChange} />
      </label>
      <button type="submit">Buscar</button>
    </form>
  );
}

export default GifForm;
