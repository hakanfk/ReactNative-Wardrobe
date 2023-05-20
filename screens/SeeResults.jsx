import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SeeResults = ({ navigation, route }) => {

    const finalClothes = route.params.finalClothes
    const trashClothes = route.params.trashClothes
    console.log("Final Clothes : " + finalClothes);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

            <Text> Final Clothes:
                {
                    finalClothes.map((item, index) => {
                        return (
                            <Text> {item} </Text>
                        )
                    })
                }
            </Text>

            <Text style={{ marginTop: 50 }} > Trash Clothes:
                {
                    trashClothes.map((item, index) => {
                        return (
                            <Text> {item} </Text>
                        )
                    })
                }
            </Text>

        </View>
    )
}

export default SeeResults

const styles = StyleSheet.create({})