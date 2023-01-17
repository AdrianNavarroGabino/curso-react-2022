import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"


export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category).then(setImages);
    }, []);

    return (
        <div key={category}>
            <h3>{category}</h3>
            <ol>
                {images.map(({ id, title, url }) => <li key={id}>{title}</li>)}
            </ol>
        </div>
    )
}