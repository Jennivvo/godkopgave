//dependencies og packages importeres
import * as React from "react";
import {useState, useEffect} from "react";
import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomMultiPicker from "react-native-multiple-select-list";
//den pre-defineret lite med ingredienser hentes
import {ITEMS} from "../const";

//fridgit-siden vil indeholde et view bestående af text samt en custommultipicker
const FridgitPage =()=>{
    return (
        <View style={styles.container}>
            <Text></Text>
            <Text>Hvad er der i dit køleskab i dag?</Text>
            <TextInput style={styles.searchbar}/>
            <CustomMultiPicker
                options={ITEMS}
                search={true}
                multiple={true}
                placeholder={"Search"}
                placeholderTextColor={'#757575'}
                returnValue={"label"}
                callback={(res)=>{ console.log(res) }}
                rowBackgroundColor={"#eee"}
                rowHeight={40}
                rowRadius={5}
                iconColor={"#00a2dd"}
                iconSize={30}
                selectedIconName={"ios-checkmark-circle-outline"}
                unselectedIconName={"ios-radio-button-off-outline"}
                scrollViewHeight={130}
                selected={[1,2]} // list of options which are selected by default
            />
        </View>
    );
}

//fridgit-siden eksporteres
export default FridgitPage;

//stylesheet til siden
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchbar: {
        margin:10,
        borderWidth:1
    }
});