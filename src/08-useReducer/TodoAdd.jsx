import { useForm } from '../hooks/UseForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputCambios, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmitX  = ( event ) => {
        event.preventDefault();
        if( description.length <= 1) return;
        
        const todoNewX = {
            id: new Date().getTime(),
            done: false,
            description
        }

        onNewTodo( todoNewX );
        onResetForm();
    }

    return (
        <>
            <form  onSubmit={ onFormSubmitX }>
                <input type="text"
                    name='description'
                    placeholder='Que hay que hacer'
                    className='form-control'
                    value={description}
                    onChange={onInputCambios}
                />

                <button>
                    Agregar
                </button>

            </form>
        </>
    )
}