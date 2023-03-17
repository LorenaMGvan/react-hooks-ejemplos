import { act, renderHook, render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks() );

    test('debe mostrar la tarea  pendiente de completar', () => {
        render(<TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock} 
                    />)

        const liElement = screen.getByRole('listitem');

        // console.log(liElement);
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        const spanElement = screen.getAllByLabelText('span');
        // expect(spanElement.className).toContain('align-self-center');
        // expect(spanElement.className).not.toContain('text-decoration-line-through');
        //screen.debug();
    });

    test('Span  debe de llamar  el toogleTodo  cuando se hace click', () => {
        render(<TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock} 
                />)
        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('el button debe de llamar  el deleteTodo  cuando se hace click', () => {
        render(<TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock} 
                />)
        const botonEliminar = screen.getByLabelText('button');
        fireEvent.click( botonEliminar );
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });


}); 

