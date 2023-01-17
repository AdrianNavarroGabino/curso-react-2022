import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"


export const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs(category).then(console.log)
    }, []);

    return (
        <div key={category}>
            <h3>{category}</h3>
            <li>{category}</li>
        </div>
    )
}