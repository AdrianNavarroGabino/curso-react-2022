import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//     id: 123,
//     nombre: 'Adrian',
//     password: 'abcde',
// }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('');

    return (
        // <UserContext.Provider value={ { hola: 'Mundo', user } }>
        <UserContext.Provider value={ { user, setUser } }>
            { children }
        </UserContext.Provider>
    );
}
