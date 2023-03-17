import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';
import { Navbar } from '../../src/ui';

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
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    });
});