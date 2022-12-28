import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Search = () => {

    const [searchText, setSearchText] = useState('')

    function searchTextHandler(enteredText) {

    }

    return (
        <View>
            <View style={styles.searchBar} >
                <View style={{ flexDirection: 'row', marginLeft: -4, marginTop: 2 }} >
                    <Ionicons name="search" size={34} color="gray" />
                    <TextInput placeholder='Search' style={{
                        marginLeft: 3,
                        fontSize: 18
                    }} value={searchText} onChangeText={searchTextHandler} />
                </View>

            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchBar: {
        borderRadius: 20,
        marginLeft: 15,
        margin: 20,
        width: '90%',
        height: 40,
        backgroundColor: '#D0D0DD',
        //justifyContent: 'center',
        paddingHorizontal: 20,

    }
})