import {Button, Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from "./Login.style";
import { Formik } from 'formik';

export default function Login({navigation}): React.JSX.Element {

  const initialState = {
    username:"",
    password:""
  };

  const handleLogin = (formValues) => {
    console.log(formValues);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bana ne?</Text>
      <Formik initialValues={initialState} onSubmit={handleLogin}>
        {
          ({values,handleChange,handleSubmit}) => (
            <>
              <TextInput onChangeText={handleChange("username")} value={values.username} placeholder='E postanızı giriniz..' style={styles.text} />
              <TextInput onChangeText={handleChange("password")} value={values.password} placeholder='Şifrenizi giriniz..' style={styles.text} />
              <Button title='Giriş Yap' onPress={handleSubmit} />
            </>
            
            )
          }
      </Formik>
      <Button title='Kayıt Ol' onPress={()=>navigation.navigate("SignUp")} />
    </View>
  );
}