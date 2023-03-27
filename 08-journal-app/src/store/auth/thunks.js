import { checkingCredentials } from '.';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingAuthentication());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingAuthentication());
    }
}