import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../navigation/CharacterNavigaton";
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import colors from "../config/colors";



const GoToRickAndMortySc = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return <View><Button title = "Characters" onPress={() => navigation.navigate("RickAndMorty")}/></View>

    
}


const CharacterDetailSc= ({route,
}: NativeStackScreenProps<RootStackParamList, "CharacterDetails">) => {
    
    
    return (
        <SafeAreaView style = {styles.container}>
          <View style = {styles.backgroundImageContainer}>
          <Image source = {{uri: route.params.image}} style = {styles.backgroundImage}/>
          </View>
          <View style = {styles.details}>
            <Text style = {styles.header}>{route.params.characterName}</Text>
            <Text style = {styles.detailsText}>{route.params.type}Has the number of id {route.params.id}.{route.params.characterName} is a {route.params.gender},and has the following status of {route.params.status}...The kind of species for {route.params.characterName} is as an {route.params.species}! </Text>
        
           <View>
               </View>
             </View>
            <GoToRickAndMortySc/>   
        </SafeAreaView>
); 
};


export {CharacterDetailSc};



const styles = StyleSheet.create({
    container: {flex:1,
       
    },
    backgroundImageContainer: {
      elevation: 20,
      marginHorizontal: 20,
      marginTop: 20,
      alignItems: 'center',
      height: 350,
      
    },
    backgroundImage: {
      height: '100%',
      width: '100%',
      borderRadius: 20,
      overflow: 'hidden',
    },
    header: {
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        fontSize:24,
        fontWeight: "bold"
      },
      details: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        margin:10,
      
     
      },
      detailsText: {
        marginTop: 10,
        lineHeight: 20,
        fontSize: 15,
        fontWeight: "bold",
        color: colors.dark,
      },
     
});