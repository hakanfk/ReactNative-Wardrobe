import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { launchCameraAsync } from 'expo-image-picker'
import Button from '../Button'

const ImagePicker = ({ onTakeImage }) => {

    const [pickedImage, setPickedImage] = useState()

    async function takePhotoHandler() {

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        })

        setPickedImage(image.uri)
        onTakeImage(image.uri)
    }

    let imagePreview = <Text> No image taken yet
        Take photo of your cloth! </Text>

    if (pickedImage) {
        imagePreview = <Image source={{ uri: pickedImage }} style={{
            width: '90%',
            height: 200
        }} />
    }

    return (
        <View>
            <View style={{
                marginVertical: 20, alignItems: 'center'
            }} >
                {imagePreview}
            </View>
            <Button title='Take Photo' color={'#204060'} onPressProp={takePhotoHandler} />
        </View>
    )
}

export default ImagePicker

const styles = StyleSheet.create({})