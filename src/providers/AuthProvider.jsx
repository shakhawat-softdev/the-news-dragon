import React from 'react';
import { createContext } from 'react';
import { getAuth} from "firebase/auth";
import app from '../firebase/firebase.config';



export const authContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({children}) => {
const user = null

    const authInfo = {user}
    return (
        <authContext.Provider value={authInfo} >
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;