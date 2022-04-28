import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import TabNavigation from "./TabNavigation";


export type RootLoginParamList = {
    Login: undefined;
    Authenticated: {username: string};
  

};

export default function LoginNavigation() {
    const Stack = createNativeStackNavigator<RootLoginParamList>();
    return (
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "Login" component = {LoginScreen} />
            <Stack.Screen name = "Authenticated" component = {TabNavigation} />
        </Stack.Navigator>
    );
}