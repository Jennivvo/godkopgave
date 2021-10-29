import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {RECIPES} from "../const";

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