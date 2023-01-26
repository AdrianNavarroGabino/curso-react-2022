import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";

describe('Pruebas en GifGrid', () => {
    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente', () => {
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });
});