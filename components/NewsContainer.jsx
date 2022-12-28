import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NewsContainer = ({ item }) => {

    const navigation = useNavigation()

    function clickHandle() {
        navigation.navigate('ShowNews', {
            news: item
        })
    }

    return (

        <Pressable style={styles.container} onPress={clickHandle} >

            <View style={{ flexDirection: 'row' }} >

                <View style={styles.newsImage} >
                    <Image source={{ uri: item.urlToImage }}
                        resizeMode='cover' style={{
                            width: '95%',
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20
                        }} />
                </View>
                <View style={styles.newsText} >
                    <Text style={styles.newsTitle} > {item.title} </Text>
                    <Text style={{ position: 'absolute', bottom: 25 }} > {item.author} </Text>
                </View>
            </View>




        </Pressable >
    )
}

export default NewsContainer

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 160,
        elevation: 2,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 23

        //flexDirection: 'row'
    },
    newsText: {
        flex: 5,
        borderRadius: 20,
        marginLeft: 4
    },
    newsImage: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 7
    },
    newsTitle: {
        fontWeight: '500',
        fontSize: 19,
        position: 'absolute',
        top: 10

    }
})