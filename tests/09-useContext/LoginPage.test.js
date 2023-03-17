import { act, renderHook, screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Probando el LoginPage', () => {
    const user = {
        id: 1,
        name: 'Flor'
    }

    test('Debe mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={ {user: null } }>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        //screen.debug();
    });


    test('Debe mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={ {user: user.name } }>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain('Flor');
        screen.debug();
    });

    test('Debe  de llamar el setUser  cuando se hace click en el  botón', () => {
        
        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={ {user: user.name , setUser: setUserMock } }>
                <LoginPage />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect( setUserMock ).toHaveBeenCalledWith({ "email": "micorreo@test.com", "id": 123, "name": "Fulanita"});

        // const preTag = screen.getByLabelText('pre');
        // expect(preTag.innerHTML).toContain('Flor');
        // screen.debug();
    });




});