import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native'
import React from 'react'
import styles from "./DetailCard.style";

export default function DetailCard({detail}) {
  return (
    <View>
        <Image source={{uri:detail.strMealThumb}} style={styles.image} />
      
        <Text style={styles.title}>{detail.strMeal}</Text>
        <Text style={styles.area}>{detail.strArea}</Text>
        <View style={styles.line}></View>
        <Text style={styles.desc}>{detail.strInstructions}</Text>
        
        <View>
            <TouchableOpacity style={styles.btn} onPress={() => Linking.openURL(detail.strYoutube)}>
                <Text style={styles.btnText}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

