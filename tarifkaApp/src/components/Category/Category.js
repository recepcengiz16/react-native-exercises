import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import useAxios from '../../hooks/useAxios';

export default function Category() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
      
        const getCategories = async ()=> {
            const {data} = await useAxios("list.php?c=list");
            console.log(data);
        }
        
        getCategories();
    
    }, [])
    

  return (
    <View>
      <Text>Category</Text>
    </View>
  )
}

const styles = StyleSheet.create({})