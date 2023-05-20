import { View, Text, StyleSheet, Image, TextInput, Alert } from 'react-native'
import React, { useContext } from 'react'
import MyIcon from '../components/MyIcon'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Button from '../components/Button'
import WellDoneScreen from '../components/WellDoneScreen'
import { createUser } from '../util/auth'
import LottieView from 'lottie-react-native';
import { AuthContext } from '../store/ctxAuth'
import { useDispatch, useSelector } from 'react-redux'
import { setTokenString } from '../store/token'

const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignUpSuc, setIsSignUpSuc] = useState(false)
    const [isAuthenticating, setisAuthenticating] = useState(false)

    const authCtx = useContext(AuthContext)

    const tokenStore = useSelector((state) => state.setToken.token)
    const dispatch = useDispatch()

    function emailHandler(enteredText) {
        setEmail(enteredText)
    }

    function passwordHandler(enteredText) {
        setPassword(enteredText)
    }


    async function continueHandler() {
        console.log('hi')
        if (email.length < 6 || password.length < 6) {
            Alert.alert('Check your informations and Try Again', 'Okay')
            setEmail('');
            setPassword('')
        } else {
            setisAuthenticating(true)

            try {
                const token = await createUser(email, password)
                dispatch(setTokenString({ token: token }))
                console.log(tokenStore);
                navigation.navigate('WellDoneScreen')

                setisAuthenticating(false)
            } catch (error) {
                Alert.alert('Authentication Failed', error)
                console.log(error);
            }


        }
    }

    function iconHandler() {
        navigation.goBack()
    }

    if (isAuthenticating) {
        return (
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center'
            }} >
                <LottieView autoPlay loop={true}
                    style={{ width: '100%', height: 150 }}
                    source={require('../images/lf30_editor_cdfgp1fy.json')} />
            </View>
        )
    }


    return (
        <View style={{ backgroundColor: '#fefefe', flex: 1 }} >
            <View style={styles.container} >
                <View>
                    <MyIcon icon='leftcircle' size={40} onPressProp={iconHandler} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <Image source={require('../images/apple-icon-180x180.png')} />
                    <Text style={{ fontSize: 24, fontWeight: '500', marginTop: 17 }} >Minirobe</Text>
                </View>
                <View style={[styles.form, { marginTop: 50 }]} >
                    {/* <Text style={{ margin: 7, fontWeight: 'bold', fontSize: 15 }} >User Name</Text>
                    <TextInput placeholder='username' style={styles.mail}
                        autoCorrect={false} autoCapitalize={false}
                        keyboardType='email-address' onChangeText={userNameHandler}
                        value={userName} /> */}
                    <Text style={{ margin: 7, fontWeight: 'bold', fontSize: 15 }} >Your e-mail address</Text>
                    <TextInput placeholder='test@gmail.com' style={styles.mail}
                        autoCorrect={false} autoCapitalize={false}
                        keyboardType='email-address' onChangeText={emailHandler}
                        value={email} />
                </View>
                <View style={styles.form} >
                    <Text style={{ margin: 7, fontWeight: 'bold', fontSize: 15 }} >Your Password</Text>
                    <TextInput placeholder='Min 6 characters' style={styles.mail}
                        onChangeText={passwordHandler} value={password}
                        secureTextEntry={true} />
                </View>

                <View style={styles.continue} >
                    <Button title='Sign Up' onPressProp={continueHandler} color='#a7fc84' />
                    {/* <Text style={{ textAlign: 'center', color: 'gray' }} > OR </Text> */}
                </View>
                {/* <View style={styles.google} >
                    <Button title='Sign Up with Google' onPressProp={continueHandler} color='#101b32' />
                </View> */}
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop: 40,
        margin: 20,
        backgroundColor: '#fefefe'
    },
    mail: {
        borderRadius: 12,
        backgroundColor: '#eff0f4',
        padding: 8
    },
    continue: {
        marginTop: 27,

    },
    google: {
        marginTop: 20
    },
    form: {
        marginTop: 20
    }
})