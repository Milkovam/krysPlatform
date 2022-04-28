import React from "react";
import { GestureResponderEvent, TouchableHighlight } from "react-native";
import { StyleSheet, Text} from "react-native";
import colors from "../config/colors";

type Props = {
    onPress: (event: GestureResponderEvent) => void;
    title: string; 
    type?: "primary" | "secondary" | "light" | "danger";
};

export default function Button ({onPress, title, type="primary"}: Props) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: colors[type], 
            marginBottom:15, 
            padding:12, 
            borderRadius:20, 
            alignItems: "center",
            borderWidth:1, 
            borderColor: colors.dark,
        },

        text:{
            fontSize: 15, 
            textTransform: "uppercase", 
            color: colors.dark,
            fontWeight: "500",
        },
    });
    return (
        <TouchableHighlight
        underlayColor = {colors.dark}
        style = {styles.button}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>

        </TouchableHighlight>
    );
}