import {  Text, View, Image, ActivityIndicator } from 'react-native'
import React from 'react';
import styles from "./Detail.style";
import useFetch from '../../hooks/useFetch';

export default function Detail({route}) {

  const {id} = route.params;
  const {loading,error,data} = useFetch(`products/${id}`);

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
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:data.image}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  )
}

