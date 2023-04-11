import React from "react";
import './Gif.css'
import { Link } from "wouter";

export default function Gif( {title, id, url} ) {
    return (
        <Link to={`#${id}`} className="Gif">
            <h5>{ title }</h5>
            <img alt={title} src={url} />
        </Link>
    );
}