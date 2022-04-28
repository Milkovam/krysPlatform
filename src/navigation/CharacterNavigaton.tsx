import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React  from 'react'
import { CharacterDetailSc } from '../screens/CharacterDetailSc';
import  RickAndMortyScreen  from '../screens/RickAndMortyScreen';


export type RootStackParamList = {

  
    CharacterDetails: {characterName: string; id: number; gender: string; species: string; status: string; image: string; type: string;};
    RickAndMorty:undefined;
    CharacterList: undefined;
   


  }
  
export default function CharacterNavigaton() {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator initialRouteName = "RickAndMorty" screenOptions = {{
            headerStyle: {backgroundColor: "#526E2DFF"},
           headerTintColor: "#B7E4F9FF"}}>
          <Stack.Screen name = "RickAndMorty" component = {RickAndMortyScreen} />
      
            <Stack.Screen name = "CharacterDetails" component = {CharacterDetailSc} 
            options={({route}) => ({title: route.params.characterName, 
             
             })} />
           
          </Stack.Navigator>
    )
}


