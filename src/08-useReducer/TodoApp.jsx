import { TodoAdd } from '../08-useReducer/TodoAdd';
import { TodoList } from '../08-useReducer/TodoList';
import { UseTodos } from '../hooks';

export const TodoApp = () => {

    // el reducer no lo ejecutamos mas bien pasamos la refernecia a la funcjon 
    const { todos, todosCount, pendingCount,  handleDeleteTodo, handleNewTodo, handleToggleTodo } = UseTodos();

    return (
        <>
            <h1>Todo APP({ todosCount}) <small>pendientes { pendingCount }</small></h1>
            {/* <h1>Todo APP({ todos.length}) <small>pendientes { todos.filter(todo => !todo.done).length}</small> </h1> */}
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
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