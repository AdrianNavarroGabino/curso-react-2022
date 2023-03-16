import { types } from '../../../src/auth/types/types';
import { authReducer } from '../../../src/auth/context/authReducer';

describe('Pruebas en authReducer', () => {
    test('Debe devolver el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('El login debe llamar a autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Adrian',
                id: '123',
            },
        };

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload,
        });
    });

    test('El logout debe borrar el user y cambiar logged a false', () => {
        const state = {
            logged: true,
            user: {
                id: '123',
                name: 'Juan',
            },
        };

        const action = {
            type: types.logout,
        };

        const newState = authReducer(state, action);
        expect(newState).toEqual({ logged: false });
    });
});