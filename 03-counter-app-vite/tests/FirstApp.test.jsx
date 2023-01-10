/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    test('Debe hacer match con el snapshot', () => {
        const title = 'Hola, soy Vegeta';
        const { container } = render(<FirstApp title={title} subtitle="subtitulo" />);

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el título', () => {
        const title = 'Hola, soy Vegeta';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} subtitle="subtitulo" />);

        expect(getByText(title)).toBeTruthy();

        /*const h1 = container.querySelector('h1');

        expect(h1.innerHTML).toContain(title);*/
        expect(getByTestId('test-title')).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('Debe mostrar el subtítulo enviado por props', () => {
        const title = 'Hola, soy Goku';
        const subtitle = 'Soy un subtítulo';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );

        expect(getAllByText(subtitle).length).toBe(1);
    });
});