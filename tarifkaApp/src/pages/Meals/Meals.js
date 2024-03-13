import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import styles from "./Meals.style";
import useAxios from '../../hooks/useAxios';

export default function Meals({route,navigation}) {
    const name= route.params.name;
    console.log("routerName:"+name);
    const {data,loading,error} = useAxios(`filter.php?c=${name}`);

    console.log("meals:data:",data);

    const renderItm = ({item}) => {
        return (
         <TouchableOpacity>
            <View style={styles.container}>
              <Image source={{uri:item.strMealThumb}} style={styles.img} />
              <Text style={styles.text} >{item.strMeal}</Text>
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
                keyExtractor={(x)=>x.idMeal}
            />
        
        </View>
    )
}

