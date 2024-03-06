import {StyleSheet, View, TouchableOpacity, Text, FlatList} from 'react-native';
import React from 'react';


export default function App(): React.JSX.Element {

  return (
    <View style={styles.container}> 

      <FlatList 
        
      />

      <TouchableOpacity>
        <Text>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})