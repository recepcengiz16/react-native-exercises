import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './src/pages/Products';
import Detail from './src/pages/Detail';
import Login from './src/pages/Login';

//proje klasörü içindeyken yani showApplication klasörü dizinine gel ondan sonra  cd android && ./gradlew clean && cd.. 
// bu komut yükleme yaparken bir hata oldu diyelim ya da benzeri şeyler gider cache i siler android kütüphane dosyalarında 



const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor:"#64b5f6" }}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: 'Dükkan',
          }}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
})