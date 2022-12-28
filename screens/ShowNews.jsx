import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MyIcon from '../components/MyIcon';


const ShowNews = ({ route, navigation }) => {

    const { news } = route?.params;

    function backHandler() {
        navigation.goBack()
    }

    return (
        <View style={{ flex: 1 }} >
            <View style={{ margin: 30 }} >
                <MyIcon icon={'leftcircle'} size={40} onPressProp={backHandler} />
            </View>
            <View style={{ alignItems: 'center', margin: 20, marginTop: 0 }} >
                <Text style={{ fontSize: 22, fontWeight: 'bold' }} > {news.title} </Text>
                <Image source={{ uri: news.urlToImage }} style={{
                    width: '90%',
                    height: 200,
                    marginTop: 30,

                }} />
                <Text style={{ marginTop: 25 }} >
                    {news.content}
                </Text>
            </View>
        </View>
    )
}

export default ShowNews