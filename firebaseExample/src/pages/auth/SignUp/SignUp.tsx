import {Text, View,TextInput,Button} from 'react-native';
import React from 'react';
import styles from "./SignUp.style";
import { Formik } from 'formik';

export default function SignUp({navigation}): React.JSX.Element {

  const initialState = {
    username:"",
    password:"",
    repassword:""
  };

  const handleFormSubmit = (formValues) => {
    console.log(formValues);
  }

  return (
    <View style={styles.container}>
      <Text>Bana ne?</Text>
      <Formik initialValues={initialState} onSubmit={handleFormSubmit}>
        {
          ({handleSubmit,values,handleChange}) => 
          (
            <>
              <TextInput value={values.username} onChangeText={handleChange("username")} placeholder='E postanızı giriniz..' style={styles.text} />
              <TextInput value={values.password} onChangeText={handleChange("password")} placeholder='Şifrenizi giriniz..' style={styles.text} />
              <TextInput value={values.repassword} onChangeText={handleChange("repassword")} placeholder='Şifrenizi giriniz..' style={styles.text} />
              <Button title='Kayıt Ol' onPress={handleSubmit} />
            </>
          )
        }
      </Formik>
      <Button title='Geri' onPress={()=>navigation.goBack()} />
    </View>
  )
}
