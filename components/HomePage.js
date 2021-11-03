//import af dependencies og packages der skal benyttes. Derudover også sider og billeder
import React from 'react';
import {View, Text, TextInput, Button, Image, StyleSheet, SafeAreaView} from 'react-native';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsPage from "../components/SettingsPage";
import RecipesPage from "../components/RecipesPage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from "../assets/logo.png";
import FridgitPage from "../components/FridgitPage";

//Variabler med tekst til siderne defineres samt vores tab variable der benyttes til at oprette en bottomtabnavigator
const fridgitPageText = "This is FridgetPage!";
const settingsPageText = "This is SettingPage!";
const recipesPageText = "This is RecipePage!"
const Tab = createBottomTabNavigator();

//Alt der vil fremgå på homepage vil være i denne funktion. Den indeholder et if-statement, som siger, at hvis der ikke
//kan autentificeres en bruger vil den returnere "not found", men såfremt den finder en bruger, vil den returnere et
//safeAreaView med billeder samt en bottomtabnavigator med tre komponenter.
function HomePage () {
    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }
    return (
        <SafeAreaView style={styles.container} >
            <Text></Text>
            <Text></Text>
            <Image source={logo} style={{width:100, height:50}} />
            <Text></Text>

            <NavigationContainer>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        if (route.name === 'FRIDGIT') {
                            return (
                                <Ionicons
                                    name={'home-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Settings') {
                            return (
                                <Ionicons
                                    name='md-settings-outline'
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                        else if (route.name === "Recipes") {
                            return (
                                <Ionicons
                                    name='md-list-outline'
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                })}
                               tabBarOptions={{
                                   activeTintColor: 'blue',
                                   inactiveTintColor: 'gray',
                               }}

                    //de tre tabs oprettes her med navne og integregering af de forskellige komponenter
                    >
                    <Tab.Screen name="FRIDGIT" children={()=> <FridgitPage prop={fridgitPageText}/>} />
                    <Tab.Screen name="Recipes" children={()=> <RecipesPage prop={recipesPageText}/>} />
                    <Tab.Screen name="Settings" children={()=> <SettingsPage prop={settingsPageText}/>} />

                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>

    );

}

//stylesheet til homepage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: '#ffffff',
        padding: 8,
        },
});

//homepage eksporteres
export default HomePage
