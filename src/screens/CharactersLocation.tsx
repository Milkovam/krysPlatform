import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, {useState, useEffect}from "react";
import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, View, FlatList,
TouchableOpacity, Image, Pressable, Linking, Dimensions, Animated, Platform} from "react-native";
import colors from "../config/colors";

import useApi from "../hooks/useApi";
import { getAllEpisodes, getAllLocations } from "../Api/CharactersApi";

import { RootTabParamList } from "../navigation/TabNavigation";

import { ResultsLocation } from "../interfaces/IResultsLoc";

const {width, height} = Dimensions.get("window");




export default function Locations({navigation}:
  NativeStackScreenProps<RootTabParamList, "Locations">) {
  
    const {data,request, loading, error } = useApi<ResultsLocation>(getAllLocations);
   
    
    const bg_img = "https://cdn.shopify.com/s/files/1/0017/8067/8708/products/UNADJUSTEDNONRAW_thumb_7f9.jpg?v=1574993588";
    let scrollY = React.useRef(new Animated.Value(0)).current;

    

    useEffect(() => {
            request(getAllEpisodes()).then(response => {
           
            })
    }, []);

    return (
        
        <SafeAreaView style= {styles.container}>
           <View>
           <ActivityIndicator animating = {loading} size="large"/>
           {error && (
               <>
               <Text>Det gikk ikke så bra.. </Text>
               <Button title  = "try again.." onPress = {getAllEpisodes}></Button>
               </>
           )}

         <Text style = {styles.Title}>Locations</Text>
            </View>

            {!error && !loading && (
               <>

            <View >
           
           <Animated.FlatList 
            data = {data?.results}
            onScroll = {Animated.event(
                [{
                    nativeEvent: {contentOffset: {y: scrollY}}
                }],
                {useNativeDriver: true}

            )}
            keyExtractor={(index) => index.id.toString()}
            contentContainerStyle = {{padding: 20, paddingTop: 35}}
            renderItem = {({item}) =>

            <TouchableOpacity>
            <View style = {styles.list}>
            <Image source ={require("../images/locations.webp")} style = {styles.imageStyle} />
            <View >
                   
                <Text style= {styles.textStyle}> {item.name}</Text>
                <Text style = {styles.textStyleInfo}> {item.type}</Text>
                <Text style = {styles.textDimensionInfo}> {item.dimension}</Text>
                

             </View>
            </View>
                   
            </TouchableOpacity>
           
                }
        />
      
        </View>
        </>
            )}
        
        </SafeAreaView>
       
       
    );
    
            }


            const styles= StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: colors.rickMorty
                   


                },

                list: {
                    flexDirection: "row", 
                    padding: 20,
                     marginBottom:20, 
                     backgroundColor: colors.inactive,
                     borderRadius: 10,
                     shadowColor: colors.inactive,
                     shadowOffset: {
                         width: 0,
                         height: 10
                     },
                     shadowOpacity: .3, 
                     shadowRadius: 20
                },
                
            
                imageStyle:{
                    width: 50,
                    height: 50,
                    borderRadius: 10, 

                },

                textStyle: {
                    fontSize:18, 
                    fontWeight:"700",
                    color: colors.rickMorty
                },
                textDimensionInfo: {
                    fontSize: 16, 
                    opacity: .8,
                    

                }, 

                textStyleInfo: {
                    fontSize: 14, 
                    opacity: .7,
                    color: colors.primary,
                    fontWeight: "bold"
                },
                Title: {
                    backgroundColor: colors.inactive, 
                    color: colors.rickMorty, 
                    borderWidth:2, 
                    borderColor: colors.rickMorty, 
                    textAlign: "center", 
                    padding: 2, 
                    height: 35, 
                    fontSize: 22, 
                    fontWeight: "bold",
                   
                }
            
            
              
             
            });
              

      


