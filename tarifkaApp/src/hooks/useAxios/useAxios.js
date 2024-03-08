import { useState, useEffect } from "react";
import appAxios from "../../utility";


export default function useAxios(url){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      
        const getData = async () => {
            try {
                
                const {data : responseData} = await appAxios.get(url);
                setData(responseData);
                setLoading(false);

            } catch (error) {
                setLoading(false);
                setError(error.message);
            }


        }

        getData();
    
      
    }, []);

    return {
        loading,
        error,
        data
    }
    

}