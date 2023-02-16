import { useState } from 'react';

export const TodoAdd = ({ onNewTodo }) => {
    const [description, setDescription] = useState('');

    return (
        <form
            onSubmit={ (event) => {
                event.preventDefault();
                onNewTodo({
                    id: new Date().getTime(),
                    description,
                    done: false,
                });
            } }
        >
            <input
                type="text"
                value={ description }
                onChange={ (event) => setDescription(event.target.value) }
                placeholder="¿Qué hay que hacer?"
                className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-2">Agregar</button>
        </form>
    )
}
