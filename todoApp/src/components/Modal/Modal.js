import { Text, View, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from "./Modal.style";

export default function Modal({modal}) {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal.isVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity style={styles.button}>
                <Text>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

