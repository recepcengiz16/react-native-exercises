import { StyleSheet, Text, View,FlatList, TextInput } from 'react-native';
import React, { useEffect,useState } from 'react';
import Product from './src/components/Product';
import products from "./products.json";

export default function App(): React.JSX.Element {
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const renderItemFn = ({item}) => <Product product={item} />

  useEffect(()=>{
    if (searchValue=="") {
        setFilteredDatas(products);
        
    }else{
      let data = products.filter(x=>x.title.includes(searchValue));
      setFilteredDatas(data);
    }
  },[searchValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>

      <TextInput style={styles.text} onChangeText={(val) => setSearchValue(val)} placeholder='Aranacak kelime..' />

      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={filteredDatas}
        renderItem={ renderItemFn }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    backgroundColor: '#b2b2b2',
  },
  header: {
    alignSelf:"flex-start",
    color:"purple",
    fontSize:30
  },
  text:{
    backgroundColor:"white",
    margin:5,
    borderRadius:10,
    padding:5
  }
});