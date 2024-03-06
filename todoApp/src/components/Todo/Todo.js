import { Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './Todo.styles'

export default function Todo({isVisibleObj}) {
  return (
    <View>
       <Modal
        animationType="slide"
        transparent={true}
        visible={isVisibleObj.isVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
            placeholder='Yapılacaklar..' 
                style={styles.todo}
            />
            <TouchableOpacity 
                
                style={styles.button}
                onPress={()=> {isVisibleObj.setIsVisible(false)}}
            >
                <Text>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

