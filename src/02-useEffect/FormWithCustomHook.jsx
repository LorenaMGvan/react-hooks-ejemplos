import { React, useState, useEffect } from 'react';
import { useForm } from '../hooks/UseForm';
import { Message } from './Message';



export const FormWithCustomHook = () => {
    const { formState, onInputCambios, username, useremail, onResetForm } = useForm({
        useremail: '',
        username: '',
    });

    // const [formState, setFormState] = useState({
    //     username: 'fulanita',
    //     useremail: 'micorreo@gmail.com'
    // });

    // const { username, useremail, } = formState;

    // const onInputCambios = ({ target }) => {
    //     const { name, value } = target;
    //     // proiedades computadas de los objetos entre llaves cuadradas
    //     setFormState({... formState, [ name ]:value})
    // }


    // useEffect(()=> {
    //     console.log('El pp Use effect');
    // }, [formState]);

    // useEffect(()=> {
    //     console.log('El email cambio');
    // }, [useremail]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <input
                type="text"
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onInputCambios }
            />
            <br />
            <input
                type="email"
                placeholder='micorreo@gmail.com'
                name='useremail'
                value={ useremail }
                onChange= { onInputCambios }
            />

            <button
                onClick={ onResetForm } 
                className='btn btn-primary mt-2'>Borrar</button>
            {
                (username == "fulanita") && <Message/> 
            }
        </>
    )
}