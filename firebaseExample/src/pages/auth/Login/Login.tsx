import {TextInput, View} from 'react-native';
import React from 'react';
import styles from "./Login.style";

export default function Login(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TextInput placeholder='E postanızı giriniz..' style={styles.text} />
      <TextInput placeholder='Şifrenizi giriniz..' style={styles.text} />
    </View>
  );
}