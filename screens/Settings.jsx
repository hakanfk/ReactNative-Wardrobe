import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import SettingsNavigate from '../components/SettingsNavigate'
import ContentsSettings from '../components/ContentsSettings'
import { AuthContext } from '../store/ctxAuth'
import { getEmail } from '../util/auth'

const Settings = ({ navigation }) => {

    const authCtx = useContext(AuthContext)

    const [mail, setMail] = useState('')


    function favoriteHandler() {
        navigation.navigate('FavsScreen')
    }

    function overviewHandler() {
        navigation.navigate('PieChart')
    }

    function logoutHandler() {
        authCtx.logout()
    }

    useEffect(() => {
        async function getMail() {
            const res = await getEmail(authCtx.token)
            setMail(res)
        }
        getMail()
    }, [])

    return (
        <View style={styles.container} >
            <View style={styles.imageContainer} >
                <Image source={require('../images/eugene-golovesov-0fDM1pOJvJI-unsplash.jpg')}
                    style={{
                        width: 150, height: 150,
                        borderRadius: 150 / 2
                    }} resizeMode='contain'
                />

            </View>
            <View style={styles.textContainer} >
                {/* <Text style={{ fontWeight: '600', fontSize: 22 }} >
                    Abdullah Avci
                </Text> */}
                <Text style={{ fontWeight: '400', fontSize: 18, }} >
                    {mail}
                </Text>
            </View>
            <ContentsSettings name={'Contents'} />

            {/* <SettingsNavigate name='Favorites' icon={'heart'} onPressProp={favoriteHandler} /> */}
            <SettingsNavigate name='Overview' icon={'piechart'}
                onPressProp={overviewHandler}
            />

            <ContentsSettings name={'Preferences'} />
            <SettingsNavigate name='Logout' icon={'logout'}
                onPressProp={logoutHandler}
            />



        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 166
    },
    imageContainer: {

        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 150,
        borderWidth: 1,
        borderColor: 'gray',
        width: 150,
        height: 150
    },
    textContainer: {
        alignItems: 'center'
    }
})