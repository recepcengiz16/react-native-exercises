import {  Text, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react';
import useAxios from '../../hooks/useAxios';
import styles from "./Category.style";


export default function Category({navigation}) {

    const {loading,error,data} = useAxios("categories.php");  
    console.log(data)
    const renderItm = ({item}) => {
      return (
       <TouchableOpacity onPress={() => navigation.navigate("Meals",{name:item.strCategory})}>
          <View style={styles.container}>
            <Image source={{uri:item.strCategoryThumb}} style={styles.img} />
            <Text style={styles.text} >{item.strCategory}</Text>
          </View>
       </TouchableOpacity>
      )     
    }

    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <View>
      
        <FlatList
          data={data}
          renderItem={renderItm}
          keyExtractor={(item) => item.idCategory.toString()}
        />

      </View>
    )
}
