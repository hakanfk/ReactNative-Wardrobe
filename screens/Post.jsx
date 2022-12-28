import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import LottieView from 'lottie-react-native';
import React, { useState } from 'react'
import ImagePicker from '../components/camera/ImagePicker'
import MyIcon from '../components/MyIcon'
import Button from '../components/Button'

const Post = ({ navigation }) => {

    const [clothName, setClothName] = useState('')
    const [selectedImage, setSelectedImage] = useState()

    function clothNameHandler(enteredText) {
        setClothName(enteredText)
    }

    function goBackHandler() {
        navigation.goBack()
    }

    function takeImageHandler(imageUri) {
        setSelectedImage(imageUri)
    }

    function addHandler() {
        //console.log(selectedImage);
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                <LottieView autoPlay loop={false}
                    style={{ width: 100, height: 100 }}
                    source={require('../images/1798-check-animation.json')} />
            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1 }} >

            <View style={{ margin: 30, marginBottom: -25 }} >
                <MyIcon icon='leftcircle' size={40} onPressProp={goBackHandler} />
            </View>


            <View style={{ margin: 30, marginTop: 44 }} >
                <Text style={{
                    fontSize: 27,
                    fontWeight: 'bold'
                }} >Add to Wardrobe</Text>
            </View>
            <View style={{
                marginHorizontal: 30, backgroundColor: '#D0D0DD',
                borderRadius: 16, height: 40
            }} >
                <TextInput placeholder='Cloth Name' value={clothName}
                    onChangeText={clothNameHandler} style={{
                        justifyContent: 'center', paddingHorizontal: 10,
                        paddingVertical: 5, fontSize: 18
                    }} />
            </View>

            <ImagePicker onTakenImage={takeImageHandler} />

            <View >
                <Button title='Add to Wardrobe' color='#309010' onPressProp={addHandler}
                />
            </View>

        </ScrollView>
    )
}

export default Post

const styles = StyleSheet.create({})