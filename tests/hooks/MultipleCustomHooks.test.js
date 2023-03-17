import { act, renderHook, screen, render, fireEvent } from '@testing-library/react';
import  {MultiCustomHooks} from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/UseCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/UseCounter');


describe('Probando MultipleCustomHooks.test.js', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(()=> {
        jest.clearAllMocks();
    });

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })


        render( <MultiCustomHooks />);
        screen.debug();
        expect( screen.getByText('Loading...'));
        
        const nextButton = screen.getByRole('button', { name: 'Siguiente Quote' });
        expect(nextButton.disabled).toBeTruthy();
    });
    
    test('debe mostrar un quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'lorena', quote: 'Hola mundo'}],
            isloading: false,
            hasError: null
        });
        
        render( <MultiCustomHooks />);
        screen.debug();

        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        //expect( screen.getByText('lorena') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name:'Next quote'});
        //expect(nextButton.disabled).toBeFalsy();
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();


    });


});