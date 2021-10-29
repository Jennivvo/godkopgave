import * as React from "react";
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import firebase from "firebase";

const SettingsPage =()=>{
    const handleLogOut = async () => {
        await firebase.auth().signOut();
    };

    return (
        <View style={styles.container}>
            <Text>Du er logget ind som: {firebase.auth().currentUser.email}</Text>
            <Button onPress={() => handleLogOut()} title="Log out" />
        </View>
    );
}


export default SettingsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});