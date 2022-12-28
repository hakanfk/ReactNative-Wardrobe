import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux'


const ClothName = ({ navigation }) => {

    const clothes = []

    const clothNumber = useSelector((state) => state.clothNumber.value)
    //const [clothNumber, setClothNumber] = useState(0)

    const [text, settext] = useState('')

    function textHandler(enteredText) {
        settext(enteredText)
    }

    function continueHandler() {
        clothes.push(text)
        console.log(clothes[0]);
        navigation.navigate("Questions")
    }


    return (
        <View style={styles.container} >
            <Text style={{ marginBottom: 10, fontSize: 18 }} > What's Your {clothNumber}. Cloth </Text>
            <TextInput style={styles.textInput} value={text}
                onChangeText={textHandler} />
            <Pressable style={{ marginTop: 20 }} >
                <Button title='continue' color='green' onPressProp={continueHandler} />
            </Pressable>
        </View>
    )
}

export default ClothName

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b6d2d0'
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        width: 150,
        height: 40,
        textAlign: 'center',
        fontSize: 32,
        marginTop: 20
    }
})