import { StyleSheet, Text, View, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MyIcon from '../components/MyIcon'
import Button from '../components/Button'
import { SelectList } from 'react-native-dropdown-select-list'
import { AuthContext } from '../store/ctxAuth'
import { storeItems } from '../util/auth'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from '../store/clothNumberCounter'
import { addToClothes } from '../store/allClothArray'
import NextButton from '../components/NextButton'
import LottieView from 'lottie-react-native';





const kumasArray = [
    'Yün', 'Ipek', 'Polyester', 'Elasten', 'Naylon', 'Pamuk'
]

const kiyafetArray = [
    'Hirka', 'Elbise', 'Ceket', 'Pantolon', 'Gömlek', 'Şort', 'Etek', 'Kazak', 'Tişört'
]


const questionArray = [
    {
        id: 1,
        soru: 'Kıyafet Türü',
        key: 'type',
        cevaplar: [
            {
                cevap: 'Hirka',
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
    },

    {
        id: 2,
        soru: 'Giyinme Sikligi',
        key: 'wearingFrequency',
        cevaplar: [
            {
                cevap: 'Haftada 2-3',
                enum: "WEEK23",
                puan: 10
            },
            {
                cevap: 'Haftada 1',
                enum: "WEEK1",
                puan: 6
            },
            {
                cevap: 'Ayda 1',
                enum: "MONTH",
                puan: 3
            },
        ]
    },
    {
        id: 3,
        soru: 'Yikama Sikligi',
        key: 'washingFrequency',
        cevaplar: [
            {
                cevap: 'Haftada 2-3',
                enum: "WEEK23",
                puan: 3
            },
            {
                cevap: 'Haftada 1',
                enum: "WEEK1",
                puan: 6
            },
            {
                cevap: 'Ayda 1',
                enum: "MONTH",
                puan: 10
            },
        ]
    },
    {
        id: 4,
        soru: 'Kıyafet kumaş türü',
        key: 'material',
        //'Yun', 'Ipek', 'Polyester', 'Elasten', 'Naylon', 'Pamuk'
        cevaplar: [
            {
                cevap: 'Yün',
                enum: "YUN",
            },
            {
                cevap: 'Ipek',
                enum: "IPEK",
            },
            {
                cevap: 'Polyester',
                enum: "POLYESTER",
            },
            {
                cevap: 'Elasten',
                enum: "ELASTEN",
            },
            {
                cevap: 'Naylon',
                enum: "NAYLON",
            },
            {
                cevap: 'Pamuk',
                enum: "PAMUK",
            },
        ]
    }
]

const requestBody = []

const EfeQuestion = ({ navigation, route }) => {

    const authCtx = useContext(AuthContext)
    const [selected, setSelected] = useState('');
    const [type, setType] = useState(null);
    const [washingFrequency, setWashingFrequency] = useState(null);
    const [wearingFrequency, setWearingFrequency] = useState(null);
    const [material, setMaterial] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const [isFinished, setIsFinished] = useState(false)

    const [clothNumberIndex, setClothNumberIndex] = useState(1)

    const tokenStore = useSelector((state) => state.setToken.token)
    const clothNumber = useSelector((state) => state.clothNumber.value)

    const userClothArray = useSelector((state) => state.addCloth.clothes)


    const fullClothNumber = clothNumber
    const dispatch = useDispatch()


    function backHandler() {
        navigation.goBack()
    }

    useEffect(() => {
        console.log(userClothArray);
    }, [userClothArray])

    async function nextHandle() {
        // Validate if object has all the keys
        console.log(type, wearingFrequency, washingFrequency, material);
        if (!(type && wearingFrequency && washingFrequency && material)) {
            console.log("can't proceed")
            return;
        }
        console.log("managed to proceed")

        // add it to array
        dispatch(addToClothes({ type, wearingFrequency, washingFrequency, material }))
        requestBody.push({ type, wearingFrequency, washingFrequency, material });
        console.log(requestBody);

        // eğer daha kıyafet varsa 
        if (clothNumber >= 1) {
            if (clothNumberIndex === clothNumber) {
                setIsFinished(true)

            } else {
                setClothNumberIndex(clothNumberIndex + 1)
                setType(null)
                setWashingFrequency(null)
                setWearingFrequency(null)
                setMaterial(null)
            }
            console.log(clothNumberIndex);
        } else {

        }
        // - go to next cloth
        // eğer yoksa
        // - api request at, bitince dashboard


        // type wearing washing hepsini null yap



    }

    const answerToEnum = (obj) => {
        if (obj.key === 'washingFrequency' || obj.key === 'wearingFrequency') {
            switch (obj.val.cevap) {
                case 'Haftada 2-3':
                    obj.val.enum = 'WEEK23'
                    break;
                case 'Haftada 1':
                    obj.val.enum = 'WEEK1'
                    break;
                case 'Ayda 1':
                    obj.val.enum = 'MONTH'
                    break;
            }
        }
        else if (obj.key === 'type') {
            switch (obj.val.cevap) {
                case 'Hirka':
                    obj.val.enum = 'HIRKA'
                    break;
                case 'Elbise':
                    obj.val.enum = 'ELBISE'
                    break;
                case 'Ceket':
                    obj.val.enum = 'CEKET'
                    break;
                case 'Pantolon':
                    obj.val.enum = 'PANTOLON'
                    break;
                case 'Gömlek':
                    obj.val.enum = 'GOMLEK'
                    break;
                case 'Şort':
                    obj.val.enum = 'SORT'
                    break;
                case 'Etek':
                    obj.val.enum = 'ETEK'
                    break;
                case 'Kazak':
                    obj.val.enum = 'KAZAK'
                    break;
                case 'Tişört':
                    obj.val.enum = 'TISORT'
                    break;

            }
        }
        //'Yun', 'Ipek', 'Polyester', 'Elasten', 'Naylon', 'Pamuk'
        else if (obj.key === 'material') {
            switch (obj.val.cevap) {
                case 'Yün':
                    obj.val.enum = 'YUN'
                    break;
                case 'Ipek':
                    obj.val.enum = 'IPEK'
                    break;
                case 'Pamuk':
                    obj.val.enum = 'PAMUK'
                    break;
                case 'Naylon':
                    obj.val.enum = 'NAYLON'
                    break;
                case 'Elasten':
                    obj.val.enum = 'ELASTEN'
                    break;
                case 'Polyester':
                    obj.val.enum = 'POLYESTER'
                    break;


            }
        }
    }

    function optionPressHandler(cevap) {
        if (!isFinished) {
            answerToEnum(cevap);
            switch (cevap.key) {
                case 'type':
                    setType(cevap.val.enum)
                    break;
                case 'washingFrequency':
                    setWashingFrequency(cevap.val.enum)
                    break;
                case 'wearingFrequency':
                    setWearingFrequency(cevap.val.enum)
                    break;
                case 'material': //TODO
                    //todo
                    console.log(cevap.val);
                    setMaterial(cevap.val.enum)
                    break;
            }

        } else {
            Alert.alert('Youre out of options')
        }
    }

    async function finalHandler() {
        setIsLoading(true)
        await storeItems(tokenStore, requestBody)
        //dispatch(addToClothes(requestBody))
        setIsLoading(false)
        navigation.navigate('SplashScreen')
    }

    /* function renderSorular(soru) {
        if (soru === "Kıyafet Türü") {
            return (
                <Pressable
                    style={styles.optionContainer}
                    onPress={() => optionPressHandler({ key: item.key, val: cevap })} >
                    <Text
                        style={styles.answerText}
                    > {cevap.cevap} </Text>
                </Pressable>
            )
        }
        else {
            return (
                <Pressable
                    style={styles.optionContainer}
                    onPress={() => optionPressHandler({ key: item.key, val: cevap })} >
                    <Text
                        style={styles.answerText}
                    > {cevap.cevap} </Text>
                </Pressable>
            )
        }
    } */

    if (isLoading) {
        return (
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center'
            }} >
                <ActivityIndicator size="large" color="#a7fc84" />


            </View>
        )
    }

    return (
        <View style={styles.container} >
            <View style={{ flex: 1 }} >
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    backgroundColor: '#fff'
                }} >
                    <View style={styles.topBar} >
                        <MyIcon icon='left' size={29} onPressProp={backHandler} />
                        <Text style={styles.back} > Back </Text>
                    </View>
                    <View style={styles.topBar} >

                        <Text style={styles.index} > Kıyafet {clothNumberIndex} / {fullClothNumber}  </Text>
                    </View>
                    <View style={styles.topBar} >
                        <MyIcon icon='close' size={29} onPressProp={backHandler} />

                    </View>
                </View>

                {/* 
                
                Sorularin oldugu array
                kisim

                */}

                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} >
                    <View style={{ flex: 1, }} >



                        {
                            questionArray.map((item, index) => {
                                return (
                                    <View style={styles.questionContainer} >
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '500'
                                        }} > {item.soru}  </Text>
                                        <View style={styles.answerContainer} >
                                            <ScrollView horizontal
                                                showsHorizontalScrollIndicator={false}

                                            >

                                                {
                                                    item.cevaplar.map((cevap, index) => {
                                                        switch (item.soru) {
                                                            case 'Kıyafet Türü':
                                                                return (
                                                                    <Pressable
                                                                        style={cevap.enum == type ? styles.selectedText : styles.optionContainer}
                                                                        onPress={() => optionPressHandler({ key: item.key, val: cevap })
                                                                        } >
                                                                        <Text
                                                                            style={cevap.enum == type ? { color: 'white', ...styles.answerText } : styles.answerText}
                                                                        > {cevap.cevap} </Text>
                                                                    </Pressable>

                                                                )
                                                            case 'Giyinme Sikligi':
                                                                return (
                                                                    <Pressable
                                                                        style={cevap.enum == wearingFrequency ? styles.selectedText : styles.optionContainer}
                                                                        onPress={() => optionPressHandler({ key: item.key, val: cevap })
                                                                        } >
                                                                        <Text
                                                                            style={cevap.enum == wearingFrequency ? { color: 'white', ...styles.answerText } : styles.answerText}
                                                                        > {cevap.cevap} </Text>
                                                                    </Pressable>

                                                                )
                                                            case 'Yikama Sikligi':
                                                                return (
                                                                    <Pressable
                                                                        style={cevap.enum == washingFrequency ? styles.selectedText : styles.optionContainer}
                                                                        onPress={() => optionPressHandler({ key: item.key, val: cevap })
                                                                        } >
                                                                        <Text
                                                                            style={cevap.enum == washingFrequency ? { color: 'white', ...styles.answerText } : styles.answerText}
                                                                        > {cevap.cevap} </Text>
                                                                    </Pressable>

                                                                )
                                                            case 'Kıyafet kumaş türü':
                                                                return (
                                                                    <Pressable
                                                                        style={cevap.enum == material ? styles.selectedText : styles.optionContainer}
                                                                        onPress={() => optionPressHandler({ key: item.key, val: cevap })
                                                                        } >
                                                                        <Text
                                                                            style={cevap.enum == material ? { color: 'white', ...styles.answerText } : styles.answerText}
                                                                        > {cevap.cevap} </Text>
                                                                    </Pressable>

                                                                )

                                                        }

                                                    })
                                                }


                                            </ScrollView>
                                        </View>

                                    </View>
                                )
                            })
                        }




                        {/* <View style={[styles.questionContainer, { height: 250 }]} >
                            <Text style={styles.questionText} > Kıyafetin kumaş türü? </Text>

                            <View style={{ marginHorizontal: 15, marginBottom: 50 }} >
                                <SelectList data={kumasArray}
                                    setSelected={(val) => setSelected(val)} save='value'
                                    maxHeight={120} boxStyles={{
                                        borderRadius: 25, borderColor: 'gray', borderWidth: 1
                                    }} search={false} placeholder={'Türü seçiniz'} />
                            </View>

                        </View> */}

                    </View>
                </ScrollView>
                <View style={{ backgroundColor: 'white', borderTopWidth: 1, borderTopColor: "#aaa" }}>
                    {!isFinished && <NextButton title={'Next'} color={'#222'} onPressProp={nextHandle} />}
                    {isFinished && <NextButton title={'Submit'} color={'#a7fc84'} onPressProp={finalHandler} />}
                </View>
            </View>
        </View>
    )
}

