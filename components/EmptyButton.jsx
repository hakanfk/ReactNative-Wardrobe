import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const EmptyButton = ({ title }) => {

    const navigation = useNavigation()

    function pressHandler() {
        navigation.navigate("SignUp")
    }

    return (
        <Pressable onPress={pressHandler} >
            <Text style={{ color: '#67b6d2', fontWeight: 'bold' }} > {title} </Text>
        </Pressable>
    )
}

export default EmptyButton