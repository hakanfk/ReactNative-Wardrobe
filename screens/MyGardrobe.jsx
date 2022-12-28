import { View, Text, StyleSheet, ScrollView, Pressable, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Clothes from '../components/Clothes'
import MyIcon from '../components/MyIcon'

const data = [{
    id: 1,
    category: 'Coat',
    uri: require("../clothImages/coat.jpg")
},
{
    id: 2,
    category: 'Dress',
    uri: require('../clothImages/dress.jpg')
},
{
    id: 3,
    category: 'Jacket',
    uri: require('../clothImages/jacket.jpg')
},
{
    id: 4,
    category: 'Jeans',
    uri: require('../clothImages/jeans.jpg')
},
{
    id: 5,
    category: 'Shirt',
    uri: require('../clothImages/shirt.jpg')
},
{
    id: 6,
    category: 'Shorts',
    uri: require('../clothImages/shorts.jpg')
},
{
    id: 7,
    category: 'Skirt',
    uri: require('../clothImages/skirt.jpg')
},
{
    id: 8,
    category: 'Sweater',
    uri: require('../clothImages/sweater.jpg')
}]

const Home = ({ navigation, route }) => {

    const [selectedCategory, setselectedCategory] = useState('')
    const [selectedClothes, setSelectedClothes] = useState('')
    const [pressed, setPressed] = useState(false)

    let socket;

    useEffect(() => {
        const clothEffect = selectedClothes
        console.log("Inside a useEffect");
        console.log(selectedClothes);
        setSelectedClothes(clothEffect)
        socket = selectedClothes
        navigation.navigate('ClothByCategory', {
            clothCategory: socket
        })
    }, [selectedClothes])

    function categoryHandler(category) {

        setselectedCategory(category)
        console.log(selectedCategory);
    }


    function renderHandler(itemData) {

        return (
            <Pressable onPress={() => {
                const clothName = itemData.item.category
                setSelectedClothes(clothName)
                setTimeout(() => (console.log('bekle')), 500)
                console.log('In a function');
                console.log(selectedClothes);


            }} >
                <View style={{ marginVertical: 14, marginHorizontal: 20 }} >
                    <Image source={itemData.item.uri}
                        style={{ width: 140, height: 140, borderRadius: 20 }}
                    />
                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        height: 25,
                        width: 70,
                        backgroundColor: 'white',
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} >
                        <Text> {itemData.item.category} </Text>
                    </View>
                </View>
            </Pressable>
        )
    }

    return (


        //<ScrollView>
        <View style={styles.container} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <Text style={styles.userName}>Hi Hakan, </Text>
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <MyIcon icon={'heart'} size={35} onPressProp={() =>
                        navigation.navigate('FavsScreen')} />
                    <Text style={{ fontWeight: 'bold' }} >Your Favs</Text>
                </View>

            </View>
            <View style={{ marginTop: 15 }} >
                <Text style={styles.userName}>It's Your
                    <Text style={{ fontSize: 29, fontWeight: 'bold' }} > Wardrobe</Text> </Text>
            </View>

            <View  >
                <ScrollView horizontal style={styles.scrollView}
                    showsHorizontalScrollIndicator={false} >
                    {data.map((item, index) => {
                        return (
                            <Pressable key={item.id}
                                style={{
                                    backgroundColor: (selectedCategory == item.id) ? 'black' : null,
                                    borderRadius: 14,
                                    alignItems: 'stretch',
                                    borderColor: 'gray',
                                    padding: 7,
                                    marginHorizontal: 9,
                                }} onPress={() => categoryHandler(item.category)} >
                                <Text style={{
                                    color: (selectedCategory == item.id) ? 'white' : null,
                                    fontWeight: '300',
                                    fontSize: 15
                                }} >{item.category} </Text>
                            </Pressable>
                        )
                    })}
                </ScrollView>
            </View>

            <ScrollView style={{ alignContent: 'center', marginBottom: 96, marginTop: 10 }}
                showsVerticalScrollIndicator={false} >

                <FlatList data={data} numColumns={2} keyExtractor={(item) => (item.id)}
                    renderItem={renderHandler} showsVerticalScrollIndicator={false} />
            </ScrollView>




        </View>
        //</ScrollView>



    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 20,
        height: '100%',

        flexGrow: 1
    },
    userName: {
        fontSize: 23,
        fontWeight: '500'
    },
    scrollView: {
        marginTop: 15
    },

    gridItem: {
        marginTop: 30,
        flex: 1,
        height: 150,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 15,
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
    },

})
