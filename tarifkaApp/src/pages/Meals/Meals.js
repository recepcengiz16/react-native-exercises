import { Text, View, ActivityIndicator, FlatList, TouchableWithoutFeedback, ImageBackground, Alert } from 'react-native';
import React from 'react';
import styles from "./Meals.style";
import useAxios from '../../hooks/useAxios';

export default function Meals({route,navigation}) {
    const name= route.params.name;
    const {loading,error,data} = useAxios(`filter.php?c=${name}`);
    const meals = data.meals;
    console.log("meals:data:",data);

    const renderItm = ({item}) => {
        return (
         <TouchableWithoutFeedback onPress={ () => navigation.navigate("Detail",{id:item.idMeal}) }>
            <View style={styles.container}>
              
              <ImageBackground source={{uri:item.strMealThumb}} style={styles.image}>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.strMeal}</Text>
                  </View>            
              </ImageBackground>

            </View>
         </TouchableWithoutFeedback>
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
                data={meals}
                renderItem={renderItm}
                keyExtractor={(x)=>x.idMeal}
            />
        
        </View>
    )
}

