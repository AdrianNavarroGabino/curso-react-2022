import apiKey from '../data/api-key';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then(resp => resp.json())
        .then(({data: {images: {original}}}) => {
            const {url} = original;

            const img = document.createElement("img");
            img.src = url;

            document.body.appendChild(img);
        });