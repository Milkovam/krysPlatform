import { ICharacter } from "./ICharacter";



export interface Results {
    info: {
        count: number, 
        pages: number, 
        next: string, 
        prev: string, 
    },
    
    results: ICharacter[]
    
    
    
}

