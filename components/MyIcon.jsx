import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

const MyIcon = ({ icon, size, color, onPressProp }) => {
    return (
        <Pressable onPress={onPressProp}

            style={({ pressed }) => pressed && styles.pressed}    >
            <View>
                <AntDesign name={icon} size={size} color={color} />
            </View>
        </Pressable>
    )
}

export default MyIcon

const styles = StyleSheet.create({
    container: {
        margin: 12,
        //backgroundColor: 'purple'
    },
    pressed: {
        opacity: 0.75
    }
})