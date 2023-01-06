

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {

    try {

        const apiKey = 'r9J5C9r17Py1D1MDl6YCm2AGhLCke2Yv';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error);
        return 'No se encontró la imagen';
    }



}

getImagen();



