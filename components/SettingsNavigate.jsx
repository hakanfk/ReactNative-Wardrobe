import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const SettingsNavigate = ({ name, icon, onPressProp }) => {
    return (
        <View style={{ width: '100%', marginVertical: 0 }} >
            <Pressable style={{
                width: '100%', height: 40, flexDirection: 'row',
                margin: 8, alignItems: 'center', justifyContent: 'space-between',

            }} onPress={onPressProp} >

                <View style={{ flexDirection: 'row' }} >
                    <AntDesign name={icon} size={24} style={{
                        marginHorizontal: 7
                    }} />
                    <Text style={{ fontSize: 16 }} > {name} </Text>
                </View>
                <View>
                    <AntDesign name='right' size={24} style={{
                        marginRight: 25
                    }} />
                </View>

            </Pressable>
        </View>
    )
}

export default SettingsNavigate

const styles = StyleSheet.create({})