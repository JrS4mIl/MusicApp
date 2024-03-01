/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import music_data from './music-data.json'
import SongCard from './components/SongCard';
function App(){
    const renderSong=({item}) => <SongCard song={item} />
    const renderSeparator=() => <View style={styles.separator}></View>
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    ItemSeparatorComponent={renderSeparator}
                    keyExtractor={item => item.id}
                    data={music_data}
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