console.log('Hola mundo');

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra X',
    done: false,
}];

// la accion indica como quiero que cambie el estado
const todoReducer = ( state = initialState , action = {}) => {
    if ( action.type === '[TODO] add todo') {
        return [ ...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

const newTodo = [{
    id: 2,
    todo: 'Recolectar la piedra B',
    done: false,
}];

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);