import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, {useState, useEffect}from "react";
import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, View, FlatList,
TouchableOpacity, Image, Linking, Dimensions, Animated} from "react-native";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import { getAllEpisodes } from "../Api/CharactersApi";
import { RootTabParamList } from "../navigation/TabNavigation";
import { ResultsEpisode } from "../interfaces/IResultsEpisode";

//const {width, height} = Dimensions.get("window")




export default function Episodes({navigation}:
  NativeStackScreenProps<RootTabParamList, "Episodes">) {
  
    const {data,request, loading, error} = useApi<ResultsEpisode>(getAllEpisodes);

    const bg_img = "https://cdn.vox-cdn.com/thumbor/6hjeYNT2i0mOv_3zovQP3QmJ3O0=/0x0:2200x1467/1400x933/filters:focal(924x558:1276x910):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69626164/rick_morty_sdcc.0.jpg";
    let scrollY = React.useRef(new Animated.Value(0)).current;

    


    useEffect(() => {
       
            request(getAllEpisodes()).then(response => {
           
            })
    
    }, []);

    return (
        
        <SafeAreaView style= {styles.container}>

            <Image source = {{uri: bg_img}} style = {StyleSheet.absoluteFill}
             />

           <View>
           <ActivityIndicator animating = {loading} size="large"/>
           {error && (
               <>
               <Text>Det gikk ikke så bra.. </Text>
               <Button title  = "try again.." onPress = {getAllEpisodes}></Button>
               </>
           )}

         <Text style = {styles.Title}>Episodes</Text>
            </View>

            {!error && !loading && (
               <>

            <View>
           
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
                   
            <Image source ={require("../images/episode.png")} style = {styles.imageStyle} />

                <View >
                   
                
            <Text style= {styles.textStyle}> Episode: {item.episode}</Text>
            <Text style = {styles.textNameInfo}> {item.name}</Text>
            <Text style = {styles.textStyleInfo}> Date: {item.air_date}</Text>
                
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
                    flex: 1


                },

                list: {
                    flexDirection: "row", 
                    padding: 20,
                     marginBottom:20, 
                     backgroundColor: "white",
                     borderRadius: 10,
                     shadowColor: "#000",
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
                },
                textNameInfo: {
                    fontSize: 16, 
                    opacity: .8

                }, 

                textStyleInfo: {
                    fontSize: 14, 
                    opacity: .7
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
              

      
       

          
            
       
    

