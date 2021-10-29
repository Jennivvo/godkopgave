import * as React from "react";
import {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

import SignUpForm from './components/StackComponents/SignUpForm';
import firebase from 'firebase';
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import { Card } from 'react-native-paper';
import logo from "./assets/logo.png";

const firebaseConfig = {
  apiKey: "AIzaSyAxJw2wloiU3STsf0X_MGyFSQSEJ05qOQM",
  authDomain: "godkopg.firebaseapp.com",
  projectId: "godkopg",
  storageBucket: "godkopg.appspot.com",
  messagingSenderId: "799257580770",
  appId: "1:799257580770:web:5ccb1ef96ca1cf80433abb"
};



const navController = (navigation, route) => {
  navigation.navigate(route)
};
''

function App({navigation}) {
  const [user, setUser] = useState({ loggedIn: false });
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  function onAuthStateChange(callback) {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({loggedIn: true, user: user});
      } else {
        callback({loggedIn: false});
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const StartPage = () => {
    return(
        <View style={styles.container}>
          <Image source={logo} style={styles.image}/>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Card style={{padding:30}}>
            <LoginForm />
          </Card>

          <Text style={styles.paragraph}>
            Har du ikke nogen bruger?
          </Text>
          <Button title ="OPRET!" onPress={() => navController(navigation, "SignUpForm")}/>

          <Card style={{padding:30}}>
            <SignUpForm />
          </Card>

        </View>
    )
  }

  return user.loggedIn ? <HomePage /> : <StartPage/> ;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '5%',
    backgroundColor: 'transparent',
    padding: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    top: 70,
    margin:10,
  }
});

export default App
