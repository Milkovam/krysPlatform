import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, {useState, useEffect}from "react";
import { RootStackParamList } from "../navigation/CharacterNavigaton";
import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image, Platform, ActivityIndicator, Button, RefreshControl} from "react-native";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import { Results } from "../interfaces/IResults";
import { getAllCharacters } from "../Api/CharactersApi";
import {FontAwesome5} from "@expo/vector-icons"


function RickAndMortyScreen({navigation, }: NativeStackScreenProps<RootStackParamList, "CharacterList">){

    const {data,request, loading, error} = useApi<Results>(getAllCharacters);

    const [searchCharacter, setSearchCharacter] = useState("");
    const [character, setCharacter] = useState(data?.results);


  const searchBar = (value: string) => {
      setSearchCharacter(value);

      let searchStatus = data?.results.filter(character => character.status.toLowerCase() === value.toLowerCase());
      let searchGender = data?.results.filter(character => character.gender.toLowerCase() === value.toLowerCase());
      let searchSpecies   = data?.results.filter(character => character.species.toLocaleLowerCase() ===value.toLowerCase());
    
      /* improvisering, til å få navn oppslagg til å fungere :)  linje 27-44*/
      var searchName = new Array();
      data?.results.forEach(function(character) {
          if (character.name.toLowerCase() === value.toLowerCase())
          {
              searchName.push(character)
          }
          else {
              if (character.name.toLowerCase().split(" ").includes(value.toLowerCase())){
                  searchName.push(character)
              }
          }
          if (searchName?.length != 0){
              setCharacter(searchName);
              searchName = []
          }
      })

      
      if (searchGender?.length != 0) {
          setCharacter(searchGender);
          searchGender = []

      }

      if (searchStatus?.length != 0) {
          setCharacter(searchStatus);
          searchStatus = []
      }
      if (searchSpecies?.length != 0) {
        setCharacter(searchSpecies);
        searchSpecies = []
    }
      
  }

    useEffect(() => {
        
        request(getAllCharacters()).then(response => {
           
            })
             
    }, []);


    useEffect(() => {
        setCharacter(data?.results);
    }, [data?.results]);



    return (
        <SafeAreaView style = {styles.Container}>
                 
            <View style={styles.MainContainer} >
             
            <TextInput style = {styles.textInputStyle} onChangeText = {searchBar} placeholder = "Search status, gender or species (?name)"  />  
            <FontAwesome5 style = {styles.textInputIcon} name= "search" size ={20} color={"#526E2DFF"}/>
            
           
            <ActivityIndicator animating = {loading} size="large"/>
           {error && (
               <>
               <Text>Det gikk ikke så bra.. </Text>
               <Button title  = "try again.." onPress = {getAllCharacters}></Button>
               </>
           )}
            
            {!error && !loading && (
               <>
            <FlatList 
            data = {character}
            keyExtractor={(index) => index.id.toString()}
            renderItem = {({item}) => 
            <TouchableOpacity onPress={() => {
                navigation.navigate("CharacterDetails", {characterName:item.name, id: item.id, gender: item.gender, species: item.species, status: item.status, image:item.image,type: item.type, }
            )}}>
            <View style = {styles.Container}>
                
            <Image source = {{uri: item.image}} style ={styles.imageStyle} />
             <View>
                    
            <Text style={[styles.DataStyle]}>{item.name}</Text>
            <Text style ={[styles.StatusStyle]}>{item.status}</Text>
            <Text style = {[styles.SpeciesStyle]}>{item.species}</Text>
            <View style = {styles.detailStyle}>
                        
            </View>

                
            </View>
                
            </View>
            </TouchableOpacity>
        }
        />
        </>
            )}
        </View>
        </SafeAreaView>
    )
    };


    const styles = StyleSheet.create({
        Container: {
          flexDirection: "row",
          paddingHorizontal: 5,
          paddingVertical: 10,
          borderBottomWidth: 3,
          borderColor: colors.rickMorty,
          backgroundColor:colors.light,
          
        },
        
        imageStyle: {
            resizeMode: "cover",
                height: 60,
                width: 90,
                borderRadius: 10,
        },
        MainContainer: {
          justifyContent: "space-around",
          flex:1, 
        },
        DataStyle: {
          fontSize: 20,
          fontWeight: "bold", 
          paddingLeft: 12,
            
          
        },
        StatusStyle: {
          color: colors.rickMorty,
          paddingLeft:12,
          fontSize:15,
    
        },
        SpeciesStyle: {
            color: colors.rickMorty,
            paddingLeft:12,
            fontSize:15,
        },
        textInputStyle: {
           
            borderColor: colors.rickMorty, 
            backgroundColor: colors.inactive, 
            flexDirection: "row", 
            justifyContent: "space-around", 
            alignContent: "center",
            textAlign: "center",
            width: "100%",
            height:40,
            borderRadius:10, 
            borderWidth: 5,
            
        },

        textInputIcon: {
            flexDirection: "row",
            justifyContent: "flex-start", 
            paddingVertical: 10, 
            paddingHorizontal: 20,  
            position: "absolute"

            
        

        },
        detailStyle: {
          flexDirection: "row",
          

        },
       
        
      });
      

    
export default RickAndMortyScreen;


