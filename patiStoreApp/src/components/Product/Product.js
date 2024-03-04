import { Text, View, Image } from 'react-native';
import React from 'react';
import styles from "./Product.style";

export default function Product({product}) {
  return (
    <View style={styles.inner_container}>
      <Image style={styles.image} source={{uri:product.imgURL}} />  
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}
