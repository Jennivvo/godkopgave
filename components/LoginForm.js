import React, { useState} from 'react';
import {Button, Text, View, TextInput, ActivityIndicator, StyleSheet,} from 'react-native';
import firebase from 'firebase';

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSubmit = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
            });

        } catch (error){
            setErrorMessage(error.message)
        }
    }

    const renderButton = () => {
        return <Button style={styles.button} onPress={() => handleSubmit()} title="LOG IND" />;
    };

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
        underlayColor: "green",
        borderColor: 'green'
    }
});

export default LoginForm