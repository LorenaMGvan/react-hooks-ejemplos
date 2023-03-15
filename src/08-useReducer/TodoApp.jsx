import { useEffect } from 'react';
import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './TodoReducer';

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'TArea A',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'tareaa B',
    //     done: false
    // },
]

const initX = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // el reducer no lo ejecutamos mas bien pasamos la refernecia a la funcjon 

    // Podemos tener un array  de reducers
    const [todos, dispatch] = useReducer(todoReducer, initialState, initX);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    },[todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
   }

    return (
        <>
            <h1>Todo APP(10) <small>pendientes 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo } />
                    {/* <TodoAdd onNewTodo={ todo => handleNewTodo( todo )} /> */}

                </div>
            </div>
        </>
    )
}