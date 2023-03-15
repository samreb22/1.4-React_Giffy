import React, {useEffect, useState} from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs ({ params }) {
    const {keyword} = params;
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(function() {
        setLoading(true);
        // Utilizo la función "getGifs()" que he importado para realizar las llamadas a la API
        getGifs({ keyword })
        .then(gifs => {
            setGifs(gifs);
            setLoading(false);
        });
    }, [keyword]);

    if (loading) return <i>Cargando resultados ...</i>;

    return <>
        {
            gifs.map(({ title, url, id }) => 
                <Gif
                    key={id}
                    title={title} 
                    url={url} 
                    id={id} 
                />
            )
        }
    </>
    
}