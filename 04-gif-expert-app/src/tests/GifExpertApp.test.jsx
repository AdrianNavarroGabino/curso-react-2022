import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en GifExpertApp', () => {
    const inputValue = 'Goku';

    test('', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(screen.findByText(inputValue)).toBeTruthy
    });
});