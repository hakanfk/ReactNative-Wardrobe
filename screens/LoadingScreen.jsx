import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const LoadingScreen = ({ navigation, route }) => {

    const { clothCategory } = route.params

    console.log(clothCategory);
    useEffect(() => {

        setTimeout(() => {



        }, 1000)

    }, [])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Text>LoadingScreen</Text>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})