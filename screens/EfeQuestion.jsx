import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MyIcon from '../components/MyIcon'
import Button from '../components/Button'
import { SelectList } from 'react-native-dropdown-select-list'

const questionArray = [
    {
        key: 1,
        value: 'Pamuk'
    },
    {
        key: 2,
        value: 'Koton'
    },
    {
        key: 3,
        value: 'Yün'
    },
    {
        key: 4,
        value: 'Kumaş'
    },
]

const EfeQuestion = ({ navigation, route }) => {

    const [selected, setSelected] = useState('')
    const [changeColor, setChangeColor] = useState(false)

    const selectedColor = '#123456'

    function backHandler() {
        navigation.goBack()
    }

    function nextHandle() {
        navigation.navigate('PieChart')
    }

    function renderButtons(i, type) {
        let containerStyle = null;
        let answerStyle = null;
        let answers = ["", "Haftada 2-3", "Haftada 1", "Ayda 1"]
        let answersOther = ["", "Keten", "Polyester", "Pamuk"]
        if (i == 1) {
            containerStyle =
                [
                    styles.answerContainer,
                    {
                        backgroundColor: selectedColor,
                    }
                ];
            answerStyle = styles.selectedAnswerText;
        } else {
            containerStyle = styles.answerContainer;
            answerStyle = styles.answerText;
        }

        let answerText = null;
        switch (type) {
            case 1:
                answerText = answersOther[i]
                break;
            case 2:
                answerText = answers[i]
                break;
            case 3:
                answerText = answers[i]
                break;
            case 4:
                answerText = answers[i]
                break;
        }
        return (
            <Pressable>
                <View style={containerStyle}>
                    <Text style={answerStyle}>{answerText}</Text>
                </View>
            </Pressable>
        );
    }

    return (
        <View style={styles.container} >
            <View style={{ flex: 1 }} >
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    backgroundColor: 'white'
                }} >
                    <View style={styles.topBar} >
                        <MyIcon icon='left' size={29} onPressProp={backHandler} />
                        <Text style={styles.back} > Back </Text>
                    </View>
                    <View style={styles.topBar} >

                        <Text style={styles.index} > Kıyafet 1/3 </Text>
                    </View>
                    <View style={styles.topBar} >
                        <MyIcon icon='close' size={29} onPressProp={backHandler} />

                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} >
                    <View style={{ flex: 1, }} >
                        <View style={styles.questionContainer} >
                            <Text style={styles.questionText} > Kıyafetin türü? </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                {new Array(1, 2, 3).map(item => {
                                    return renderButtons(item, 1)
                                })}
                            </View>
                        </View>
                        <View style={styles.questionContainer} >
                            <Text style={styles.questionText} > Kıyafetini ne sıklıkla yıkıyorsun? </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                {new Array(1, 2, 3).map(item => {
                                    return renderButtons(item, 2)
                                })}
                            </View>
                        </View>
                        <View style={styles.questionContainer} >
                            <Text style={styles.questionText} > Kıyafetini ne sıklıkla giyiyorsun? </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                {new Array(1, 2, 3).map(item => {
                                    return renderButtons(item, 3)
                                })}
                            </View>
                        </View>


                        <View style={[styles.questionContainer, { height: 150 }]} >
                            <Text style={styles.questionText} > Kıyafetin kumaş türü? </Text>

                            <View style={{ marginHorizontal: 15 }} >
                                <SelectList data={questionArray}
                                    setSelected={(val) => setSelected(val)} save='value'
                                    maxHeight={90} boxStyles={{
                                        borderRadius: 25, borderColor: 'gray', borderWidth: 1
                                    }} search={false} placeholder={'Türü seçiniz'} />
                            </View>

                        </View>

                    </View>
                </ScrollView>
                <View style={{ backgroundColor: 'white', borderTopWidth: 1, borderTopColor: "#aaa" }}>
                    <Pressable>
                        <Button title="Next" color="#123456" onPressProp={nextHandle} />
                    </Pressable>
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
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 20,
        height: 110,

    },
    questionText: {
        margin: 10,
        fontSize: 18,
        fontWeight: '400'
    },
    answerContainer: {
        borderRadius: 16,
        marginTop: 5,
        margin: 10,
        backgroundColor: '#eaf1ef',
        height: 33,
        width: 100



    },
    scrollView: {
        paddingBottom: 0
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
    }
})