//dependencies og packages importeres
import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {RECIPES} from "../const";

//opskrift-siden består af en funktion som først kombinerer alle ingredienser til en string, vha en for each, hvorefter
//den vil returnere et view bestående af et scrollview, hvor opskrifterne hentes
const RecipesPage = () => {
    const arr = [];
    RECIPES.forEach(item => {
        arr.push(item.ingrediens.join(" "))
    })

    console.log(arr)

    return(
        <View style={styles.container}>
            <ScrollView style={{height:100}}>
                {RECIPES.map((recipe, index) => {
                    return (
                        <View key={index}>
                        <Text >{recipe.name}</Text>
                        <Text> {arr[index]} </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

//stylesheet til opskrift-siden
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});



export default RecipesPage;

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RecipesPage;*/