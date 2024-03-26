import { StyleSheet, Text, View, FlatList, ActivityIndicator, Button } from 'react-native'
import React from 'react';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import {useDispatch} from "react-redux";

export default function Products({navigation}) {

  const handleProductSelect = (id)=>{
    navigation.navigate("Detail",{id:id});
  }
  
  const renderItem = ({item}) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />; 
  
  const {error,loading,data} = useFetch("products");
  const dispatch = useDispatch();

  if (loading) {
    return (
      <ActivityIndicator size="large" />
    )
  }
  
  if (error) {
    return (
      <Text>{error}</Text>
    )
  }

  return (
    <View>

      <Button title='LogOut' onPress={()=>dispatch({type:"SET_USER",payLoad:{user:null}})} />

      <FlatList
        data={data}
        keyExtractor={(x)=> x.id}
        renderItem={renderItem}
      />

    </View>
  )
}

const styles = StyleSheet.create({})