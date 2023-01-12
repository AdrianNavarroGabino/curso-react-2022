import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            {/* Título */}
            <h1>Gif Expert App</h1>

            {/* Input */}

            {/* Listado de Gif */}
            <ol>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ol>
            {/* Gif item */}
        </>
    )
}