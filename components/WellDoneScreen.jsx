import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyIcon from './MyIcon'
import { useNavigation } from '@react-navigation/native'
import Button from './Button'

const WellDoneScreen = () => {

    const navigation = useNavigation()

    function getStartedHandler() {
        navigation.navigate("HowMany")
    }

    return (
        <View style={styles.container} >
            <MyIcon icon="checkcircle" size={48} color="green" />
            <Text style={styles.text} > You're all set up! </Text>
            <Pressable style={styles.pressable} >
                <Button title="Let's Get Started" color="#206126" onPressProp={getStartedHandler} />
            </Pressable>
        </View>
    )
}

export default WellDoneScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: 15,
        fontSize: 30,
        fontWeight: '600'
    },
    pressable: {
        marginTop: 17
    }
})