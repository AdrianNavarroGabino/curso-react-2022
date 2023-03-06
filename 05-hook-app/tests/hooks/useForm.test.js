import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en el useForm', () => {
    const initialForm = {
        name: 'Adrian',
        email: 'adrian@adrian.com',
    };

    test('Debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('Debe cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        const updatedValues = {
            name: 'name',
            value: 'Nombre cambiado',
        };

        act(() => {
            onInputChange({ target: updatedValues });
        });

        expect(result.current).toEqual({
            name: updatedValues.value,
            email: initialForm.email,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('Debe resetear el formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        const updatedValues = {
            name: 'name',
            value: 'Nombre cambiado',
        };

        act(() => {
            onInputChange({ target: updatedValues });
            onResetForm();
        });

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });
});