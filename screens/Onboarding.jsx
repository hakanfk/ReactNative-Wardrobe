import { View, Text, ScrollView, StyleSheet, Dimensions, Animated, Image } from 'react-native'
import React from 'react'
import { useRef } from 'react'
import Button from '../components/Button'
import EmptyButton from '../components/EmptyButton'
import LottieView from 'lottie-react-native';


const width = Dimensions.get('window').width

const images = [
    {
        id: 1,
        img: require("../images/127739-wardrobe.json"),
        color: 'green',
        title: 'Herkes için Türkiye',
        description: 'Minimalist ve çevreci bir Gardrop için '
    },
    {
        id: 2,
        img: require("../images/98886-wardrobe.json"),
        color: 'blue',
        title: 'Herkes için sdknfkldnfkldnfinldk',
        description: 'Sizin de Dünyanızı, Yeşili Seviyor Musunuz?'
    },
    {
        id: 3,
        img: require("../images/8273-chracter-3.json"),
        color: 'red',
        title: 'Herkes için Türkiye',
        description: 'O Zaman Şimdi Değişime Katılmanın Tam Zamanı?'
    }
]

const Onboarding = ({ navigation }) => {

    const scrollX = useRef(new Animated.Value(0)).current
    let position = Animated.divide(scrollX, width)



    function signInHandler() {

        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container} >
            <View style={styles.slideContainer} >
                <View style={{ flex: 7 }} >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled
                        bounces={false} snapToInterval={width} decelerationRate={0.8}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}    >
                        {
                            images.map((image, index) => {
                                return (
                                    <Animated.View key={index} >
                                        <LottieView autoPlay
                                            loop={true} source={image.img} style={{
                                                width: '80%',
                                                height: '100%'
                                            }} />
                                    </Animated.View>
                                )
                            })
                        }

                    </ScrollView>
                </View>
                <View style={styles.movingTextContainer} >
                    {
                        images.map((image, index) => {

                            const inputRange = [
                                width * (index - 1),
                                width * (index),
                                width * (index + 1),
                            ]

                            return (
                                <Animated.Text style={[styles.textView, {
                                    transform: [
                                        {
                                            translateY: scrollX.interpolate({
                                                inputRange,
                                                outputRange: [-10, 40, 100]
                                            })
                                        }
                                    ], opacity: scrollX.interpolate({
                                        inputRange,
                                        outputRange: [0, 1, 0]
                                    })
                                }]} >
                                    <Text style={styles.textTitle} > {image.description} </Text>


                                </Animated.Text>
                            )
                        })
                    }
                </View>
            </View>
            <View style={styles.indicatorContainer} >
                {
                    images.map((image, index) => {

                        const windowWidth = scrollX.interpolate({
                            inputRange: [
                                width * (index - 1),
                                width * (index),
                                width * (index + 1),
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: 'clamp'
                        })

                        return (
                            <Animated.View style={[styles.normalDots, {
                                width: windowWidth,
                                backgroundColor: '#67b6d2'
                            }]}>

                            </Animated.View>
                        )
                    })
                }
            </View>
            <View style={styles.bottomScreen} >
                <Button title="Sign In" color='#67b6d2' onPressProp={signInHandler} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                    <Text style={styles.dontAccount} > Dont Have an Account? </Text>
                    <EmptyButton title="Sign Up" />
                </View>
            </View>

        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    slideContainer: {
        flex: 4
    },
    movingTextContainer: {
        flex: 2,
        marginTop: 15,
        marginHorizontal: 20

    },
    textView: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        color: 'black',
        //flexDirection: 'row'
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    textDesc: {},
    bottomScreen: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 10
    },
    scrollBar: {
        width: '16%',
        height: 2.4,
        backgroundColor: 'white'
    },
    image: {
        width: '90%',
        height: '100%'
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    normalDots: {
        width: 40,
        height: 10,
        borderRadius: 25,
        backgroundColor: 'blue',
        margin: 5
    },
    dontAccount: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
