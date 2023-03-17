import { act, renderHook } from '@testing-library/react';
import {useCounter } from '../../src/hooks/UseCounter';


describe('Pruebas  en el useCounter Hook', () => {
    test('debe retornar los valores por defecto', ()=> {
        const { result } = renderHook( () => useCounter() );
        const { counter, decrementar, incrementar, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrementar ).toEqual(expect.any( Function ));
        expect( incrementar ).toEqual(expect.any( Function ));
        expect( reset ).toEqual(expect.any( Function ));
    });

    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        expect( result.current.counter ).toBe(100);
    });

    test('debe de incrementar el contador', () => {
        const { result } = renderHook( ()=> useCounter() );
        const { counter, decrementar, incrementar, reset } = result.current;
        
        act(() => {
            incrementar();
            incrementar(2);
        });
        
        incrementar();
        expect(counter).toBe(10);
    });

    test('debe de realizar el reset', () => {
        const { result } = renderHook( ()=> useCounter(100) );
        const { counter, decrementar, reset } = result.current;
        
        act(() => {
            decrementar();
            reset();
        });
        
        expect( result.current.counter ).toBe(100);
    });

});