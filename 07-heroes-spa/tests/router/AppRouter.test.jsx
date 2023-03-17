import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter />', () => {
    test('Debe mostrar el login si no está autenticado', () => {
        const contextValue = {
            logged: false,
        };

        render(
            <MemoryRouter initialEntries={ ['/marvel'] }>
                <AuthContext.Provider value={ { contextValue } }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('Login').length).toBe(2);
    });

    test('Debe mostrar el componente de marvel si está autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Adrian',
                id: '123',
            },
        };

        render(
            <MemoryRouter initialEntries={ ['/login'] }>
                <AuthContext.Provider value={ { contextValue } }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        screen.debug();

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    });
});