import React from "react";
import "./Gif.css";
import { Link } from "wouter";

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`#${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </Link>
    </div>
  );
}
