import { View, Text, StyleSheet, ScrollView, Pressable, FlatList, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Clothes from '../components/Clothes'
import MyIcon from '../components/MyIcon'
import { getEmail, getGardrobe } from '../util/auth'
import { AuthContext } from '../store/ctxAuth'

const data = [{
    id: 1,
    category: 'HIRKA',
    uri: require("../clothImages/coat.jpg")
},
{
    id: 2,
    category: 'ELBISE',
    uri: require('../clothImages/dress.jpg')
},
{
    id: 3,
    category: 'CEKET',
    uri: require('../clothImages/jacket.jpg')
},
{
    id: 4,
    category: 'PANTOLON',
    uri: require('../clothImages/jeans.jpg')
},
{
    id: 5,
    category: 'GOMLEK',
    uri: require('../clothImages/shirt.jpg')
},
{
    id: 6,
    category: 'SORT',
    uri: require('../clothImages/shorts.jpg')
},
{
    id: 7,
    category: 'ETEK',
    uri: require('../clothImages/skirt.jpg')
},
{
    id: 8,
    category: 'KAZAK',
    uri: require('../clothImages/sweater.jpg')
}]

let enumlar = [
    {
        cevap: 'Hırka',
        enum: "HIRKA"
    },
    {
        cevap: 'Elbise',
        enum: "ELBISE"
    },
    {
        cevap: 'Ceket',
        enum: "CEKET"
    },
    {
        cevap: 'Pantolon',
        enum: "PANTOLON"
    },
    {
        cevap: 'Gömlek',
        enum: "GOMLEK"
    },
    {
        cevap: 'Şort',
        enum: "SORT"
    },
    {
        cevap: 'Etek',
        enum: "ETEK"
    },
    {
        cevap: 'Kazak',
        enum: "KAZAK"
    },
    {
        cevap: 'Tişört',
        enum: "TISORT"
    },
]
const Home = ({ navigation, route }) => {
    const [clothes, setClothes] = useState([])
    const authCtx = useContext(AuthContext)
    const [mail, setMail] = useState('')

    useEffect(() => {
        async function getClothes() {
            const clothRes = await getGardrobe(authCtx.token)

            const mail = await getEmail(authCtx.token)
            setMail(mail)

            console.log(clothRes)
            for (let i = 0; i < clothRes.length; i++) {
                clothRes[i]['q'] = i + 1;
                clothRes[i].imgSrc = data.find(itm => itm.category === clothRes[i].type).uri;
                clothRes[i].type = enumlar.find(itm => itm.enum === clothRes[i].type).cevap;

            }
            setClothes(clothRes)
            console.log(clothRes)
        }
        getClothes();
    }, [])
    return (
        <View style={styles.container} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 }} >
                <Text style={styles.userName}>Hi {mail}  </Text>
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <MyIcon icon={'heart'} size={35} onPressProp={() =>
                        navigation.navigate('FavsScreen')} />
                    <Text style={{ fontWeight: 'bold' }} >Your Favs</Text>
                </View>

            </View>
            <View style={{ marginTop: 15 }} >
                <Text style={{ fontSize: 29, fontWeight: 'bold' }} >Kıyafetlerim</Text>
            </View>



            <ScrollView style={{ alignContent: 'center', marginBottom: 96, marginTop: 10 }}
                showsVerticalScrollIndicator={false} >
                {clothes.map(item => {
                    return (
                        <View style={styles.questionContainer} >
                            <Image source={item.imgSrc} style={{
                                width: 80
                                , height: 80,
                                borderRadius: 16

                            }} />
                            <Text style={styles.kiyafet}>Kıyafet#{item.q} - {item.type}</Text>
                        </View>);
                })}

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
    questionContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 20,
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    kiyafet: {
        fontSize: 20,
        marginLeft: 15
    }

})
