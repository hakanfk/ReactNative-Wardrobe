import axios from 'axios'

const ApiKey = 'AIzaSyAZPMyPXmcazSbYZ77biXQ6d2Wv0Pwt1jU'

export async function createUser(email, password) {
    const res = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + ApiKey,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    )

    return res.data.idToken

}

export async function loginUser(email, password) {

    const res = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + ApiKey,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    )

    return res.data.idToken



}