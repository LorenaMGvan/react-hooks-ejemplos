import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe('Pruebas en todo reducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];

    test('debe regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect( newState ).toBe( initialState );
    });

    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'nuevo todo',
            }
        }

        const newState = todoReducer( initialState , action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain(action.payload);
    });

    test('Debe eliminar un todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: {
                id: 1,
            }
        }

        const newState = todoReducer( initialState , action );
        expect( newState.length ).toBe(0);
    });

    test('Debe eliminar un toogle del todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: {
                id: 2,
            }
        }

        const newState = todoReducer( initialState , action );
        expect( newState[0].done ).toBe( true );

        const newState2 = todoReducer( newState , action );
        expect( newState2[0].done ).toBe( false );
    });




});