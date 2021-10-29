import React from 'react';
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsPage from "../components/SettingsPage";
import RecipesPage from "../components/RecipesPage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from "../assets/logo.png";
import FridgitPage from "../components/FridgitPage";

const fridgitPageText = "This is FridgetPage!";
const settingsPageText = "This is SettingPage!";
const recipesPageText = "This is RecipePage!"

const Tab = createBottomTabNavigator();


function HomePage () {
    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }
    return (
        <View style={styles.container} >
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
                >
                    <Tab.Screen name="FRIDGIT" children={()=> <FridgitPage prop={fridgitPageText}/>} />
                    <Tab.Screen name="Recipes" children={()=> <RecipesPage prop={recipesPageText}/>} />
                    <Tab.Screen name="Settings" children={()=> <SettingsPage prop={settingsPageText}/>} />

                </Tab.Navigator>
            </NavigationContainer>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: '#ffffff',
        padding: 8,
        alignItems: 'center'
        },
});

export default HomePage
