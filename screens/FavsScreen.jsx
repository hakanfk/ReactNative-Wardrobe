import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

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

const FavsScreen = () => {

    const favClothesRedux = useSelector((state) => state.favoriteClothes.ids)
    console.log(favClothesRedux);
    const favClothes = clothesArray.filter((cloth) =>
        favClothesRedux.includes(cloth.id))

    function renderHandler(itemData) {
        return (
            <View>
                <Image source={itemData.item.image} style={{
                    width: 200, height: 200
                }} />
            </View>
        )
    }

    return (

        <View>
            <Text>Hakan</Text>
            <FlatList data={favClothes} keyExtractor={(item) => item.id}
                numColumns={2} renderItem={renderHandler} />
        </View>




    )
}

export default FavsScreen

const styles = StyleSheet.create({})