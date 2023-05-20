import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { VictoryPie, VictoryTheme } from 'victory-native'
import CircularProgress from 'react-native-circular-progress-indicator';
import MyIcon from '../components/MyIcon';
import EmptyButton from '../components/EmptyButton';
import { useDispatch, useSelector } from 'react-redux'
import { getMinimalism, getPieChart } from '../util/auth';
import { AuthContext } from '../store/ctxAuth'



const data = [
    { x: "Polyester", y: 30, color: 'tomato' },
    { x: "Pamuk", y: 10, color: 'gold' },
    { x: "Keten", y: 10, color: 'navy' },
    { x: "Araba", y: 20, color: 'purple' },
    { x: "Ev", y: 15, color: '#445566' },
    { x: "Palto", y: 15, color: 'red' },
]

const enums = [
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

const PieChart = ({ navigation }) => {


    const authCtx = useContext(AuthContext)


    const [yuzde, setYuzde] = useState(6)
    const [details, setDetails] = useState([])
    const [colors, setColors] = useState([])

    function iconHandler() {
        navigation.navigate('MyGardrobe')
    }

    function pressHandler() {
        navigation.navigate('Information')
    }

    let a;

    useEffect(() => {
        async function getPercentage() {
            const percentage = await getMinimalism(authCtx.token)
            setYuzde(percentage.data.data.percentage)
            console.log("Nananananananna");
            console.log(percentage.data.data.percentage)

            const kiyafetYuzde = await getPieChart(authCtx.token)
            setDetails(kiyafetYuzde.data.data.details)
            let processThis = kiyafetYuzde.data.data.details;
            let emptyArr = [];
            Object.keys(processThis).forEach(key => {
                let cl = "#" + Math.floor(Math.random() * 16777215).toString(16);
                if (cl.length === 6) cl += "0";
                emptyArr.push(
                    {
                        x: enums.find(e => e.enum === key).cevap,
                        y: processThis[key],
                        color: cl
                    }
                )
                setColors([...colors, cl])
            })
            console.log("BURDA", emptyArr);
            setDetails(emptyArr);
            console.log(kiyafetYuzde.data.data.details);
            console.log("----------------")

        }
        getPercentage()

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#e3edf5' }} >
            <View style={{
                marginTop: 45, marginLeft: 20, flexDirection: 'row'
            }} >
                <MyIcon icon={'leftcircle'} size={40} style={{ position: 'absolute', left: 0 }}
                    onPressProp={iconHandler}
                />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 33,
                    marginTop: 7
                }} >Your Wardrobe's Overview</Text>
            </View>

            <View style={{
                padding: 0,
                alignItems: 'center',
                flex: 1,
                marginTop: 7,
                //backgroundColor: ''
            }} >

                <View style={{
                    flexDirection: 'row', marginLeft: 0, marginTop: 17,
                    backgroundColor: '#ecf3f8', width: "90%", borderRadius: 30,
                    height: 250

                }} >
                    <View style={{
                        flex: 2, marginLeft: -37, marginTop: 0
                    }} >
                        <VictoryPie
                            width={300}
                            height={250}
                            colorScale={details.length > 0 && details.map(d => d.color)}
                            data={details}
                            innerRadius={10}
                            padAngle={2}
                            labels={({ datum }) => ``}
                            animate={{
                                duration: 2000,
                                onLoad: {
                                    duration: 5000
                                },
                                easing: 'bounce'
                            }}
                        />
                    </View>
                    <View style={{
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        //marginBottom: 60,
                        marginRight: 10,
                        //backgroundColor: 'blue',
                        flex: 1

                    }} >
                        {
                            details && details.length > 0 && details.map((item, index) => {
                                return (
                                    <View key={index} style={styles.pieChart} >
                                        <Text style={{
                                            position: 'absolute',
                                            left: -41,

                                        }} > {item.x} </Text>
                                        <View style={{
                                            borderRadius: 30,
                                            width: 25,
                                            height: 25,
                                            backgroundColor: item.color,
                                            marginRight: 0,
                                            position: 'relative',
                                            left: 40,

                                        }} >

                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>

                <View style={{
                    height: 280, marginTop: 20, alignItems: 'center',
                    backgroundColor: '#fff', width: '90%', borderRadius: 30
                }} >
                    <View style={{ marginTop: 50 }} >
                        <Text style={{
                            marginTop: -5,
                            marginBottom: 10,
                            fontWeight: '300',
                            fontSize: 18
                        }} >Your Minimalism Percentage</Text>
                    </View>

                    <View style={{ marginTop: 15 }} >
                        <Text style={{ fontSize: 50, color: '#341000' }} > {yuzde}% </Text>
                    </View>

                    <View style={{ marginTop: 26 }} >
                        <Pressable onPress={pressHandler} >
                            <Text style={{
                                color: '#67b6d2', fontWeight: 'bold',
                                textDecorationLine: 'underline', fontSize: 16
                            }} >
                                Nasıl daha minimalist olabileceğini öğren
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default PieChart

const styles = StyleSheet.create({
    pieChart: {
        marginVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})