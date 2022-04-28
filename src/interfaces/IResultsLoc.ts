import { ILocation } from "./ILocation";

export interface ResultsLocation {
    info: {
        count: number, 
        pages: number, 
        next: string, 
        prev: string, 
    },
    
    results: ILocation[]
    
    
    
}