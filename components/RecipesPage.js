import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {RECIPES} from "../const";

const RecipesPage = () => {
    return(
        <View style={styles.container}>
            <Text>Opskrifter</Text>
            <ScrollView style={{height:100}}> {
                    RECIPES.map((recipes,key) => {
                        return(
                            <Text key={key}>
                                {recipes}
                            </Text>
                        )
                    })
                }
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