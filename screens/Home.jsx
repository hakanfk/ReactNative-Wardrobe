import { View, Text, StyleSheet, FlatList, ScrollView, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SearchBar } from 'react-native-screens'
import Search from '../components/Search'
import NewsContainer from '../components/NewsContainer'
import MyIcon from '../components/MyIcon'
import { AuthContext } from '../store/ctxAuth'


const data = [
    {
        id: 1,
        title: 'Mini Wardrobe',
        author: 'Candice Batista',
        content: 'A minimalist capsule wardrobe is a wonderfully simple solution to getting dressed every morning but it is also a great way to reduce our environmental footprint. Because minimalism relies in large part on the thoughtful curation of only the items we need, it inherently reduces the number of items we purchase and own. ',
        urlToImage: 'https://theecohub.com/wp-content/uploads/2021/07/minimalist-wardrobe2-294x441@2x.jpg'
    },
    {
        id: 2,
        title: 'Mini Wardrobe',
        author: 'Candice Batista',
        content: '',
        urlToImage: 'https://theecohub.com/wp-content/uploads/2021/07/minimalist-wardrobe2-294x441@2x.jpg'

    },
    {
        id: 3,
        title: 'Mini Wardrobe',
        author: 'Candice Batista',
        content: 'A minimalist capsule wardrobe is a wonderfully simple solution to getting dressed every morning but it is also a great way to reduce our environmental footprint. Because minimalism relies in large part on the thoughtful curation of only the items we need, it inherently reduces the number of items we purchase and own. ',
        urlToImage: 'https://theecohub.com/wp-content/uploads/2021/07/minimalist-wardrobe2-294x441@2x.jpg'

    },
    {
        id: 4,
        title: 'Mini Wardrobe',
        author: 'Candice Batista',
        content: 'A minimalist capsule wardrobe is a wonderfully simple solution to getting dressed every morning but it is also a great way to reduce our environmental footprint. Because minimalism relies in large part on the thoughtful curation of only the items we need, it inherently reduces the number of items we purchase and own. ',
        urlToImage: 'https://theecohub.com/wp-content/uploads/2021/07/minimalist-wardrobe2-294x441@2x.jpg'

    }
]



const Home = ({ navigation }) => {

    const [isLoading, setisLoading] = useState(false)

    const authCtx = useContext(AuthContext)




    function renderItemHandler(itemData) {
        return (

            <NewsContainer {...itemData} />
        )
    }

    function logoutHandler() {
        try {
            authCtx.logout()
            //navigation.navigate('OnboardingScreen')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1 }} >
            <View style={styles.container} >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }} >
                    <View style={{ flex: 4, marginRight: 35, marginLeft: -15 }} >
                        <Search />
                    </View>
                    <MyIcon icon={'logout'} size={33} color='black'
                        onPressProp={logoutHandler}
                    />
                </View>
                <View   >
                    <Text style={styles.news} >Discover</Text>
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