export default EfeQuestion

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        padding: 10,
        marginTop: 20, margin: 10,

    },
    index: {
        marginTop: 3,
        fontSize: 20,
        fontWeight: '600',
        marginRight: 30
    },
    back: {
        marginTop: 3,
        fontSize: 18,
        fontWeight: '600'
    },
    questionContainer: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 20,
        height: 110,
        flex: 1,
        height: 125

    },
    questionText: {
        margin: 10,
        fontSize: 18,
        fontWeight: '400'
    },
    answerContainer: {
        flex: 1,
        borderRadius: 16,
        marginTop: 5,
        margin: 10,
        //backgroundColor: '#eaf1ef',
        height: 33,
        //width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'red',
        alignItems: 'center'

    },
    scrollView: {
        paddingBottom: 0,
        marginTop: 10
    },
    answerText: {
        fontSize: 16,
        fontWeight: '400',
        margin: 4,
        textAlign: 'center'
    },
    selectedAnswerText: {
        fontSize: 16,
        fontWeight: '400',
        margin: 4,
        textAlign: 'center',
        color: 'white'
    },
    optionContainer: {
        borderRadius: 16,
        //backgroundColor: 'purple',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginHorizontal: 3,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#ffffff'
    },
    selectedText: {
        borderRadius: 16,
        //backgroundColor: 'purple',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginHorizontal: 3,
        marginTop: 10,
        borderWidth: 1,
        color: 'white',
        borderColor: '#222',
        backgroundColor: '#222'
    },
    pressed: {
        backgroundColor: 'purple'
    }
})