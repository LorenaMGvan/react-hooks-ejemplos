import { act, renderHook, screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from "../../src/09-useContext/mainApp";

describe('Probando el Main APp', () => {
    test('Debe mostrar ek HomePAge', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
            );

            expect( screen.getByText('HomePage')).toBeTruthy();
        }
    );

    test('Debe mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
            );

            expect( screen.getByText('LoginPage')).toBeTruthy();
        }
    );
});