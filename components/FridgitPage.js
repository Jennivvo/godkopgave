import * as React from "react";
import {useState, useEffect} from "react";
import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {ITEMS} from "../const";
import CustomMultiPicker from "react-native-multiple-select-list";

const userList = {
    "123":"Tom",
    "124":"Michael",
    "125":"Christin"
}

const FridgitPage =()=>{
    return (
        <View style={styles.container}>
            <Text></Text>
            <Text>Hvad er der i dit køleskab i dag?</Text>
            <TextInput style={styles.searchbar}/>
            <CustomMultiPicker
                options={ITEMS}
                search={true} // should show search bar?
                multiple={true} //
                placeholder={"Search"}
                placeholderTextColor={'#757575'}
                returnValue={"label"} // label or value
                callback={(res)=>{ console.log(res) }} // callback, array of selected items
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