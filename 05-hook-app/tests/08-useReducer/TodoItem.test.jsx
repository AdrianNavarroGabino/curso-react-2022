import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'Demo Todo',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el Todo pendiente de completar', () => {
        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toBe('align-self-center false');
    });

    test('Debe mostrar el Todo completado', () => {
        todo.done = true;

        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('span debe llamar el toggleTodo cuando se hace click', () => {
        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('button debe llamar el deleteTodo cuando se hace click', () => {
        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const buttonElement = screen.getByRole('button');

        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});