import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByValue, setByValue } from '../store/clothNumberCounter'

const HowMany = ({ navigation }) => {

    const clothNumber = useSelector((state) => state.clothNumber.value)
    const dispatch = useDispatch()


    const [enteredNumber, setenteredNumber] = useState('')

    function startHandler() {
        dispatch(setByValue(Number(enteredNumber)))
        navigation.navigate('Questions')
    }

    function numberHandler(enteredNumber) {
        setenteredNumber(enteredNumber)
    }

    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 18 }} >Kaç Tane Kıyafetin Var?</Text>
            <TextInput style={styles.textInput} maxLength={3} keyboardType='number-pad'
                onChangeText={numberHandler} value={enteredNumber} />
            <Pressable style={{ width: 220, marginTop: 30 }} >
                <Button title='Start' color='#123456' onPressProp={startHandler} />
            </Pressable>
        </View>
    )
}

export default HowMany

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textInput: {
        borderBottomWidth: 2,
        borderColor: '#002040',
        width: 60,
        height: 50,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 32
    }
})