import * as React from "react";
import {useState, useEffect} from "react";
import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {ITEMS} from "../const";

const FridgitPage =()=>{
    return (
        <View style={styles.container}>
            <Text></Text>
            <Text>Hvad er der i dit køleskab i dag?</Text>
            <TextInput style={styles.searchbar}/>
        </View>
    );
}


export default FridgitPage;

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