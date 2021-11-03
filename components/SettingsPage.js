//dependencies og packages importeres
import * as React from "react";
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import firebase from "firebase";

//indstillingssiden består af en visning af hvilken konto man er logget ind som, samt en lod ud knap
const SettingsPage =()=>{
    //funktionen som logud knappen skal indholdes, defineres her som en asynkron handleLogOut, som benytter firebase,
    //til at logge ud
    const handleLogOut = async () => {
        await firebase.auth().signOut();
    };

    //indstillings-siden består af en view hvor den nuværende konto vises, samt knappen der tilkobles en OnPress.
    return (
        <View style={styles.container}>
            <Text>Du er logget ind som: {firebase.auth().currentUser.email}</Text>
            <Button onPress={() => handleLogOut()} title="Log out" />
        </View>
    );
}

//eksport af indstillingssiden
export default SettingsPage;

//stylesheet til siden
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});