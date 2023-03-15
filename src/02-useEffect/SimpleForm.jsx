import React from 'react';
import { useState, useEffect } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'fulanita',
        useremail: 'micorreo@gmail.com'
    });

    const { username, useremail} = formState;

    const onInputCambios = ({ target }) => {
        const { name, value } = target;
        // proiedades computadas de los objetos entre llaves cuadradas
        setFormState({... formState, [ name ]:value})
    }


    useEffect(()=> {
        console.log('El pp Use effect');
    }, [formState]);

    useEffect(()=> {
        console.log('El email cambio');
    }, [useremail]);

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
            {
                (username == "fulanita") && <Message/> 
            }
        </>
    )
}