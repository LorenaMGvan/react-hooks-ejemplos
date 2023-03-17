import { act, renderHook, screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Probando  en HomePage', () => {

    const user = {
        id: 1,
        name: 'Fulanita',
    };

    test('Debe mostrar el componente si ne lusuario', () => {
        render(
            <UserContext.Provider value={{ user: null  }}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        // screen.debug();
    });

    test('Debe mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user  }}>
                <HomePage/>;
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
         screen.debug();
    });

});