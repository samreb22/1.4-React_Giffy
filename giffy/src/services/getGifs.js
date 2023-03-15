// Clave para hacer las llamadas a la API
const apiKey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa';

// Función con FETCH que realiza las peticiones a la API
export default function getGifs({ keyword = 'morty' } = {}) {
    // URL para realizar las llamadas a la API
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        const {data} = response;
        if (Array.isArray(data)){
            const gifs = data.map(image => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;
                return { title, id, url };
            });
            return gifs;
        }
    })
};