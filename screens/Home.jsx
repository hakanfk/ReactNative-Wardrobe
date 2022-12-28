import { View, Text, StyleSheet, FlatList, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SearchBar } from 'react-native-screens'
import Search from '../components/Search'
import NewsContainer from '../components/NewsContainer'


const Home = () => {

    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c05e9e318dde446e8de32c218f89a3ed')
                .then(res => res.json()).then((json) => {
                    setdata(json.articles);
                    console.log(json);
                    setisLoading(false)
                })
                .catch((err) => Alert.alert(err))
        }, 700)
    }, [])


    function renderItemHandler(itemData) {
        return (

            <NewsContainer {...itemData} />
        )
    }

    return (
        <View style={{ flex: 1 }} >
            <View style={styles.container} >
                <View>
                    <Search />
                </View>
                <View   >
                    <Text style={styles.news} > News</Text>
                </View>
                <ScrollView style={{ marginTop: 5 }} >
                    {
                        isLoading ? <Text> Loading... </Text> :
                            <FlatList data={data} renderItem={renderItemHandler} keyExtractor={(item) => item.description} />
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        margin: 25
    },
    news: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})