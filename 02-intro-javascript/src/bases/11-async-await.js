import apiKey from "../data/api-key";

const getImagen = async() => {
    try {
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data: {images: {original: {url}}}} = await resp.json();

        const img = document.createElement("img");
        img.src = url;
        document.body.appendChild(img);
    } catch (error) {
        console.error(error);
    }
}

getImagen();