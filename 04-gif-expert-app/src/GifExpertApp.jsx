import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

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
            <AddCategory setCategories={setCategories} />

            {/* Listado de Gif */}
            <ol>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ol>
            {/* Gif item */}
        </>
    )
}