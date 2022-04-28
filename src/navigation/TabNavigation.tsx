import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import {FontAwesome5} from "@expo/vector-icons"
import Episodes  from '../screens/Episodes';
import  CharactersLocation  from '../screens/CharactersLocation';
import CharacterNavigaton from './CharacterNavigaton';


export type RootTabParamList = {
    Locations: undefined;
    Characters:undefined;
    Episodes: undefined;
    
  }
export default function TabNavigation() {
    const Tab = createBottomTabNavigator<RootTabParamList>();
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#B7E4F9FF",
            tabBarActiveBackgroundColor: "#526E2DFF",
            tabBarInactiveBackgroundColor: "#E7E0DB",
            tabBarInactiveTintColor: "#526E2DFF",
            headerShown: false
          }}>
            <Tab.Screen name ="Characters"
             component={CharacterNavigaton} 
            options={{tabBarIcon:({color, size}) => (
            <FontAwesome5 name="list" size ={size} color={color}/>
            ),
            }}/>
             <Tab.Screen name ="Episodes" 
             component = {Episodes} options={{tabBarIcon:({color, size}) => (
            <FontAwesome5 name="file-video" size ={size} color={color}/>
            ),
            }}/>
      
      
            <Tab.Screen name ="Locations"
             component = {CharactersLocation} 
             options={{tabBarIcon:({color, size}) => (
            <FontAwesome5 name="map-pin" size ={size} color={color}/>
            ),
            }}/>
            
            
          </Tab.Navigator>
         
    )
}
