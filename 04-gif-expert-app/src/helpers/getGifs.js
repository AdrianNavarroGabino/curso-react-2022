import fetch from 'cross-fetch';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=r9J5C9r17Py1D1MDl6YCm2AGhLCke2Yv&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}