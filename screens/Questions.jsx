import { Alert, Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyIcon from '../components/MyIcon'
import QuestionItem from '../components/QuestionItem'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import data from '../components/data/data'
import { useSelector, useDispatch } from 'react-redux'
import { decrement } from '../store/clothNumberCounter'
import LottieView from 'lottie-react-native';


const Questions = ({ navigation, route }) => {

    const [questionIndex, setquestionIndex] = useState(1)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
    const [progress, setProgress] = useState(new Animated.Value(1))
    const [isPressed, setIsPressed] = useState(false)
    const [bgColor, setBgColor] = useState('gray')
    const [isFinished, setisFinished] = useState(0)
    const [puan, setPuan] = useState(0)
    const [puanArray, setPuanArray] = useState([])
    const [puanByClothArr, setPuanByClothArr] = useState([])
    const incrementPointByValue = (value) => setSahtePuan(sahtePuan + value)

    const clothNumber = useSelector((state) => state.clothNumber.value)
    const dispatch = useDispatch()

    const allQuestions = data

    //let pointByAnswer = sahtePuan

    const progressAnimation = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })



    /*   useEffect(() => {
          const puanEffect = puan
          setPuan(puan)
          console.log(puan);
          pointByAnswer = puanEffect
          pointByAnswer += puan
          incrementPointByValue(pointByAnswer)
          console.log('Inside a useEffect ');
          console.log(puan);
          console.log('Total Point');
          console.log(sahtePuan); 
      }, [puan]) */


    function iconHandler() {
        if (questionIndex > 1) {
            setquestionIndex(questionIndex - 1)
            return (
                Animated.timing(progress, {
                    toValue: questionIndex - 1,
                    duration: 1000,
                    useNativeDriver: false
                }).start()
            )
        } else {
            navigation.goBack()
        }
    }

    function closeHandler() {
        navigation.goBack()
    }


    function nextHandle() {
        if (questionIndex == allQuestions.length) {
            if (clothNumber > 1) {
                dispatch(decrement())
                console.log(clothNumber);
                navigation.navigate('ClothName')
                console.log(clothNumber);
            } else {
                setPuanArray((prevState) => [...prevState, puan])
                //console.log(puanArray);

                setTimeout(() => {
                    setisFinished(1)
                }, 700)
            }
        } else {
            setquestionIndex(questionIndex + 1);
            console.log('Puan statei' + puan);
            setPuanArray((prevState) => [...prevState, puan])
            console.log(puanArray);
            setIsPressed(false)
            return (
                Animated.timing(progress, {
                    toValue: questionIndex + 1,
                    duration: 700,
                    useNativeDriver: false
                }).start()
            )
        }
    }

    function optionPressHandle(option) {
        setIsPressed(true)
        setCurrentOptionSelected(option)
        console.log('Realllll Point before answer' + puan);
        setPuan(option.point)
        setBgColor('purple')
        //nextHandle()
        console.log(option);
        console.log(puan);
    }


    if (!isFinished) {
        return (

            <View style={styles.screen} >
                <View style={styles.container} >
                    <View style={styles.yeter} >
                        <View style={styles.upTab} >
                            <View style={styles.upTab} >
                                <MyIcon icon='left' size={29} onPressProp={iconHandler} />
                                <Text style={styles.back} > Back </Text>
                            </View>
                            <View style={styles.upTab} >

                                <Text style={styles.index} > {questionIndex}/3 </Text>
                            </View>
                            <View style={styles.upTab} >
                                <MyIcon icon='close' size={29} onPressProp={closeHandler} />

                            </View>
                        </View>
                        <View>
                            <View style={styles.animatedContainer} >
                                <Animated.View style={[styles.progress, { width: progressAnimation }]} >

                                </Animated.View>

                            </View>
                        </View>
                        <View style={styles.questionContainer} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Text
                                    style={styles.questionText} > {allQuestions[questionIndex - 1]?.question}
                                </Text>
                                <View style={{}} >
                                    <Image
                                        source={require('../images/Thinking-face-bro.png')}
                                        style={styles.image} resizeMode={'contain'} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 3, margin: 10, marginTop: 30 }} >
                        {
                            allQuestions[questionIndex - 1]?.answers.map((option, index) => {

                                //let a = 0;
                                return (
                                    <Pressable
                                        key={index}
                                        onPress={() => optionPressHandle(option)}
                                        style={[styles.optionsContainer]}
                                    >

                                        <Text style={styles.optionText} >
                                            {option.cevap}
                                        </Text>
                                    </Pressable>
                                )
                            }



                            )
                        }
                        <View style={{ marginVertical: 20 }} >
                            <Pressable>
                                <Button title="Next" color="#123456" onPressProp={nextHandle} />
                            </Pressable>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
    else {
        const sum = puanArray.reduce((partialSum, a) => partialSum + a, 0)
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
                <LottieView autoPlay loop={false}
                    style={{ width: 100, height: 100 }}
                    source={require('../images/1798-check-animation.json')} />
                <Text style={{ marginTop: 27, fontWeight: '300' }} > Your Score {sum} </Text>
                <LottieView autoPlay loop={true}
                    style={{ width: '100%', height: 150 }} source={require('../images/lf30_editor_cdfgp1fy.json')} />
            </View>
        )
    }
}





export default Questions

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {

        flex: 1
    },

    yeter: {
        flex: 2,
        backgroundColor: '#c4e9e5'
    },
    image: {
        width: 133,
        height: 133,

    },

    upTab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        padding: 10,
    },
    back: {
        marginTop: 3,
        fontSize: 18,
        fontWeight: '600'
    },
    index: {
        marginTop: 3,
        fontSize: 20,
        fontWeight: '600',
        marginRight: 50
    },
    animatedContainer: {
        borderRadius: 10,
        height: 20,
        backgroundColor: "#00110D",
        marginTop: 13,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    progress: {
        height: 20,
        borderRadius: 10,
        backgroundColor: '#209150',
    },
    questionContainer: {
        margin: 10,
        marginTop: 55
    },
    questionText: {
        fontSize: 20,
        fontWeight: '500'
    },
    optionsContainer: {
        borderRadius: 15,
        marginVertical: 10,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    optionText: {
        fontWeight: '400',
        fontSize: 17,
        marginLeft: 7
    },
    pressed: {
        backgroundColor: '#209087'
    }

})