import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import MyIcon from '../components/MyIcon'
import { useDispatch, useSelector } from 'react-redux'
import addToFav, { removeFromFav, addToFavorite } from '../store/addToFav'


const clothesArray = [
    {
        id: 1,
        category: 'Jacket',
        image: require('../images/tanuj-sabharwal-m1rg79I9gdU-unsplash.jpg')
    },
    {
        id: 2,
        category: 'Jeans',
        image: require('../images/yaniv-cohen-DxsavJrtuZg-unsplash.jpg')
    },
    {
        id: 3,
        category: 'Jacket',
        image: require('../images/tanuj-sabharwal-m1rg79I9gdU-unsplash.jpg')
    },
    {
        id: 4,
        category: 'Jacket',
        image: require('../images/tanuj-sabharwal-m1rg79I9gdU-unsplash.jpg')
    },
    {
        id: 5,
        category: 'Shirt',
        image: require('../images/eugene-golovesov-0fDM1pOJvJI-unsplash.jpg')
    },
]

const ClothByCategory = ({ route, navigation }) => {

    const favClothIds = useSelector((state) => state.favoriteClothes.ids)
    const dispatch = useDispatch()

    const category = route?.params.clothCategory

    const clothes = clothesArray.filter((item) => category === item.category)

    const isClothFavorite = favClothIds.includes(clothes.id)

    function imageRenderHandler(itemData) {
        return (
            <View style={{ flex: 1, margin: 10 }} >
                <Image source={itemData.item.image} style={{
                    height: 200, width: 150, borderRadius: 25,
                }} />
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 80,
                    height: 45,
                    width: 70,
                    backgroundColor: 'white',
                    opacity: 0.7,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    <MyIcon icon={'hearto'} size={40} onPressProp={() => {
                        if (!isClothFavorite) {
                            dispatch(addToFavorite({ id: itemData.item.id }))

                            console.log(isClothFavorite);
                            console.log('Added');
                        } else {
                            dispatch(removeFromFav({ id: itemData.item.id }))

                            console.log('Removed');
                        }
                    }}

                    />
                </View>
            </View>
        )
    }

    function navigateBack() {
        navigation.navigate('MyGardrobe')
    }

    return (
        <View style={{
            margin: 20, marginTop: 30
        }} >
            <MyIcon icon={'leftcircle'} size={40} onPressProp={navigateBack} />

            <Text style={styles.titleText} > Your {category}'s </Text>

            <View style={styles.clothStyle} >

                <FlatList data={clothes} keyExtractor={(item) => item.id}
                    renderItem={imageRenderHandler} numColumns={2} />

            </View>

        </View>
    )
}

export default ClothByCategory

const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20
    },
    clothStyle: {
        margin: 10,
        marginTop: 20,
        //flexDirection: 'row',

    }
})