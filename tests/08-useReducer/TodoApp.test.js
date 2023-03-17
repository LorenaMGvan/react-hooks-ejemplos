import { act, renderHook, render, screen, fireEvent } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { UseTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en  <TodoApp>', () => {

    UseTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true }
        ],
        todosCount: 2,
        pendingCount: 1,  
        handleDeleteTodo: jest.fn(), 
        handleNewTodo: jest.fn(), 
        handleToggleTodo: jest.fn() 
    });

    test('debe mostrar el componente correctamente', () => {
        render(<TodoApp/>);
        screen.debug();
        expect( screen.getByText('Todo #1')).toBeTrurthy();
        expect( screen.getByText('Todo #2')).toBeTrurthy();
        expect( screen.getByRole('textbox')).toBeTrurthy();
    });
});