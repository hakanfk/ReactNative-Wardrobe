import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../store/ctxAuth'
import { useDispatch, useSelector } from 'react-redux'
import { getGardrobe } from '../util/auth'
import { AntDesign } from '@expo/vector-icons';


const goodClothes = []
const badClothes = []

const ASplashScreen = () => {

    const userClothArray = useSelector((state) => state.addCloth.clothes)
    const tokenStore = useSelector((state) => state.setToken.token)

    const [isLoading, setIsLoading] = useState(false)


    console.log(" SplashScreen ");
    console.log(userClothArray);


    useEffect(() => {
        console.log(tokenStore);
        async function getClothes() {
            setIsLoading(true)
            const res = await getGardrobe(tokenStore.token)
            console.log(res);

            res.map((item, index) => {
                if (item.pointsLost < 0.5) {
                    goodClothes.push(item)
                } else {
                    badClothes.push(item)
                }
                console.log(goodClothes);
            })
            setIsLoading(false)
        }
        getClothes()


    }, [goodClothes, badClothes])

    const authCtx = useContext(AuthContext)

    function pressHandler() {
        authCtx.authenticate(tokenStore.token)
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <ActivityIndicator size="large" color="#a7fc84" />
            </View>
        )
    }

    return (
        <View style={{ flex: 1, margin: 29 }} >
            <View style={{ margin: 20, marginTop: 40 }} >
                <Text style={{ fontWeight: '600', fontSize: 22 }} >Your Minimalist Clothes</Text>
                {
                    goodClothes.map((item, index) => {
                        console.log("********************");
                        console.log(badClothes);
                        console.log("lalallal", goodClothes);
                        return (
                            <View style={styles.questionContainer} >

                                <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }} >
                                    <Text style={styles.kiyafet}>Kıyafet# {item.type} </Text>
                                    <Text style={{ marginLeft: 20 }}  > Kayıp Puan:  {item.pointsLost} </Text>
                                </View>
                            </View>)

                    })
                }
                <Text style={{
                    fontWeight: '600', fontSize: 22,
                    marginTop: 27
                }} >Your Not Minimalist Clothes </Text>
                {
                    badClothes.map((item, index) => {
                        console.log("********************");

                        return (
                            <View style={styles.questionContainer} >


                                <View style={{
                                    alignItems: 'center', justifyContent: 'space-between',
                                    flexDirection: 'row',
                                }} >
                                    <Text style={styles.kiyafet}>Kıyafet# {item.type} </Text>
                                    <Text style={{ marginLeft: 20 }}  > Kayıp Puan:  {item.pointsLost} </Text>
                                </View>

                            </View>)

                    })
                }
                <Text style={{ marginTop: 7 }} > Bu Kıyafetleri Bağışlamanızı Öneriyoruz </Text>

                <View style={{
                    borderRadius: 25, backgroundColor: '#fff', marginTop: 15,

                }} >
                    <Pressable style={{ margin: 10, flexDirection: 'row' }} onPress={pressHandler}>
                        <Text style={{ color: '#67b6d2', fontWeight: 'bold', fontSize: 18 }} >Dolabınıza Genel Bakış
                        </Text>
                        <AntDesign name='right' size={24} color='#67b6d2' style={{
                            marginLeft: 30
                        }} />
                    </Pressable>
                </View>
            </View>



        </View>
    )
}

export default ASplashScreen

const styles = StyleSheet.create({
    questionContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: 0,
        marginVertical: 10,
        padding: 20,
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center"
    },
})