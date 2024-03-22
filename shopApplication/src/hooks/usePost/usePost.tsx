import appAxios from '../../utility';
import  {useState} from 'react';

export default function usePost() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const post = async (url,apiData)=>{
        try {
            setLoading(true);
            const {data:responseData} = await appAxios.post(url,JSON.stringify(apiData));
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    return { data,loading,error,post}

}