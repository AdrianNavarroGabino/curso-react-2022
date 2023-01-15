import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = newCategory => {
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Título */}
            <h1>Gif Expert App</h1>

            {/* Input */}
            <AddCategory
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gif */}
            <ol>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ol>
            {/* Gif item */}
        </>
    )
}