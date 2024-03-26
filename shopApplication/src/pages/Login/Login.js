import { Alert, Button, Image, SafeAreaView, Text, TextInput, View, ActivityIndicator} from 'react-native';
import React from 'react'
import styles from "./Login.style";
import { Formik } from 'formik';
import usePost from "../../hooks/usePost";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";

export default function Login({navigation}) {
  //async storage verileri telefonda saklamaya yarıyor. Mesela kullanıcı login oldu bilgileri sakladın. Çıkış yapmadıysa her zaman logine gitmesin de anasayfaya gitsin manası

  //ne zaman butona basılırsa handlesubmiti çağırıyor o da formikdeki onSubmit callbackini tetikler. O callback de geriye post edilecek valueları geri döner

  //formik bizi her defasında state deki güncelleme olduğunda her defasında render oluyordu ya ondan da koruyor bizi
  const {data,error,loading,post} = usePost();
  const dispatch= useDispatch();
  const handleLogin = async (values) => {
     console.log(values);
     await post("auth/login",values);
  }

  if (error) {
    Alert.alert("Kullanıcı bulunamadı. Hata:" +error);
  }

  if (data) {
    if (data.status=="Error") {
      Alert.alert("Dükkan","Kullanıcı bulunamadı");
    }else{
      dispatch({type:"SET_USER",payLoad:{data}})
      
    }
  }

  if (loading) {
    return (
      <ActivityIndicator size='large' />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../../assets/sepet.png")} />
      </View>
      <Formik
        initialValues={ {username:'', password:''} }
        onSubmit={handleLogin}
      >
        {
          ({handleSubmit,handleChange,values})=>(
            <View style={styles.body_container}>
              <TextInput 
                style={styles.input} 
                placeholder='Kullanıcı Adı' 
                value={values.username} 
                onChangeText={handleChange("username")} 
              />
              <TextInput 
                style={styles.input} 
                placeholder='Şifre' 
                value={values.password}
                onChangeText={handleChange("password")} 
                secureTextEntry={true}
              />
              <Button title='Giriş Yap' onPress={handleSubmit} disabled={loading} />
              
            </View>
          )
        }
      </Formik>
    </SafeAreaView>
  )
}
