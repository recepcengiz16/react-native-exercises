import { Text, View, ActivityIndicator, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import useAxios from '../../hooks/useAxios';
import styles from "./Detail.style";
import DetailCard from '../../components/Detail/DetailCard';

export default function Detail({route,navigation}) {

    const id=route.params.id;
    const {loading,error,data} = useAxios(`lookup.php?i=${id}`);

    const renderItm = ({item})=> <DetailCard detail={item} />

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
          data={data.meals}
          renderItem={renderItm}
        />

    </View>
  )
}

