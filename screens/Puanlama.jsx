import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'


const Puanlama = ({ navigation }) => {

    const data = [
        {
            id: 1,
            cloth: {
                name: 'jeans',
                washing_freq: 2,
                wearing_freq: 3,
                fabric: 'polyester'
            }
        },
        {
            id: 2,
            cloth: {
                name: 'sweater',
                washing_freq: 1,
                wearing_freq: 1,
                fabric: 'leather'
            }
        },
        {
            id: 3,
            cloth: {
                name: 'tshirt',
                washing_freq: 3,
                wearing_freq: 0.5,
                fabric: 'linen'
            }
        },
        {
            id: 4,
            cloth: {
                name: 'shirt',
                washing_freq: 0.5,
                wearing_freq: 5,
                fabric: 'polyester'
            }
        }
    ]

    const cevaplar = []

    function puan(cevap) {
        let kiyafetPuani = 0
        //console.log(cevap.washing_freq);
        switch (cevap.washing_freq) {
            case 1:
                kiyafetPuani += 6
                break;
            case 2:
                kiyafetPuani += 3
                break;
            case 3:
                kiyafetPuani += 1
                break;
            case 0.5:
                kiyafetPuani += 10
                break;
            default:
                break;
        }
        switch (cevap.wearing_freq) {
            case 0.5:
                kiyafetPuani += 1
                break;
            case 1:
                kiyafetPuani += 3
                break;
            case 3:
                kiyafetPuani += 5
                break;
            case 5:
                kiyafetPuani += 10
                break;
            default:
                break;
        }
        console.log(kiyafetPuani);
        cevaplar.push({ name: cevap.name, point: kiyafetPuani })
        console.log(cevaplar);
    }

    const finalClothes = []
    const trashClothes = []

    function seeResult() {
        let finalPoint = 0
        cevaplar.map((item, index) => {
            finalPoint += item.point;
            if (item.point > 13) {
                finalClothes.push(item.name)
            } else {
                trashClothes.push(item.name)
            }
        })
        console.log("TotalPoint : " + finalPoint);
        console.log("Minimalism Percentage : " + finalPoint / cevaplar.length);
        console.log("FinalClothes : " + finalClothes);
    }

    function nextPageHandler() {
        console.log(finalClothes);
        navigation.navigate('SeeResults', {
            finalClothes: finalClothes,
            trashClothes: trashClothes
        })
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            {
                data.map((item, index) => {
                    return (
                        <View key={item.id} >
                            <Pressable onPress={() => puan(item.cloth)} >
                                <Text> {item.cloth.name} </Text>
                            </Pressable>

                        </View>
                    )
                })
            }
            <Pressable style={{
                marginTop: 30
            }} onPress={seeResult}  >
                <Text>Press Me to See Your Result</Text>
            </Pressable>
            <Pressable style={{
                marginTop: 30
            }} onPress={nextPageHandler}  >
                <Text>Next Page</Text>
            </Pressable>
        </View>
    )
}

export default Puanlama

const styles = StyleSheet.create({})