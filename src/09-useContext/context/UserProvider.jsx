import { useState } from 'react';
import {UserContext} from './UserContext';

// const user = {
//     id: 123,
//     name: 'Lorena Mg',
//     email: 'micorreo@gmail.com'
// }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    return(
        //el hola mundo es la info que cualquier hijo de ese userProvidee puede tener 
        <UserContext.Provider value={{ user, setUser}}>
            { children }
        </UserContext.Provider>
    )
}