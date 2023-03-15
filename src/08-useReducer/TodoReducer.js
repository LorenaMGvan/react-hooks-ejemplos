export const todoReducer = ( initialState, action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
            // return initialState;
            //throw new Error('La acción ABC no esta implementada')
        case '[TODO] Remove Todo':
            return

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });

        default: 
            return initialState.filter( todo => todo.id !== action.payload );

    }


}