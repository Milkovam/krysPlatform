import Axios from "axios";
import {ICharacter} from "../interfaces/ICharacter"
import {ILocation} from "../interfaces/ILocation"
import {IEpisode} from "../interfaces/IEpisode"


Axios.defaults.baseURL = "https://rickandmortyapi.com/api/"


const getCharacter = async (character: number | string) => {
    try {
        const response = await Axios.get<ICharacter>("character/" + character)
        return response.data;
    } catch (error){
        throw "Feil ved henting av character:" + error;
    }
};


const getAllCharacters = async () => {
    try {
        const response = await Axios.get<ICharacter>("character/");
        return response.data;
        
    } catch (error) {
        throw "Feil ved henting av character: " + error ;
        
    }
};

const getLocation = async (location: number | string) => {
    try {
        const response = await Axios.get<ILocation>("location" + location)
        return response.data;
    } catch (error){
        throw "Feil ved henting av location:" + error;
    }
};


const getAllLocations = async () => {
    try {
        const response = await Axios.get<ILocation>("location/");
        return response.data;
        
    } catch (error) {
        throw "Feil ved henting av location: " + error ;
        
    }
};

const getEpisode = async (episode: number | string) => {
    try {
        const response = await Axios.get<IEpisode>("episode/" + episode)
        return response.data;
    } catch (error){
        throw "Feil ved henting av episode:" + error;
    }
};


const getAllEpisodes = async () => {
    try {
        const response = await Axios.get<IEpisode>("episode/");
        return response.data;
        
    } catch (error) {
        throw "Feil ved henting av episode: " + error ;
        
    }
};

export {
    getCharacter,
    getAllCharacters,
    getLocation,
    getAllLocations,
    getEpisode,
    getAllEpisodes,
}
