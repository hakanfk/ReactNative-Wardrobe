import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContentsSettings = ({ name }) => {
    return (
        <View style={{ width: '100%', marginTop: 15 }} >
            <View style={{
                backgroundColor: '#f6f6f6', width: '100%',
                height: 40, justifyContent: 'center', borderRadius: 20,

            }} >
                <Text style={{
                    marginLeft: 10,
                    fontSize: 16, fontWeight: '300'
                }} > {name} </Text>
            </View>
        </View>
    )
}

export default ContentsSettings

const styles = StyleSheet.create({})