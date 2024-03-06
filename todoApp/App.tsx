import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Todo from './src/components/Todo';

export default function App(): React.JSX.Element {

  const [isVisible, setIsVisible] = useState(false);
  const isVisibleObj= {
    isVisible,
    setIsVisible,
  }

  return (
    <View style={styles.container}>
      <Todo isVisibleObj={isVisibleObj} />
      <TouchableOpacity 
        onPress={() => setIsVisible(true)} 
        style={styles.buttonAdd}
      >
        <Text> Ekle </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 200,
  },
  buttonAdd: {
    backgroundColor: '#F194FF',
    padding: 10,
    borderRadius: 15
  },
})