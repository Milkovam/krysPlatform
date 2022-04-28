import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { RootLoginParamList } from "../navigation/LoginNavigation";


export default function LoginScreen({navigation}:
     NativeStackScreenProps<RootLoginParamList, "Login">) 
{

    const image = 
    "https://wallpaperaccess.com/full/401141.jpg";
    return (
        <ImageBackground
        style = {styles.image}
        resizeMode ="cover"
        source={{uri: image}}
        >

            <View style = {styles.innerContainer}>
                <Button title ="Take me to Rick & Morty´s world!" onPress={() => navigation.navigate("Authenticated", {username: "tester",
            })
            } />
                <Button 
                title ="Nope, prefer the landing page!"
                 type = "light" 
                 onPress ={() => console.log("landing page!")} 
                 />

            </View>

        </ImageBackground>
    );

}

const styles = StyleSheet.create ({
    image: {
        flex:1,
        justifyContent: "flex-end",
    }, 
    innerContainer: {
        padding: "20%",
    },
});