//dependencies og packages importeres
import React, { useState} from 'react';
import {Button, Text, View, TextInput, ActivityIndicator, StyleSheet,} from 'react-native';
import firebase from 'firebase';

//Denne funktion indeholder de variabler og den asynkrone funktion der skal til for at logge ind
function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSubmit = async () => {
        //funktionen er bygget op med en try-catch hvor den først skal autentificere det indtastede loging med
        //bruger credentials fra firebase databasen
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
            });
        //er der ikke et match, vil den udskrive en fejlmeddelelse
        } catch (error){
            setErrorMessage(error.message)
        }
    }

    //der oprettes en knap hvor ovenstående funktion vil aktiveres såfremt der sker en handling af typen "onPress"
    const renderButton = () => {
        return <Button style={styles.button} onPress={() => handleSubmit()} title="LOG IND" />;
    };

    //login siden vil bestå af et view med to tekstinputfelter og knappen som blev oprettet ovenover med login-funktionen
    return (
        <View>
            <TextInput
                placeholder="brugernavn"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password) }
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {renderButton()}
        </View>
    );
}

//stylesheet til siden
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
    },
    header: {
        fontSize: 40,
    },
    button: {
        borderColor: 'green'
    }
});

//loginform eksporteres så den kan bruges i App.js
export default LoginForm
