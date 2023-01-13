import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = () => {
        setCategories(['Valorant', ...categories]);
    }

    return (
        <>
            {/* Título */}
            <h1>Gif Expert App</h1>

            {/* Input */}

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ol>
            {/* Gif item */}
        </>
    )
}