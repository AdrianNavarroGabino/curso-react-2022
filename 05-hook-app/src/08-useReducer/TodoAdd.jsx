import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    return (
        <form
            onSubmit={ (event) => {
                event.preventDefault();
                if(!description.trim()) {
                    return;
                }
                onNewTodo({
                    id: new Date().getTime(),
                    description,
                    done: false,
                });
                onResetForm();
            } }
        >
            <input
                type="text"
                value={ description }
                onChange={ onInputChange }
                name="description"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-2">Agregar</button>
        </form>
    )
}
