
import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';

import NewsCard from './src/components/NewsCard';
import newsData from "./news_data.json";
import newsBannerData from "./news_banner_data.json";


export default function App(): React.JSX.Element {

  const renderItems = ({item})=> <NewsCard news={item} /> ;
  //ListHeader componenti ile normalde flast ile aynı seviyede üstünde ya da altında bir component ya da element varsa onun üstünde bir kaydırma yapamıyor. Onun için biz de ListHeaderComponent denilen atttr. içerisinde yazarsak o zaman onu alt tarafa kaydırıyor, kaydırma yapıyor
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}> News </Text>
     <FlatList
        ListHeaderComponent={()=>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              newsBannerData.map(bannerNews => <Image source={{uri:bannerNews.imageUrl}} style={styles.banner_image} /> )
            }
          </ScrollView>
        }
        keyExtractor={(item) => item.u_id.toString()}
        data={newsData}
        renderItem={ renderItems }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#eceff1",
  },
  banner_image:{
    height:Dimensions.get("window").height/5,
    width:Dimensions.get("window").width/2,
  },
  headerText: {
    textAlign:"center",
    fontWeight:"bold",
    fontSize:50,
    color:"black"
  }
});


