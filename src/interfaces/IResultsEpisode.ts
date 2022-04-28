import { IEpisode } from "./IEpisode";


export interface ResultsEpisode{
    info: {
        count: number, 
        pages: number, 
        next: string, 
        prev: string, 
    },
    results: IEpisode[]
    
    
    
    
}