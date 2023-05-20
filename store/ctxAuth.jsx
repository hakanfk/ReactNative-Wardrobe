import { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext({
    token: '',
    email: '',
    isAuthenticated: false,
    authenticate: () => { },
    logout: () => { },
    setEmail: () => { }
})

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState()
    const [validEmail, setValidEmail] = useState('')

    function authenticate(token) {
        setAuthToken(token)
        AsyncStorage.setItem('token', token)
    }

    function setEmail(email) {
        console.log("setEmail");
        setValidEmail(email)
        AsyncStorage.setItem('email', email)
    }

    function logout() {
        setAuthToken(null)
        AsyncStorage.removeItem('token')
    }

    const value = {
        token: authToken,
        email: validEmail,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
        setEmail: setEmail
    }

    return <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider