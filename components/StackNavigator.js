//dependencies og packages importeres
import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SignUpForm from "./StackComponents/SignUpForm";

//der defineres en variabel for at oprette en stacknavigator
const Stack = createStackNavigator()

//der blev forsøgt at lave en stacknavigator men den virker på nuværende tidspunkt ikke
function StackNavigator () {
    return (
        <StackNavigator
            initialRouteName="SignUpForm">
            <Stack.Screen name="SignUpForm" component={SignUpForm} options={{
                headerTitleStyle: {textAlign: "right", color:"white"},
                headerStyle: {backgroundColor: "#62bab5"}}
            } />
        </StackNavigator>
    )
}

//eksport af stacknavigatoren
export default StackNavigator


