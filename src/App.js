/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React,{useState} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import music_data from './music-data.json'
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearchBar'
function App(){
    const [list,setList]=useState(music_data)

    const renderSong=({item}) => <SongCard song={item} />
    const renderSeparator=() => <View style={styles.separator}></View>
    const handleSearch = text => {
        const filteredList=music_data.filter(song => {
            const searchedText=text.toLowerCase();
            const currentTitle=song.title.toLowerCase();
            return currentTitle.indexOf(searchedText)>-1;

        });
        setList(filteredList)
    }

    return(
        <View style={styles.container}>
            <SearchBar onSearch={handleSearch} />
            <View style={styles.container}>
                <FlatList
                    ItemSeparatorComponent={renderSeparator}
                    keyExtractor={item => item.id}
                    data={list}
                    renderItem={renderSong}
                 />
            </View>
        </View>

    )

}

export default App;
const styles=StyleSheet.create({
    container:{flex:1},
    separator:{
        borderWidth:1,
        borderColor:'#D4D5D6'
    }

})