import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SignUpForm from "./StackComponents/SignUpForm";

const Stack = createStackNavigator()

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

export default StackNavigator


