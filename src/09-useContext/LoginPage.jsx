import { useContext } from 'react';
import { UserContext } from './context/UserContext';


export const LoginPage = () => {
    
    const { user, setUser } = useContext( UserContext );
    console.log( user );
    
    return (
        <>
            <div>Logi </div>
            <pre aria-label='pre'> 
                { JSON.stringify(user, null, 3) }
            </pre>

            <button
                aria-label='button'
                onClick={ () => { setUser({ id: 123, name: 'Fulanita', email: 'micorreo@test.com'})  } }
                className='btn btn-primary '>
                Establecer usuario
            </button>
        </>
    )

}