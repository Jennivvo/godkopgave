//Importer de dependencies og packages der skal benyttes
import * as React from "react";
import {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import SignUpForm from './components/StackComponents/SignUpForm';
import firebase from 'firebase';
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import { Card } from 'react-native-paper';
import logo from "./assets/logo.png";

//Konfigurer den firebase database der er opsat således autentifikation af brugere er muligt. Dertil kan der også
//oprettes nye brugere i databasen
const firebaseConfig = {
  apiKey: "AIzaSyAxJw2wloiU3STsf0X_MGyFSQSEJ05qOQM",
  authDomain: "godkopg.firebaseapp.com",
  projectId: "godkopg",
  storageBucket: "godkopg.appspot.com",
  messagingSenderId: "799257580770",
  appId: "1:799257580770:web:5ccb1ef96ca1cf80433abb"
};

//variabel defineres med en navigations rute, i forsøg på at fjerne sign up card'et og i stedet substituere
//med en "opret" knap som omdirigerer til oprettelse af brugere
const navController = (navigation, route) => {
  navigation.navigate(route)
};

//min app function som indeholder alt det som min logind side indeholder.
function App({navigation}) {
  //variablen user sættes til et state hvor den er defineret til false ift. "loggedin"
  const [user, setUser] = useState({ loggedIn: false });

  //et if-statement hvor firebaseconfig'en som blev konfigureret tidligere benytes for at kalde på onAuthStateChange
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  //en call-back funktion som returner et if-else statement ift. om brugeren er logget ind i forvejen eller ej.
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

  //denne er funktionen som indeholder alt der er synligt på loginsiden, inkl. billeder, login- og signup formen
  //som er importeret tidligere. Den vises som en "Card". Derudover blev der forsøgt at lave en "opret" knap som skulle
  //allokere brugeren til en seperat opret bruger side, men dette er ikke færdigt endnu.
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

  //skulle brugeren allerede være logget ind sendes brugeren direkte til homepage.
  return user.loggedIn ? <HomePage /> : <StartPage/> ;

}

//Stylesheet til loginside
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

//startsiden eksporteres
export default App
