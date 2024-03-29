export const TodoItem = ({ todo, onDeleteTodo , onToggleTodo}) => {
    return (
        <>
            <li className='list-group-item d-flex justify-content-between'>
                <span aria-label="span"
                    className={`align-self-center${ (todo.done) ? 'text-decoration-line-through': ''}`}
                    onClick={ () => onToggleTodo( todo.id )}
                
                >{ todo.description }</span>
                <button 
                    aria-label="button"
                    onClick={ () => onDeleteTodo(todo.id) }
                    className='btn btn-primary'>Borrar</button>
            </li>
        </>
    )
}