import { UserContext } from './UserContext';

const user = {
    id: 123,
    nombre: 'Adrian',
    password: 'abcde',
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={ { hola: 'Mundo', user } }>
            { children }
        </UserContext.Provider>
    );
}
