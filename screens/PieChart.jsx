import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VictoryPie, VictoryTheme } from 'victory-native'
import CircularProgress from 'react-native-circular-progress-indicator';
import MyIcon from '../components/MyIcon';

const data = [
    { x: "Polyester", y: 30, color: 'tomato' },
    { x: "Pamuk", y: 10, color: 'gold' },
    { x: "Keten", y: 60, color: 'navy' },
]

const PieChart = () => {
    return (
        <View style={{ flex: 1 }} >
            <View style={{
                marginTop: 35, marginLeft: 20, flexDirection: 'row'
            }} >
                <MyIcon icon={'leftcircle'} size={40} style={{ position: 'absolute', left: 0 }} />
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
                marginTop: 7
            }} >


                <View style={{
                    flex: 1, flexDirection: 'row', marginLeft: -50, marginTop: 0

                }} >
                    <VictoryPie
                        width={300}
                        height={250}
                        colorScale={["tomato", "gold", "navy", '#555555']}
                        data={data}
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
                    <View style={{
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 60,
                        marginRight: 10

                    }} >
                        {
                            data.map((item, index) => {
                                return (
                                    <View key={index} style={styles.pieChart} >
                                        <Text style={{}} > {item.x} </Text>
                                        <View style={{
                                            borderRadius: 30,
                                            width: 25,
                                            height: 25,
                                            backgroundColor: item.color,
                                            marginRight: 0
                                        }} >

                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>

                <View style={{ flex: 1, marginBottom: 110, alignItems: 'center' }} >
                    <Text style={{
                        marginBottom: 20,
                        fontWeight: '300',
                        fontSize: 18
                    }} >Your Minimalism Percentage</Text>
                    <CircularProgress
                        value={80}
                        radius={90}
                        maxValue={'100'}
                        inActiveStrokeOpacity={0.5}
                        activeStrokeWidth={20}
                        inActiveStrokeWidth={20}
                        duration={1000}
                        progressValueStyle={{ fontWeight: '300', color: 'green' }}
                        strokeColorConfig={[
                            { color: 'red', value: 0 },
                            { color: 'skyblue', value: 50 },
                            { color: 'yellowgreen', value: 100 },
                        ]}
                        valueSuffix={'%'} />
                </View>

            </View>
        </View>
    )
}

export default PieChart

const styles = StyleSheet.create({
    pieChart: {
        marginVertical: 9,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})