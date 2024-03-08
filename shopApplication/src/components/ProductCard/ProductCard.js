import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from "./ProductCard.style";

export default function ProductCard({product}) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={{uri: product.image}}
      />

      <View style={styles.body_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>

    </View>
  )
}

