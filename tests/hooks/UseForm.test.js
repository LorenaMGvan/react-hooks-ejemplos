import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/UseForm';


describe('pruebas en useForm', () => {

    const initialForm = {
        name: 'Lorena',
        email: 'test@gmail.com'
    }


    test('Debe regrear los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputCambios: expect.any(Function),
            onResetForm: expect.any(Function)
        })

        // expect(result.current).toEqual();
        // console.log(result.current);
    });

    test('debe cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const nuevoNombre = 'Juan';
        const { onInputCambios } = result.current;

        act(() => {
            onInputCambios({ target: { name: 'x', value: nuevoNombre } })
        });

        expect(result.current.name).toBe(nuevoNombre);
        expect(result.current.formState.name).toBe(nuevoNombre);
    });

    test('debe realixar el reset del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const nuevoNombre = 'Juan';
        const { onInputCambios } = result.current;

        act(() => {
            onInputCambios({ target: { name: 'x', value: nuevoNombre } }),
            onResetForm()
        });

        expect(result.current.name).toBe(nuevoNombre);
        expect(result.current.formState.name).toBe(nuevoNombre);
    });

});