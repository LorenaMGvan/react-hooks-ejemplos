export const TodoItem = ({ todo }) => {
    return (
        <>
            <li className='list-group-item d-flex justify-content-between'>
                <span>{ todo.description }</span>
                <button className='btn btn-primary'>Borrar</button>
            </li>
        </>
    )
}