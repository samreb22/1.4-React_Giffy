import React, { useState } from "react";
import { useLocation } from "wouter";
import "./GifForm.css";

export default function GifForm() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  console.log(path);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search GIFs:
        <input
          placeholder="Search a gif here.."
          onChange={handleChange}
          type="text"
          required
          value={keyword}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
