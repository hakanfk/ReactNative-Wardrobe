import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const NextButton = ({ onPressProp, color, title }) => {
    return (
        <Pressable onPress={onPressProp} style={({ pressed }) => pressed && styles.pressed} >
            <View style={[styles.container, { backgroundColor: color, borderRadius: 16 }]} >
                <Text style={styles.text} > {title} </Text>
            </View>
        </Pressable>
    )
}

export default NextButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    pressable: {
        //margin: 20
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 33,
        marginVertical: 11,
        marginBottom: 25,
        borderRadius: 16,
        padding: 16
    },
    text: {
        color: "white"
    }


})