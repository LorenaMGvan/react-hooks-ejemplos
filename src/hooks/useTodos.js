import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { todoReducer } from '../08-useReducer/TodoReducer';

export const UseTodos = () => {
        
    const initialState = [];
        // {
        //     id: new Date().getTime(),
        //     description: 'TArea A',
        //     done: false
        // },
    const initX = () => {
        return JSON.parse( localStorage.getItem('todos')) || [];
    }


     // Podemos tener un array  de reducers
     const [todos, dispatch] = useReducer(todoReducer, [], initX);

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
 
    const handleDeleteTodo = ( id ) => {
     console.log({ id });
     // dispatch({
     //     type: '[TODO] Remove Todo',
     //     payload: id
     // })
    }
 
    const handleToggleTodo = ( id ) => {
     console.log({ id });
     dispatch({
         type: '[TODO] Toggle Todo',
         payload: id
     })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingCount: todos.filter(todo => !todo.done).length,
    }
}