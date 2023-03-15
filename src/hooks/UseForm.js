import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [ formState, setFormState ] = useState( initialForm );

    const { username, useremail} = formState;

    const onInputCambios = ({ target }) => {
        const { name, value } = target;
        // proiedades computadas de los objetos entre llaves cuadradas
        setFormState({... formState, [ name ]:value})
    }

    const onResetForm = () => {
        setFormState ( initialForm );
    }

    return {
        ... formState,
        formState,
        onInputCambios,
        onResetForm
    }
}