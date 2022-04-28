import { useState } from "react";
import { ICharacter } from "../interfaces/ICharacter";


const useApi = <T = ICharacter>(apiFunction: Function) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
 
     async function request(...args: unknown[]){
         try {
             setLoading(true);
             setError(false);
             const data = await apiFunction(...args);
             setData(data);
            /* console.log(data);*/
         } catch (error) {
             setError(true);
         } finally {
             setLoading(false);
         }
        
     }

     return {data,error,loading,request}; 
 
};

export default useApi;