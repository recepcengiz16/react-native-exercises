import  {useState} from 'react';
import appAxios from '../../utility';

export default function usePost() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const post = async (url,apiData) => {
        try {
            setLoading(true);
            const {data:responseData} = await appAxios.post(url,apiData);
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    return { data,loading,error,post}

}