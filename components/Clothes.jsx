import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const Clothes = ({ title, uri }) => {

    return (
        <View style={styles.gridItem} >
            <Pressable style={[styles.pressableItem]}
                android_ripple={{ color: "#ccc" }}
            >
                <View style={[styles.innerContainer,]} >
                    <Image source={{ uri: uri }}
                        style={{ width: 300, height: 300 }} resizeMode='contain' />
                    <Text style={styles.title} > {title} </Text>
                </View>
            </Pressable>
        </View>
    )

}

export default Clothes

const styles = StyleSheet.create({
    gridItem: {
        marginTop: 30,
        flex: 1,
        height: 150,
        borderRadius: 3,
        borderColor: "red",
        margin: 15,
        elevation: 3,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    pressableItem: {
        flex: 1
    },
    innerContainer: {
        padding: 16,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
})