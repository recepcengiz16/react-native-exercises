import { Alert, Button, Image, SafeAreaView, Text, TextInput, View, ActivityIndicator} from 'react-native'
import React from 'react'
import styles from "./Login.style";
import { Formik } from 'formik';
import usePost from "../../hooks/usePost";
import appAxios from '../../utility';

export default function Login() {

  //ne zaman butona basılırsa handlesubmiti çağırıyor o da formikdeki onSubmit callbackini tetikler. O callback de geriye post edilecek valueları geri döner

  //formik bizi her defasında state deki güncelleme olduğunda her defasında render oluyordu ya ondan da koruyor bizi
  
  const {data,error,loading,post} = usePost();
  const handleLogin = async (values) => {
    //await post("auth/login",values);
    //console.log("values",values);
    const res =await appAxios.post("auth/login",values);
    console.log(res)
    //console.log("data: ",data);
  }

  if (error) {
    Alert.alert("Kullanıcı bulunamadı. Hata:" +error);
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
              <Button title='Giriş Yap' onPress={handleSubmit} />
              
            </View>
          )
        }
      </Formik>
    </SafeAreaView>
  )
}
