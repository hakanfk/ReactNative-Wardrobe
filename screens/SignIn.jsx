import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import MyIcon from '../components/MyIcon'
import { useState } from 'react'
import Button from '../components/Button'
import { loginUser } from '../util/auth'
import Home from './Home'
import { AuthContext } from '../store/ctxAuth'


const SignIn = ({ navigation }) => {

    //const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [isSignInSuc, setIsSignInSuc] = useState(false)

    const authCtx = useContext(AuthContext)

    function emailHandler(enteredText) {
        setEmail(enteredText)
    }

    function passwordHandler(enteredText) {
        setPassword(enteredText)
    }

    function iconHandler() {
        navigation.goBack()
    }

    async function signInHandler() {
        //navigation.navigate('OverviewScreen')
        setIsAuthenticating(true)
        try {
            console.log('Islem baslatiliyor...');
            const token = await loginUser(email, password)
            authCtx.authenticate(token)
            console.log('--------------AuthToken--------------');
            console.log(token)
            setIsSignInSuc(true)
        } catch (error) {
            Alert.alert('Login Failed')
        }
        setIsAuthenticating(false)
    }

    if (isSignInSuc) {
        navigation.navigate('OverviewScreen')
    }

    if (isAuthenticating) {
        return <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
            <Text> Loading </Text>
        </View>
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#e3edf5' }} >
            <View style={styles.container} >
                <View>
                    <MyIcon icon='leftcircle' size={40} onPressProp={iconHandler} />
                </View>
                <View style={styles.welcomeContainer} >
                    <Text style={styles.welcomeText} > Welcome Back! </Text>
                    <Text> You've been missed! </Text>
                </View>
                <View>
                    <Text style={{ margin: 7, fontWeight: 'bold', fontSize: 15 }} >Your e-mail address</Text>
                    <TextInput placeholder='test@gmail.com' style={styles.mail}
                        autoCorrect={false} autoCapitalize={false}
                        keyboardType='email-address' onChangeText={emailHandler}
                        value={email} />
                    <Text style={{ margin: 7, fontWeight: 'bold', fontSize: 15 }} >Password</Text>
                    <TextInput placeholder='Password' style={styles.mail}
                        autoCorrect={false} autoCapitalize={false}
                        keyboardType='email-address' onChangeText={passwordHandler}
                        value={password} />
                </View>
                <Pressable style={styles.pressable} >
                    <Button title='Sign In' onPressProp={signInHandler} color='#a7fc84' />
                </Pressable>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({

    welcomeText: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    welcomeContainer: {
        marginTop: 30,
        alignItems: 'center',
        marginBottom: 31
    },
    container: {
        //flex: 1,
        marginTop: 50,
        margin: 20,
        backgroundColor: '#e3edf5'
    },
    mail: {
        borderRadius: 12,
        backgroundColor: '#eff0f4',
        padding: 8
    },
    pressable: {
        marginTop: 30
    }

})
