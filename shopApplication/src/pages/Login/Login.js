import { Button, Image, SafeAreaView, Text, TextInput, View} from 'react-native'
import React from 'react'

import styles from "./Login.style"

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../../assets/sepet.png")} />
      </View>
      <View style={styles.body_container}>
        <TextInput style={styles.input} placeholder='Kullanıcı Adı' />
        <TextInput style={styles.input} placeholder='Şifre' />
        <Button title='Giriş Yap' />
      </View>
    </SafeAreaView>
  )
}
