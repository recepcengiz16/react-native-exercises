import { useEffect, useState } from "react";
import appAxios from '../../utility';

function useFetch(url) {
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {

        try {
          const {data: responseData} = await appAxios.get(url);
          // destract işleminden sonra data diyerek alıyorum ve bu şekilde ona farklı bir isim veriyorum.
          //const response = await appAxios.get(url);
          setData(responseData);
          setLoading(false);
          
        } catch (error) {
          setLoading(false);
          setError(error.message);        
        }
  
    };
  

    useEffect(() => {

        getData();

    }, []);
    
    return {
        error,
        loading,
        data
    }

}

export default useFetch;