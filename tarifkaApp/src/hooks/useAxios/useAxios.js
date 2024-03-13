import { useState, useEffect } from "react";
import appAxios from "../../utility";

function useAxios(url){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([null]);

   


    useEffect(() => {        
        
        const getData = async () => {
            try {
    
                const {data : responseData} = await appAxios.get(url);                   
                const response = await appAxios.get(url);
                               
                console.log("responseData",responseData.categories);
                setData(responseData.categories);
                setLoading(false);
    
            } catch (error) {
                setLoading(false);
                console.log(error.message)
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

export default useAxios;