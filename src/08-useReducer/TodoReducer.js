export const todoReducer = ( initialState, action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
            // return initialState;
            //throw new Error('La acción ABC no esta implementada')
        default: 
            break;

    }


}